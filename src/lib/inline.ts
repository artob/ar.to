// Renders the inline Markdown used in frontmatter fields (`title` for
// notes, `subtitle`, `summary`, `abstract`): code spans, backslash escapes,
// links (URLs may contain balanced parentheses), emphasis, strong emphasis,
// and dashes. Frontmatter is trusted, so inline HTML (e.g. `<br/>`) passes
// through.
export function inline(markdown: string): string {
  // Code spans and escaped characters are set aside as placeholders, so
  // that the other rules can't touch them.
  const held: string[] = [];
  const hold = (html: string) => `\u0000${held.push(html) - 1}\u0000`;
  return markdown
    .replace(/`([^`]+)`/g, (_, code) => hold(`<code>${escape(code)}</code>`))
    .replace(/\\([\\`*_[\]()#+\-.!])/g, (_, char) => hold(char))
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(\["])[_*](.+?)[_*](?=$|[\s)\].,;:!?"])/g, '$1<em>$2</em>')
    .replace(LINK, '<a href="$2">$1</a>')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/\u0000(\d+)\u0000/g, (_, index) => held[Number(index)]);
}

// Reduces the same inline Markdown to plain text, e.g. for `<title>` and
// link-preview descriptions.
export function plain(markdown: string): string {
  return markdown
    .replace(LINK, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/(^|[\s(\["])[_*](.+?)[_*](?=$|[\s)\].,;:!?"])/g, '$1$2')
    .replace(/<[^>]+>/g, ' ')
    .replace(/---/g, '—')
    .replace(/\\(.)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

const LINK = /\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g;

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
