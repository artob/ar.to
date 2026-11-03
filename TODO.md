# TODO

## Design
- Polish pass: review every page type in both themes and at phone width
  (e.g. talk pages show both the featured image and the video embed;
  `> **Note:**` blockquotes use the default `prose` quote style).
- Owner: provide a larger portrait to replace `src/assets/arto.png`
  (400x312, soft at hero size on high-DPI screens). Then rerun
  `scripts/favicons.sh` and `scripts/og-cards.sh`, and check the crops in
  `scripts/og/icon.html`.
- Notes lost their `.. contents::` tables of contents (54 notes) in the
  conversion; consider an inline table of contents at the top of long
  notes, generated from headings.

## Content migration
- Owner review: "A Taxonomy for Transaction-Time Queries with Examples
  from Dydra" has no date or venue on Google Scholar; it is listed under
  2016 based on its PDF name (`MEPDaW_2016_paper_4.pdf`). Confirm.
- Notes hotlink a few external images (e.g. `boyd`, `crazyflie`); consider
  vendoring them.

## URL compatibility
- Owner: if a search console references `/sitemap.xml`, point it at
  `/sitemap-index.xml` (or add a `Sitemap:` line to `public/robots.txt`).

## After cutover
- After deploying, check link previews with the Facebook Sharing Debugger
  and an Open Graph previewer, and refresh Telegram's cache via
  `@WebpageBot` for links already shared.
- Consider switching the workflow to deploy on push to `master`.
- Owner: add a Cloudflare rule 301-redirecting `/foo/` to `/foo`.
