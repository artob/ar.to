# TODO

## Scaffold
- Decide whether to add `@astrojs/check` and `typescript` (dev deps) for
  `astro check`; weigh against the minimal-dependencies policy.
- Design a real favicon; `public/favicon.ico` is an empty file (it is
  empty on the live site too).

## Design
- Design the visual theme: typography, layout, navigation, and styles for
  `.video` embeds, entry metadata, and link lists. Pages are unstyled.
- Design the home page; it is currently a plain port of the legacy
  sections (talks, essays, latest five reviews, contact).

## Content migration
- Owner review: `src/content/reviews/2019/12/the-body-keeps-the-score.md`
  repeats its translation-credit paragraph twice (also on the live site).
- Owner review: `essays/2010/01/set-your-code-free.md` links to
  `https://ar.to/2008/04/zero-sum-delusion`, which 404s on the live site.
- Owner review: the legacy author profile (`attic/content/authors/arto/`)
  was not ported, as the live site never showed it; its role ("Co-Founder
  and CTO at Haltia.AI"), organizations, and interests look dated, and its
  body is lorem ipsum. Decide whether the home page gets an about/bio.
- Owner review: confirm the contact links in `src/data/contact.ts` are
  all still current (Facebook, Instagram, Crunchbase, Keybase, etc.).
- Owner decision: revive the 503 pre-Hugo notes in `attic/attic/notes/`
  (reStructuredText, e.g. `git.rst`, `sparql.rst`)? Live `/notes/<name>`
  URLs 302 to `https://arto.s3.amazonaws.com/notes/<name>` (a Cloudflare
  rule, presumably), which now returns 403, so they are all dead. Options:
  convert them into a `notes` collection served at `/notes/<name>` (and
  remove the Cloudflare rule), or drop the rule and let them 404.

## URL compatibility
- Owner: if a search console references `/sitemap.xml`, point it at
  `/sitemap-index.xml` after cutover (or add a `Sitemap:` line to
  `public/robots.txt`).

## Cutover
- Verify the first `workflow_dispatch` deploy end to end (it replaces the
  whole live site, so only run it once the migration is complete).
- Consider switching the workflow to deploy on push to `master`.
- Owner: add a Cloudflare rule 301-redirecting `/foo/` to `/foo`.
