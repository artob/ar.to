import type { APIRoute } from 'astro';
import { tagline } from '../data/contact';
import { markdownIndex, SECTIONS } from '../lib/markdown';

// `/index.md`: the site's sections, each with a Markdown index of its own.
export const GET: APIRoute = ({ site }) =>
  markdownIndex(
    site,
    'Arto Bendiken',
    `${tagline} Every essay, talk, review, project, and note here is also ` +
      'available as Markdown at its URL plus `.md`.',
    SECTIONS.map(([title, name, summary]) => ({
      title,
      url: `/${name}.md`,
      summary,
    })),
  );
