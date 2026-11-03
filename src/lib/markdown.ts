import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import type { APIRoute } from 'astro';

// Where the source files are published, for images referenced relative to
// an entry (`./foo.jpg`), which the build only emits under hashed names.
const SOURCE = 'https://raw.githubusercontent.com/artob/ar.to/master/';

interface Source {
  filePath?: string;
}

// An entry's Markdown source, frontmatter included, exactly as in the
// repository, except that relative references are made absolute.
export async function markdown(entry: Source): Promise<string> {
  if (!entry.filePath) throw new Error('entry has no source file');
  const base = SOURCE + dirname(entry.filePath) + '/';
  return (await readFile(entry.filePath, 'utf8')).replace(
    /(\]\(|src="|^image: ["']?)\.\//gm,
    `$1${base}`,
  );
}

// Serves the `.md` twin of a page (`props.entry`); see DESIGN.md.
export const GET: APIRoute = async ({ props }) =>
  new Response(await markdown(props.entry as Source), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
