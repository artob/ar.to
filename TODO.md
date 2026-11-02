# TODO

## Design
- Style entry pages (title, subtitle, date/event/location line, links,
  featured image, tags), note pages, and list pages (Scholar's
  Presentations style), plus `.video` embeds and `> **Note:**`
  blockquotes. The base layout and `prose` body typography are done.
- Highlight the current section in the top nav on entry pages (only the
  section index pages highlight it now).
- Build the home page hero and the recent talks and essays lists.
- Owner: provide a hero tagline (the legacy profile had "Autodidact,
  coder, cypherpunk, entrepreneur, hacker, and maker.") and, ideally, a
  larger portrait; the legacy `attic/static/img/arto.jpg` is only
  400x312, which looks soft at hero size on high-DPI screens.
- Design a real favicon; `public/favicon.ico` is an empty file (it is
  empty on the live site too).
- Notes lost their `.. contents::` tables of contents (54 notes) in the
  conversion; consider an inline table of contents at the top of long
  notes, generated from headings.

## Content migration
- Owner review: the legacy author profile (`attic/content/authors/arto/`)
  was not ported, as the live site never showed it; its role ("Co-Founder
  and CTO at Haltia.AI"), organizations, and interests look dated, and its
  body is lorem ipsum. Decide whether the home page gets an about/bio.
- Notes hotlink a few external images (e.g. `boyd`, `crazyflie`); consider
  vendoring them.

## URL compatibility
- Owner: if a search console references `/sitemap.xml`, point it at
  `/sitemap-index.xml` after cutover (or add a `Sitemap:` line to
  `public/robots.txt`).

## Cutover
- Verify the first `workflow_dispatch` deploy end to end (it replaces the
  whole live site, so only run it once the migration is complete).
- Consider switching the workflow to deploy on push to `master`.
- Owner: add a Cloudflare rule 301-redirecting `/foo/` to `/foo`.
- Owner: remove the Cloudflare rule that sends `/notes/*` to S3, so the
  new `/notes` pages are served. Keep (or add) a 301 from `/notes/x.html`
  to `/notes/x`.
