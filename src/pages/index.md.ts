import type { APIRoute } from 'astro';
import { tagline } from '../data/contact';
import { markdownIndex } from '../lib/markdown';

// `/index.md`: the site's sections, each with a Markdown index of its own.
const SECTIONS = [
  ['Essays', 'essays', 'My scribblings on various topics.'],
  ['Talks', 'talks', 'My recent presentations & interviews.'],
  ['Publications', 'publications', 'My papers and reports.'],
  ['Projects', 'projects', 'My open-source projects & initiatives.'],
  ['Reviews', 'reviews', 'My book reviews.'],
  [
    'Notes',
    'notes',
    'My notes on hundreds of topics, from 3D graphics to ZFS.',
  ],
];

export const GET: APIRoute = ({ site }) =>
  markdownIndex(
    site,
    'Arto Bendiken',
    `${tagline} Every page here is also available as Markdown at its URL ` +
      'plus `.md`.',
    SECTIONS.map(([title, name, summary]) => ({
      title,
      url: `/${name}.md`,
      summary,
    })),
  );
