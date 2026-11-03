import type { APIRoute } from 'astro';
import { entries, url } from '../lib/content';
import { isoDate, markdownIndex } from '../lib/markdown';

// `/talks.md`: an index of the talks, newest first, linking their Markdown.
export const GET: APIRoute = async ({ site }) =>
  markdownIndex(
    site,
    "Arto's Talks",
    'My recent presentations & interviews.',
    (await entries('talks')).map((entry) => ({
      title: entry.data.title,
      url: `${url(entry)}.md`,
      meta: isoDate(entry.data.date),
      summary: entry.data.summary,
    })),
  );
