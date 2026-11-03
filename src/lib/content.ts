import { getCollection, type CollectionEntry } from 'astro:content';

export type Dated =
  | CollectionEntry<'essays'>
  | CollectionEntry<'reviews'>
  | CollectionEntry<'talks'>;
export type Entry = Dated | CollectionEntry<'projects'>;
export type Section = Entry['collection'];

export const DATED = ['essays', 'reviews', 'talks'] as const;

// Drafts are visible in `astro dev` but never published.
const published = ({ data }: Entry) => import.meta.env.DEV || !data.draft;

const newestFirst = (a: Entry, b: Entry) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function entries<S extends Section>(section: S) {
  const all = await getCollection(section, published);
  return all.sort(newestFirst) as CollectionEntry<S>[];
}

// All essays, reviews, and talks, which share the `/YYYY/MM/<slug>` space.
export async function datedEntries(): Promise<Dated[]> {
  const all = (await Promise.all(DATED.map(entries))).flat();
  return all.sort(newestFirst);
}

// All published entries, newest first.
export async function allEntries(): Promise<Entry[]> {
  const all = [...(await datedEntries()), ...(await entries('projects'))];
  return all.sort(newestFirst);
}

// The published projects an entry names in its `projects` frontmatter. An
// unknown project ID fails the build; a draft project is skipped.
export async function projectsOf(entry: Entry) {
  const all = await getCollection('projects');
  return entry.data.projects.flatMap((id) => {
    const project = all.find((project) => project.id === id);
    if (!project) throw new Error(`${entry.id}: unknown project "${id}"`);
    return published(project) ? [project] : [];
  });
}

// The published entries of a section that name a project, newest first.
export async function relatedTo<S extends (typeof DATED)[number]>(
  project: CollectionEntry<'projects'>,
  section: S,
) {
  return (await entries(section)).filter((entry) =>
    entry.data.projects.includes(project.id),
  );
}

// The canonical path of an entry, without a trailing slash or `.html`.
export function url(entry: Entry): string {
  return entry.collection === 'projects'
    ? `/projects/${entry.id}`
    : `/${entry.id}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// Tag slugs match the legacy Hugo ones: lowercased, punctuation dropped
// (`e⧸acc` → `eacc`), and whitespace turned into hyphens.
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

export interface Tag {
  name: string;
  slug: string;
  entries: Entry[];
}

// All tags used by published entries, alphabetically. Tags differing only
// in case or punctuation share a slug, and the first spelling seen wins.
export async function tags(): Promise<Tag[]> {
  const all = await allEntries();
  const bySlug = new Map<string, Tag>();
  for (const entry of all) {
    for (const name of entry.data.tags) {
      const slug = tagSlug(name);
      const tag = bySlug.get(slug) ?? { name, slug, entries: [] };
      tag.entries.push(entry);
      bySlug.set(slug, tag);
    }
  }
  return [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}
