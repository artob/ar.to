import type { GetStaticPaths } from 'astro';
import { datedEntries } from '../../../lib/content';

// `/YYYY/MM/<slug>.md`: the Markdown source of an essay, review, or talk.
export const getStaticPaths = (async () =>
  (await datedEntries()).map((entry) => {
    const [year, month, slug] = entry.id.split('/');
    return { params: { year, month, slug }, props: { entry } };
  })) satisfies GetStaticPaths;

export { GET } from '../../../lib/markdown';
