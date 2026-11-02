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
