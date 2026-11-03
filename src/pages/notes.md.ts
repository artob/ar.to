import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { plain } from '../lib/inline';
import { markdownIndex } from '../lib/markdown';

// `/notes.md`: an index of the notes, alphabetical, linking their Markdown.
export const GET: APIRoute = async ({ site }) =>
  markdownIndex(
    site,
    "Arto's Notes",
    'My notes on hundreds of topics, from 3D graphics to ZFS.',
    (await getCollection('notes'))
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((note) => ({
        title: plain(note.data.title),
        url: `/notes/${note.id}.md`,
      })),
  );
