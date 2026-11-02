# TODO

## Design
- Polish pass: review every page type in both themes and at phone width
  (e.g. talk pages show both the featured image and the video embed;
  `> **Note:**` blockquotes use the default `prose` quote style).
- Owner: provide a larger portrait to replace `src/assets/arto.png`
  (400x312, soft at hero size on high-DPI screens).
- Design a real favicon; `public/favicon.ico` is an empty file (it is
  empty on the live site too).
- Notes lost their `.. contents::` tables of contents (54 notes) in the
  conversion; consider an inline table of contents at the top of long
  notes, generated from headings.

## Content migration
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
