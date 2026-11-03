import type { GetStaticPaths } from 'astro';
import { entries } from '../../lib/content';

// `/projects/<slug>.md`: the Markdown source of a project.
export const getStaticPaths = (async () =>
  (await entries('projects')).map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }))) satisfies GetStaticPaths;

export { GET } from '../../lib/markdown';
