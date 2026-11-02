import { existsSync } from 'node:fs';
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { PreviewImage } from '../layouts/Base.astro';

// The pre-rendered 1200x630 link-preview card for a section, from
// `public/og/` (see scripts/og-cards.sh).
export function card(name: string, alt: string): PreviewImage {
  return { src: `/og/${name}.jpg`, width: 1200, height: 630, alt };
}

// Collections whose entries without a featured image must have a card of
// their own, rendered by scripts/og-cards.sh.
const OWN_CARDS = ['essays', 'projects'];

// The entry's own card, `public/og/<collection>/<id>.jpg`, else the
// section card. Fails the build if an essay or project lacks its card.
export function entryCard(
  collection: string,
  id: string,
  alt: string,
  fallbackAlt: string,
): PreviewImage {
  const name = `${collection}/${id}`;
  if (existsSync(`public/og/${name}.jpg`)) return card(name, alt);
  if (OWN_CARDS.includes(collection)) {
    throw new Error(
      `Missing link-preview card public/og/${name}.jpg; ` +
        'run scripts/og-cards.sh and commit the result.',
    );
  }
  return card(collection, fallbackAlt);
}

// An entry's featured image as a link preview: a JPEG at most 1200px
// wide, since not every messenger handles WebP previews.
export async function featured(
  image: ImageMetadata,
  alt: string,
): Promise<PreviewImage> {
  const result = await getImage({
    src: image,
    format: 'jpeg',
    width: Math.min(1200, image.width),
  });
  return {
    src: result.src,
    width: Number(result.attributes.width),
    height: Number(result.attributes.height),
    alt,
  };
}
