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

## Build and deployment

- GitHub Pages keeps serving the `gh-pages` branch ("deploy from branch").
  `.github/workflows/deploy.yml` builds on every push to `master` and, when
  run manually (`workflow_dispatch`), replaces the contents of `gh-pages`
  with the build output as a new commit (history is kept, not
  force-pushed).
- **Deploys are manual-only until cutover**, so that an incomplete site
  never overwrites the live one. After cutover, consider deploying on push.
- The build job, which runs npm code, has a read-only token and does not
  persist credentials; only the separate deploy job, which runs no npm
  code, gets `contents: write`. The build is handed over as an artifact.
- Only official `actions/*` actions are used, each pinned to a full commit
  SHA with the version in a trailing comment.
- Node version: `.node-version` (currently 26, the active LTS), shared by
  local tooling and CI.

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
  (e.g. `/projects/unlicense`). `scripts/check-urls.sh` enforces this in
  CI: it fails if any `.html` or `.xml` file on `gh-pages` is missing from
  `dist/`, except for deliberately dropped URLs (categories, authors,
  pagination, `/tags/index.xml`, the old theme's `js/`, and `sitemap.xml`,
  which `@astrojs/sitemap` replaces with `sitemap-index.xml`).

## Content model

- Typed Astro content collections, defined in `src/content.config.ts`:
  `essays`, `reviews`, `talks` (extra event/media fields), and `projects`.
  Legacy `notes` and `quotes` sections were empty and have no collection
  yet.
- Schemas are `.strict()`: unknown frontmatter keys fail the build.
- Dated entries are leaf files at `src/content/<collection>/YYYY/MM/<slug>.md`
  and are published at `/YYYY/MM/<slug>`; the file path is the permalink
  (the legacy explicit `url` key is dropped). Projects are
  `src/content/projects/<slug>.md`.
- A featured image is a sibling file `<slug>.<ext>` referenced as
  `image: ./<slug>.<ext>`, so images can never collide (the legacy build
  put every post's `featured.jpg` in a shared month directory).
- Entries stay `.md`, not `.mdx`: most legacy bodies are raw HTML, which
  Markdown passes through but MDX parses strictly.
- Hugo `{{< youtube ID >}}` shortcodes became plain
  `<iframe class="video">` embeds from `youtube-nocookie.com`.
- Frontmatter uses camelCase keys (`dateEnd`, `eventUrl`, `allDay`,
  `updated` for Hugo's `lastmod`); talk media URLs are `video`, `slides`,
  `pdf`, `code`. Defaults are omitted: `authors` only when not just Arto,
  `abstract` only when it differs from `summary`. `lang: uk` marks the
  Ukrainian book summary.
- Dropped legacy keys: `type`, `url`, `featured`, `publishDate`, and the
  boilerplate "Follow" `links` entries.

## Pages

- `src/pages/[year]/[month]/[slug].astro` serves essays, reviews, and
  talks from one shared URL space; the build fails if two collections
  claim the same `/YYYY/MM/<slug>`.
- `src/pages/projects/[slug].astro` serves projects; `essays.astro`,
  `reviews.astro`, `talks.astro`, and `projects.astro` are the section
  indexes. All entry pages share `src/components/Entry.astro`.
- `/tags` lists all tags; `/tags/<slug>` lists a tag's entries. `tagSlug()`
  reproduces Hugo's slugs (lowercase, punctuation dropped, spaces to
  hyphens; `e⧸acc` → `eacc`), and the 72 tag pages match the legacy set.
- RSS 2.0 feeds keep their legacy URLs: `/index.xml` (everything),
  `/<section>/index.xml`, and `/tags/<slug>/index.xml`. Category, author,
  and `/tags/index.xml` feeds are dropped with their pages. Items carry the
  summary, not full content. `src/lib/rss.ts` writes the XML directly
  rather than depending on `@astrojs/rss`.
- Feed item `<link>`s are canonical URLs, but `<guid>`s keep the legacy
  `.html` form (with `isPermaLink="false"`), so readers don't re-announce
  old items. New entries follow the same rule, for consistency.
- Drafts (`draft: true`) are shown by `astro dev` but never built. This
  matches the live site, where only the Unlicense project is published.
- Frontmatter `subtitle`, `summary`, and `abstract` contain inline
  Markdown (links, emphasis, `---` dashes). `src/lib/inline.ts` renders
  that subset in a few lines, instead of depending on a Markdown library
  (Astro 7 no longer installs `@astrojs/markdown-remark` by default).
- Pages are intentionally unstyled semantic HTML until the visual design
  is done.

## Content migration

- `scripts/migrate-attic.rb` converts `attic/content/` into `src/content/`.
  It is Ruby (standard library only) to avoid adding npm dependencies.
- It is idempotent and overwrites its output, so it may only be rerun
  until `src/content/` receives manual edits; from then on, `src/content/`
  is the source of truth and the script is historical.
