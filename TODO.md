# TODO

## Scaffold
- Design a real favicon; `public/favicon.ico` is an empty file (it is
  empty on the live site too).

## Design
- Design the visual theme: typography, layout, navigation, and styles for
  `.video` embeds, entry metadata, and link lists. Pages are unstyled.
- Design the home page; it is currently a plain port of the legacy
  sections (talks, essays, latest five reviews, contact).

## Content migration
- Owner review: the legacy author profile (`attic/content/authors/arto/`)
  was not ported, as the live site never showed it; its role ("Co-Founder
  and CTO at Haltia.AI"), organizations, and interests look dated, and its
  body is lorem ipsum. Decide whether the home page gets an about/bio.
- Notes lost their `.. contents::` tables of contents (54 notes) in the
  conversion; consider generating a table of contents from headings.
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
