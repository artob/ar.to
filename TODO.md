# TODO

## Scaffold
- Decide whether to add `@astrojs/check` and `typescript` (dev deps) for
  `astro check`; weigh against the minimal-dependencies policy.
- Design a real favicon; `public/favicon.ico` is an empty file (it is
  empty on the live site too).

## Design
- Design the visual theme: typography, layout, navigation, and styles for
  `.video` embeds, entry metadata, and link lists. Pages are unstyled.
- Design the home page (currently just a heading).

## Content migration
- Owner review: `src/content/reviews/2019/12/the-body-keeps-the-score.md`
  repeats its translation-credit paragraph twice (also on the live site).
- Owner review: `essays/2010/01/set-your-code-free.md` links to
  `https://ar.to/2008/04/zero-sum-delusion`, which 404s on the live site.
- No entry is `.mdx`; decide whether to drop `@astrojs/mdx`.
- Port the home page sections in `attic/content/home/` (bio, contact, etc.)
  and the author profile in `attic/content/authors/arto/`.
- Review `attic/attic/` (pre-Hugo leftovers: `foaf.ttl`, `index.rss`,
  `notes/`) for anything worth keeping.

## URL compatibility
- Keep feed URLs working: `/index.xml` and `/<section>/index.xml` (RSS).
- Write a check script that diffs the build's HTML page list against
  `git ls-tree -r --name-only origin/gh-pages` and reports missing URLs,
  ignoring the dropped `/categories/*`, `/authors/*`, and `*/page/N` URLs.

## Cutover
- Verify the first `workflow_dispatch` deploy end to end (it replaces the
  whole live site, so only run it once the migration is complete).
- Consider switching the workflow to deploy on push to `master`.
- Owner: add a Cloudflare rule 301-redirecting `/foo/` to `/foo`.
