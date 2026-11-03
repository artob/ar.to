import type { APIRoute } from 'astro';
import { entries, url } from '../lib/content';
import { isoDate, markdownIndex } from '../lib/markdown';

// `/reviews.md`: an index of the reviews, newest first, linking their Markdown.
export const GET: APIRoute = async ({ site }) =>
  markdownIndex(
    site,
    "Arto's Reviews",
    'My book reviews.',
    (await entries('reviews')).map((entry) => ({
      title: entry.data.title,
      url: `${url(entry)}.md`,
      meta: isoDate(entry.data.date),
      summary: entry.data.summary,
    })),
  );
