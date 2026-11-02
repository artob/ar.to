import type { APIRoute, GetStaticPaths } from 'astro';
import { entries, type Section } from '../../lib/content';
import { rss } from '../../lib/rss';

const TITLES: Record<Section, string> = {
  essays: 'Essays',
  reviews: 'Reviews',
  talks: 'Talks',
  projects: 'Projects',
};

export const getStaticPaths = (() =>
  Object.keys(TITLES).map((section) => ({ params: { section } }))) satisfies
  GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const section = params.section as Section;
  return rss(
    `${TITLES[section]} | Arto Bendiken`,
    `/${section}/index.xml`,
    await entries(section),
  );
};
