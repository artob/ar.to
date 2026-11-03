import type { APIRoute } from 'astro';
import { tagline } from '../data/contact';
import { entries, url } from '../lib/content';
import { SECTIONS } from '../lib/markdown';

// `/llms.txt` (https://llmstxt.org): a Markdown map of the site for LLMs,
// generated on every build. It links the Markdown twins of the section
// indexes and of the featured essays; notes are "Optional".
export const GET: APIRoute = async ({ site }) => {
  const link = (title: string, path: string, notes?: string) =>
    `- [${title}](${new URL(path, site)})${notes ? `: ${notes}` : ''}`;
  const featured = (await entries('essays'))
    .filter((entry) => entry.data.order !== undefined)
    .sort((a, b) => a.data.order! - b.data.order!);
  const sections = SECTIONS.filter(([, name]) => name !== 'notes');
  const notes = SECTIONS.find(([, name]) => name === 'notes')!;
  const text = [
    '# Arto Bendiken',
    '',
    `> ${tagline}`,
    '',
    'Every essay, talk, review, project, and note on this site is also ' +
      'available as Markdown at its URL plus `.md` (e.g. ' +
      '`/2010/01/set-your-code-free.md`), and each section has a Markdown ' +
      'index linking its pages (e.g. `/essays.md`). All materials here are ' +
      'in the public domain.',
    '',
    '## Sections',
    '',
    ...sections.map(([title, name, notes]) =>
      link(title, `/${name}.md`, notes),
    ),
    '',
    '## Featured Essays',
    '',
    ...featured.map((entry) =>
      link(entry.data.title, `${url(entry)}.md`, entry.data.summary),
    ),
    '',
    '## Optional',
    '',
    link(notes[0], `/${notes[1]}.md`, notes[2]),
    '',
  ].join('\n');
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
