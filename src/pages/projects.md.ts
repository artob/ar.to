import type { APIRoute } from 'astro';
import { entries, url } from '../lib/content';
import { markdownIndex } from '../lib/markdown';

// `/projects.md`: an index of the projects, as ordered on `/projects`,
// linking their Markdown.
export const GET: APIRoute = async ({ site }) =>
  markdownIndex(
    site,
    "Arto's Projects",
    'My open-source projects & initiatives.',
    (await entries('projects'))
      .sort((a, b) => (a.data.order ?? Infinity) - (b.data.order ?? Infinity))
      .map((entry) => ({
        title: entry.data.title,
        url: `${url(entry)}.md`,
        meta: String(entry.data.date.getUTCFullYear()),
        summary: entry.data.summary,
      })),
  );
