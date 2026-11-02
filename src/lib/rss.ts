import { url, type Entry } from './content';
import { inline } from './inline';

const SITE = 'https://ar.to';

const escape = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Renders an RSS 2.0 feed for the given entries, served at `path`.
// Item GUIDs keep the legacy `.html` form so that feed readers do not
// treat previously seen items as new.
export function rss(title: string, path: string, entries: Entry[]): Response {
  const items = entries.map((entry) => {
    const link = SITE + url(entry);
    const { summary } = entry.data;
    return [
      '<item>',
      `<title>${escape(entry.data.title)}</title>`,
      `<link>${link}</link>`,
      `<guid isPermaLink="false">${link}.html</guid>`,
      `<pubDate>${entry.data.date.toUTCString()}</pubDate>`,
      summary ? `<description>${escape(inline(summary))}</description>` : '',
      '</item>',
    ].join('');
  });
  const updated = entries[0]?.data.date ?? new Date(0);
  const xml = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `<title>${escape(title)}</title>`,
    `<link>${SITE}/</link>`,
    `<atom:link href="${SITE}${path}" rel="self" type="application/rss+xml"/>`,
    `<description>${escape(title)}</description>`,
    '<language>en-us</language>',
    `<lastBuildDate>${updated.toUTCString()}</lastBuildDate>`,
    ...items,
    '</channel>',
    '</rss>',
  ].join('\n');
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
