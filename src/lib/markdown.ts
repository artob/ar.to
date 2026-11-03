import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import type { APIRoute } from 'astro';

// Where the source files are published, for images referenced relative to
// an entry (`./foo.jpg`), which the build only emits under hashed names.
const SOURCE = 'https://raw.githubusercontent.com/artob/ar.to/master/';

interface Source {
  filePath?: string;
}

// An entry's Markdown source, frontmatter included, exactly as in the
// repository, except that relative references are made absolute.
export async function markdown(entry: Source): Promise<string> {
  if (!entry.filePath) throw new Error('entry has no source file');
  const base = SOURCE + dirname(entry.filePath) + '/';
  return (await readFile(entry.filePath, 'utf8')).replace(
    /(\]\(|src="|^image: ["']?)\.\//gm,
    `$1${base}`,
  );
}

// Serves the `.md` twin of a page (`props.entry`); see DESIGN.md.
export const GET: APIRoute = async ({ props }) =>
  new Response(await markdown(props.entry as Source), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });

export interface IndexItem {
  title: string;
  url: string; // absolute, or site-relative (e.g. `/2011/01/foo.md`)
  meta?: string; // e.g. the date
  summary?: string; // inline Markdown
}

// A section index in Markdown, `/<section>.md`: a heading, a description,
// and a list of links, generated from the collections on every build.
export function markdownIndex(
  site: URL | undefined,
  title: string,
  description: string,
  items: IndexItem[],
): Response {
  const lines = items.map(({ title, url, meta, summary }) => {
    const label = title.replace(/[[\]]/g, '\\$&');
    const href = site ? new URL(url, site).href : url;
    return [
      `- [${label}](${href})`,
      meta ? ` (${meta})` : '',
      summary ? `: ${summary.trim()}` : '',
    ].join('');
  });
  return new Response(
    `# ${title}\n\n${description}\n\n${lines.join('\n')}\n`,
    { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } },
  );
}

// `YYYY-MM-DD`, for index entries.
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

// The site's sections, for `/index.md` and `/llms.txt`: name, path, and
// description (as on each section page).
export const SECTIONS = [
  ['Talks', 'talks', 'My recent presentations & interviews.'],
  ['Essays', 'essays', 'My scribblings on various topics.'],
  ['Publications', 'publications', 'My papers and reports.'],
  ['Projects', 'projects', 'My open-source projects & initiatives.'],
  ['Reviews', 'reviews', 'My book reviews.'],
  [
    'Notes',
    'notes',
    'My notes on hundreds of topics, from 3D graphics to ZFS.',
  ],
] as const;
