# Working method
- Use the current working copy branch, don't start new branches unless asked.
- Read `TODO.md` for remaining enhancements. Make one narrowly scoped, atomic
  change per request; remove completed items after verification.
- Commit messages look like a brief single-line first line that begins with a
  verb and ends with a period. After the first line, you are allowed another
  1-3 paragraphs (high signal, low noise) for additional details if useful.
- Do always backtick-quote code symbols in commit messages, in all paragraphs.
- Keep to a 72-column wordwrap in commit messages, with only long URLs excepted.
- Do use `GIT_AUTHOR_*` author information from `.env` if it exists.
- Don't include any `Co-Authored-By` metadata in commit messages.
- Avoid mentioning `TODO.md`, `DESIGN.md`, or `AGENTS.md` in commit messages.

# Content
- New essay/project without `image`: run `scripts/og-cards.sh`, commit its
  `public/og/<collection>/<id>.jpg` (the build fails without it).
- New talk/review: give it an `image` (16:9, 1200px+) for its link preview.
- New project: set `homepage` and a `GitHub` (or other `Git`) entry in
  `links` (card icons on `/projects`); its file name is its URL slug.
- Republished entry: set `original: {url, archive, label}` and optional
  `notice` in frontmatter; never an "Originally published" line in the body.
- Post on X announcing an entry: `tweet` frontmatter (static card, no embed).
- Featured essay/project: `order: N` (lowest first) puts it in the cards atop
  `/essays` or `/projects`.
- Section headings (`<h2>`) use title case, e.g. "Featured Essays".
- New section, portrait, or tagline: see "Adding pages" in `DESIGN.md`.
- No analytics or tracking scripts; traffic stats come from Cloudflare only.

# Project files
- Don't attempt to examine parent directories, stick to the workspace directory.
- Keep to an 80-column wordwrap in comments and Markdown files, where feasible.

## `AGENTS.md`
- When updating `AGENTS.md`, keep in mind that the file is meant to especially
  benefit lesser models than yourself, such as Sonnet and Haiku; but they may
  also have smaller context windows, so be terse and token-efficient.

## `DESIGN.md`
- Record significant design considerations & decisions in `DESIGN.md`.

## `TODO.md`
- Record review results & enhancement suggestions into a backlog in `TODO.md`.
- This file is meant primarily for agents and can be used as a scratchpad.
- Don't preserve mentions of already fully completed work in the file.
