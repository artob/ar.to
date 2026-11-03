import type { GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

// `/notes/<name>.md`: the Markdown source of a note.
export const getStaticPaths = (async () =>
  (await getCollection('notes')).map((entry) => ({
    params: { name: entry.id },
    props: { entry },
  }))) satisfies GetStaticPaths;

export { GET } from '../../lib/markdown';
