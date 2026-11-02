import { existsSync } from 'node:fs';
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { PreviewImage } from '../layouts/Base.astro';

// The pre-rendered 1200x630 link-preview card for a section, from
// `public/og/` (see scripts/og-cards.sh).
export function card(name: string, alt: string): PreviewImage {
  return { src: `/og/${name}.jpg`, width: 1200, height: 630, alt };
}

// The entry's own card, `public/og/<collection>/<id>.jpg`, if one was
// rendered (for entries without a featured image), else the section card.
export function entryCard(
  collection: string,
  id: string,
  alt: string,
  fallbackAlt: string,
): PreviewImage {
  const name = `${collection}/${id}`;
  return existsSync(`public/og/${name}.jpg`)
    ? card(name, alt)
    : card(collection, fallbackAlt);
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
