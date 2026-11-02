# Design

Design considerations and decisions for the 2026 reboot of <https://ar.to/>.

## Background

- The previous site was built with Hugo and the Hugo Academic
  (Wowchemy, now Hugo Blox) theme. Its source now lives in `attic/`, kept
  as read-only reference material for the content migration.
- The published site is the `gh-pages` branch, served by GitHub Pages behind
  Cloudflare. `master` holds the source.

## Static site generator: Astro

- **Decision:** Use [Astro](https://astro.build/).
- **Ruled out:**
  - Hugo, and Go-based generators in general (owner's preference).
  - Zola: Rust-based (preferred language), but too far behind Astro in
    features and ecosystem.
  - Eleventy, Lume, Quartz: viable, and Lume and Quartz are liked, but Astro
    is the clear winner (typed content collections, MDX, integrations, zero
    client-side JS by default, island hydration where needed).
  - Jekyll (legacy), Next.js/SvelteKit (app frameworks, overkill),
    VitePress/Starlight (documentation-oriented).
- **Accepted caveat:** Astro's `.astro` compiler (Go compiled to WASM) and
  Vite's use of esbuild (Go) are transitive, invisible build internals; this
  does not violate the "no Go-based generator" rule.

## Supply-chain security

Node and npm have a poor supply-chain track record, so dependencies are
treated as a liability:

- **Minimal dependencies.** Add a package only when it clearly earns its
  place; prefer a few lines of our own code. Currently: `astro`,
  `@astrojs/mdx`, `@astrojs/sitemap`.
- **Exact versions** (`save-exact`) and a committed `package-lock.json`;
  CI installs with `npm ci` only.
- **Cooling-off period:** `min-release-age=3` (days), so freshly published
  (possibly compromised) releases are never picked up.
- **No install scripts:** `ignore-scripts=true`. No current dependency
  declares one; a new dependency that needs one requires explicit review.
- **No git dependencies:** `allow-git=none`.
- These settings live in the project `.npmrc` so they apply in CI too.

## URLs

- **Canonical URLs have no trailing slash and no `.html` extension**, e.g.
  `https://ar.to/2011/01/unlicense-1st-year` (not `.../unlicense-1st-year/`).
- Astro configuration to achieve this:

  ```js
  site: 'https://ar.to',
  trailingSlash: 'never',
  build: { format: 'file' },
  ```

  `build.format: 'file'` emits `foo.html` (not `foo/index.html`); GitHub
  Pages serves `foo.html` at `/foo`. The default `directory` format would
  make GitHub Pages 301 `/foo` to `/foo/`, which is unacceptable.
- `<link rel="canonical">` is derived from `Astro.url.pathname` with any
  `.html`/`index.html` suffix stripped (with `format: 'file'` the pathname
  includes `.html`). The sitemap integration already emits clean URLs.
- **Trailing-slash variants 301-redirect to the canonical URL.** This is
  handled by a Cloudflare redirect rule (owner-managed), not by Astro. As of
  the reboot, `/foo/` returns 404 on the live site.
- Section indexes are flat files too: `essays.html` served at `/essays`.
  Verified live: GitHub Pages prefers `essays.html` even when an `essays/`
  directory also exists.
- **No month or year listing pages.** Paths like `/2011/01` are not pages;
  their current 301 to `/2011/01/` (a bare directory) is irrelevant.
- **Tag pages are kept** at `/tags/:tag` (e.g. `/tags/unlicense`), plus a
  `/tags` index. Legacy category (`/categories/*`), author (`/authors/*`),
  and pagination (`/<section>/page/N`, `/tags/:tag/page/N`) URLs are
  dropped; they may 404.
- **Existing URLs must keep working.** The legacy permalink scheme is
  `/:year/:month/:slug` for essays, talks, and reviews (e.g.
  `/2014/02/the-martian`), with other sections under `/<section>/:slug`
  (e.g. `/projects/unlicense`). Before cutover, diff the new build output
  against the file list of the current `gh-pages` branch.

## Content model

- One typed Astro content collection per legacy section: essays, talks,
  reviews, projects, notes, quotes. (Notes and quotes are currently empty.)
- Migrate Hugo frontmatter to schema-validated frontmatter with a script,
  not by hand.
