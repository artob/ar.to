# TODO

## Scaffold
- Scaffold an Astro project at the repo root (TypeScript, MDX, sitemap)
  with the URL settings from `DESIGN.md` (`trailingSlash: 'never'`,
  `build.format: 'file'`, `site: 'https://ar.to'`).
- Add a GitHub Actions workflow that builds `master` and deploys to the
  `gh-pages` branch. Keep `CNAME`, `.nojekyll`, `.well-known/keybase.txt`,
  `pgp.asc`, `favicon.ico`, and `robots.txt` in `public/`.

## Content migration
- Define content collection schemas for essays, talks, reviews, projects,
  notes, and quotes, based on the frontmatter used in `attic/content/`.
- Write a migration script from `attic/content/` (42 Markdown files) into
  `src/content/`; convert Hugo shortcodes to MDX components or plain
  Markdown.
- Give featured images per-post paths; the legacy build put every post's
  `featured.jpg` into a shared `/:year/:month/` directory, causing
  collisions (see commit `9c85bb9`).
- Port the home page sections in `attic/content/home/` (bio, contact, etc.)
  and the author profile in `attic/content/authors/arto/`.
- Review `attic/attic/` (pre-Hugo leftovers: `foaf.ttl`, `index.rss`,
  `notes/`) for anything worth keeping.

## URL compatibility
- Routes: `/[year]/[month]/[slug]` for essays, talks, and reviews;
  `/projects/[slug]`; flat section indexes (`/essays`, `/talks`, ...).
- Tag pages: `/tags` index and `/tags/[tag]`, slugs matching the legacy
  ones (see `git ls-tree --name-only origin/gh-pages tags/`).
- Keep feed URLs working: `/index.xml` and `/<section>/index.xml` (RSS).
- Write a check script that diffs the build's HTML page list against
  `git ls-tree -r --name-only origin/gh-pages` and reports missing URLs,
  ignoring the dropped `/categories/*`, `/authors/*`, and `*/page/N` URLs.

## Cutover
- Owner: add a Cloudflare rule 301-redirecting `/foo/` to `/foo`.
