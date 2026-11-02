// Renders the inline Markdown used in frontmatter fields (`subtitle`,
// `summary`, `abstract`): links, emphasis, strong emphasis, and dashes.
// Frontmatter is trusted, so inline HTML (e.g. `<br/>`) passes through.
export function inline(markdown: string): string {
  return markdown
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(\["])[_*](.+?)[_*](?=$|[\s)\].,;:!?"])/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/---/g, '—')
    .replace(/--/g, '–');
}
