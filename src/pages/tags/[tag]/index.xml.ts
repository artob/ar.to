import type { APIRoute, GetStaticPaths } from 'astro';
import { tags, type Tag } from '../../../lib/content';
import { rss } from '../../../lib/rss';

export const getStaticPaths = (async () =>
  (await tags()).map((tag) => ({
    params: { tag: tag.slug },
    props: { tag },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { tag } = props as { tag: Tag };
  return rss(
    `${tag.name} | Arto Bendiken`,
    `/tags/${tag.slug}/index.xml`,
    tag.entries,
  );
};
