import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { markdownIndex } from '../lib/markdown';

// `/publications.md`: the papers, newest first, linking their pages
// elsewhere (arXiv etc.), as there are no per-paper pages here.
export const GET: APIRoute = async ({ site }) => {
  const time = (date: Date | number) =>
    typeof date === 'number' ? Date.UTC(date, 0, 1) : date.valueOf();
  const papers = (await getCollection('publications')).sort(
    (a, b) => time(b.data.date) - time(a.data.date),
  );
  return markdownIndex(
    site,
    "Arto's Publications",
    'My papers and reports.',
    papers.map(({ data }) => ({
      title: data.title,
      url: data.url,
      meta: [
        data.authors.join(', '),
        data.venue,
        new Date(time(data.date)).getUTCFullYear(),
      ]
        .filter(Boolean)
        .join(', '),
    })),
  );
};
