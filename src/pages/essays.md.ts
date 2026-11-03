import type { APIRoute } from 'astro';
import { entries, url } from '../lib/content';
import { isoDate, markdownIndex } from '../lib/markdown';

// `/essays.md`: an index of the essays, newest first, linking their Markdown.
export const GET: APIRoute = async ({ site }) =>
  markdownIndex(
    site,
    "Arto's Essays",
    'My scribblings on various topics.',
    (await entries('essays')).map((entry) => ({
      title: entry.data.title,
      url: `${url(entry)}.md`,
      meta: isoDate(entry.data.date),
      summary: entry.data.summary,
    })),
  );
