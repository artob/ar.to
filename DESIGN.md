# Design

Design considerations and decisions for the 2026 reboot of <https://ar.to/>.

## Background

- The previous site was built with Hugo and the Hugo Academic
  (Wowchemy, now Hugo Blox) theme. Its remnants (config, templates, drafts)
  live in `attic/`; migrated, deployed sources were removed from it.
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

## Visual design

References chosen by the owner: [Astro Scholar][scholar] and
[Chirping Astro][chirping], both as seen in dark mode.

[scholar]: https://whydevils.github.io/astro-scholar/
[chirping]: https://aneejian.com/chirping-astro/

- **Dark mode is the default**, with a light/dark toggle. The choice is
  remembered per browser; light mode must remain fully supported.
- **Shell: Scholar-style slim top navigation bar** (section links, in the
  order Talks, Essays, Publications, Projects, Reviews, Notes, plus the
  theme toggle) over a single centered reading column; the bar is exactly
  as wide as the column (`max-w-4xl`). Below the `md` breakpoint the
  links move into a dropdown menu behind a menu button: a native
  `<details>` element (works without JavaScript), which a small script
  closes on outside clicks. No sidebar, no
  right rail.
- **Home page: Scholar-style hero** (round portrait, name, tagline, social
  icons), followed by short lists of recent talks and essays, each
  linking to its full section.
- **Lists: Scholar's Presentations style** (bold title, a muted
  venue/date line, then a smaller description), applied to talks and
  adapted to essays and reviews.
- **Typography:** Inter for text and JetBrains Mono for code, from the
  Fontsource packages (`@fontsource-variable/*`), so the fonts are
  bundled into the build: no requests to third-party font services.
- A few component classes in `src/styles/global.css` (`page-title`,
  `muted`, `link`, `pill`) keep repeated styling out of the markup; teal
  is the accent color (list bullets, hover states, abstract rule).
- Code blocks use Shiki's dual themes (`github-light`/`github-dark`),
  switched by `data-theme`; their background comes from the site palette
  rather than Shiki's, so they stand out in both themes.
- **Icons** are vendored SVG files in `src/icons/`, imported as Astro
  components, not an icon package. The brand icons are copied from
  [Simple Icons](https://simpleicons.org/) 16.36.0 (CC0). Simple Icons
  has no LinkedIn icon (removed at LinkedIn's request), so `linkedin.svg`
  and `email.svg` are simple marks drawn for this site. Icons are
  decorative (`aria-hidden`, labeled by their parent), so the files carry
  no `<title>`: inlined, it would be a second `<title>` in the page.
- The hero portrait is `src/assets/arto.png`, a lossless conversion of
  the legacy `img/arto.jpg` (whose JPEG lacks a JFIF header, which Astro's
  image pipeline rejects). The hero tagline and contact links live in
  `src/data/contact.ts`.
- **Link previews:** every page has Open Graph and Twitter Card metadata
  (`src/layouts/Base.astro`): title, description (plain text via
  `plain()`), canonical URL, `og:type` (`article` with a publication date
  for entries), and a 1200x630 JPEG image with its dimensions and alt
  text; `twitter:site` and `twitter:creator` are `@bendiken`. Images are
  JPEG because not every messenger handles WebP previews.
  - The home page and section pages use designed cards in `public/og/`;
    essays and projects without a featured image get a card of their own
    (`public/og/<collection>/<id>.jpg`); notes and tags share their
    section's card. Entries with a featured image (talks, reviews) use it,
    converted to JPEG (`src/lib/preview.ts`); tall images (book covers)
    get X's small `summary` card instead of `summary_large_image`.
- **How the cards are made:** `scripts/og-cards.sh` loads the HTML template
  `scripts/og/card.html` in a local headless Google Chrome (override the
  binary with `CHROME=...`) at exactly 1200x630, screenshots it, and
  converts the PNG to JPEG (quality 88) with macOS `sips`. The JPEGs are
  committed; CI does not render cards. The template takes query
  parameters `title`, `subtitle`, `path` (shown after `ar.to`), and one of
  three layouts:
  - `hero=1`: home card; 380px round portrait left, 92px name, tagline.
  - (none): section card; 300px round portrait left, 84px "Arto's
    <Section>", subtitle.
  - `byline=<name>`: entry card; full-width title (76px, shrunk in 2px
    steps down to 44px until it fits above the footer), subtitle clamped
    to 3 lines, URL bottom left (ellipsized), and the byline bottom right,
    with the round avatar only when the byline is Arto Bendiken.
  - Shared look: background `#171717` with faint teal radial glows, Inter
    (bold titles, light subtitles, `#d4d4d4`), the URL in JetBrains Mono
    teal `#2dd4bf` after a teal dot, 96px side margins. Fonts load from
    `node_modules/@fontsource-variable/*`; the portrait from
    `src/assets/arto.png`.
- **Adding pages, so their previews match:**
  - New essay or project without a featured image: run
    `scripts/og-cards.sh` (it renders a card for every such entry, using
    its `title`, `subtitle` or `summary`, and `authors`) and commit the new
    `public/og/<collection>/<id>.jpg`. The build fails if the card is
    missing.
  - New talk or review: give it a featured `image` (ideally 16:9, at least
    1200px wide); without one it falls back to the section card.
  - New top-level section: add a `card <name> ...` line to
    `scripts/og-cards.sh`, rerun it, and pass `image={card('<name>', ...)}`
    and a `description` to `<Base>` in the section's page, as the existing
    section pages do.
  - New portrait or tagline: rerun `scripts/og-cards.sh` (all cards) and
    `scripts/favicons.sh`; update the tagline in both `src/data/contact.ts`
    and the `card home` line of `scripts/og-cards.sh`.
- **Favicons** come from the portrait, rendered by `scripts/favicons.sh`
  (via `scripts/og/icon.html` and a local headless Chrome) and committed:
  `favicon.ico` (16, 32, and 48px; a tight round crop of the face with
  transparent corners, legible at tab size), plus `apple-touch-icon.png`
  (180px), `icon-192.png`, and `icon-512.png` (a looser, opaque square
  crop, as iOS blackens transparency). `index.webmanifest` (the legacy
  site's manifest URL) lists the app icons.
- **No search for now** (it would add Pagefind as a dependency); revisit
  if the notes make it necessary.
- **Styling uses Tailwind CSS v4** (owner's preference over raw CSS), via
  `@tailwindcss/vite`, with `@tailwindcss/typography` (`prose`) for
  Markdown bodies. Styles live in `src/styles/global.css` and in utility
  classes; there is no theme package, and the references are visual
  guidance only.
- The theme is the `data-theme` attribute on `<html>`: `dark` in the
  markup (so it is the default even without JavaScript), switched to
  `light` before first paint by an inline script if the visitor chose it.
  The toggle stores the choice in `localStorage`. Tailwind's `dark:`
  variant follows `data-theme`, not the OS preference.
- The light theme declares `color-scheme: only light`, so that mobile
  browsers' automatic dark modes (Chrome on Android's "darken websites",
  Samsung Internet) don't re-darken it. `<meta name="theme-color">`
  follows the theme, so the browser chrome changes with the toggle.

## Supply-chain security

Node and npm have a poor supply-chain track record, so dependencies are
treated as a liability:

- **Minimal dependencies.** Add a package only when it clearly earns its
  place; prefer a few lines of our own code. Currently: `astro`,
  `@astrojs/sitemap`, Tailwind (`tailwindcss`, `@tailwindcss/vite`,
  `@tailwindcss/typography`), and the Fontsource Inter and JetBrains Mono
  fonts, plus the dev-only `@astrojs/check` and `typescript` for
  `npm run check` (type checking, also run in CI). `@astrojs/mdx` was
  removed as unused; re-add it only when an entry needs components.
- **Overrides** in `package.json` pin vulnerable transitive dependencies
  to fixed versions: `postcss-selector-parser` 6.1.5 (pulled in at 6.0.10
  by `@tailwindcss/typography`; GHSA-rj75-hqrm-r3gf). Drop an override
  once the parent package ships the fix.
- **Exact versions** (`save-exact`) and a committed `package-lock.json`;
  CI installs with `npm ci` only.
- **Cooling-off period:** `min-release-age=3` (days), so freshly published
  (possibly compromised) releases are never picked up.
- **No install scripts:** `ignore-scripts=true`. The only dependency
  declaring one is `fsevents` (an optional, macOS-only file watcher
  pulled in by the dev tooling), which ships prebuilt and works without
  it. Any other dependency that needs one requires explicit review.
- **No git dependencies:** `allow-git=none`.
- These settings live in the project `.npmrc` so they apply in CI too.

## Build and deployment

- GitHub Pages keeps serving the `gh-pages` branch ("deploy from branch").
  `.github/workflows/deploy.yml` builds on every push to `master` and, when
  run manually (`workflow_dispatch`), replaces the contents of `gh-pages`
  with the build output as a new commit (history is kept, not
  force-pushed).
- **Deploys are manual** (`gh workflow run deploy.yml`), so that work in
  progress on `master` never reaches the live site by accident. The
  cutover deploy ran on 2026-11-02; deploying on push remains an option.
- The build job, which runs npm code, has a read-only token and does not
  persist credentials; only the separate deploy job, which runs no npm
  code, gets `contents: write`. The build is handed over as an artifact.
- Only official `actions/*` actions are used, each pinned to a full commit
  SHA with the version in a trailing comment.
- Node version: `.node-version` (currently 26, the active LTS), shared by
  local tooling and CI.

## Analytics

- **No analytics or tracking** in the site itself: no scripts, pixels,
  cookies, or third-party requests for measuring visitors. Traffic
  statistics are limited to what Cloudflare, which already proxies the
  domain, records at its edge (the dashboard's traffic analytics), which
  needs no change to the pages. Cloudflare Web Analytics is not used, as
  it injects a JavaScript beacon (`static.cloudflareinsights.com`) into
  the pages; as of 2026-11-03 none is injected.
- The legacy Hugo site loaded Google Analytics (`gtag.js`, property
  `UA-83574-11`) on most pages; Universal Analytics had stopped
  collecting data in July 2023, and the reboot dropped it.

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
- **Notes are revived at their legacy URLs**, `/notes/<name>`, with an
  index at `/notes`. Before cutover, `/notes/*` is intercepted by
  Cloudflare: `/notes/x.html` 301s to `/notes/x`, which 302s to an S3
  bucket (`arto`) that now returns 403. The owner removes the S3 rule at
  cutover.
- The rest of `attic/attic/` (pre-Hugo index page, RSS feed, FOAF profile,
  Rakefile) holds nothing not already migrated; `/foaf.ttl` already 404s.
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
  pagination, `/tags/index.xml`, the retired `/tags/aurora-labs`, the old
  theme's `js/`, and `sitemap.xml`, which `@astrojs/sitemap` replaces with
  `sitemap-index.xml`).

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
- Downloadable files that belong to an entry are served under its URL,
  from `public/YYYY/MM/<slug>/` (e.g. the sample `drupal.nt` of "Grepping
  N-Triples"); the entry itself remains `<slug>.html`, which GitHub Pages
  prefers over the directory.
- Entries stay `.md`, not `.mdx`: most legacy bodies are raw HTML, which
  Markdown passes through but MDX parses strictly.
- Hugo `{{< youtube ID >}}` shortcodes became plain
  `<iframe class="video">` embeds from `youtube-nocookie.com`.
- Frontmatter uses camelCase keys (`dateEnd`, `eventUrl`, `allDay`,
  `updated` for Hugo's `lastmod`); talk media URLs are `video`, `slides`,
  `pdf`, `code`. Defaults are omitted: `authors` only when not just Arto,
  `abstract` only when it differs from `summary`. `lang: uk` marks the
  Ukrainian book summary.
- Republished entries record where they first appeared as structured
  frontmatter, not as a paragraph in the body: `original.url` (and
  `original.archive`, a Wayback Machine copy, when the original is gone)
  plus an optional `notice` (inline Markdown, e.g. what was lost in the
  move). `Notice.astro` renders both as a note after the content, styled
  apart from it. Reviews first posted on Goodreads link their review
  there the same way. `original.label` replaces the "Originally published
  at" lead-in where that would be wrong, as for the Peden transcript
  ("Transcribed from the audio recording at").
- An entry announced on X can carry that post as `tweet` frontmatter (its
  URL, date, text, and a snapshot of its replies, reposts, likes,
  bookmarks, and views). `Tweet.astro` renders it atop the content as a
  static card linking to the post, as social proof (so no separate
  "Discuss on Twitter" link): X's official embed would add an unpinnable
  third-party script, tracking, and a dependency on X being up. The
  metrics are updated by hand; X's public embed data
  (`cdn.syndication.twimg.com`) gives only replies and likes.
- Dropped legacy keys: `type`, `url`, `featured`, `publishDate`, and the
  boilerplate "Follow" `links` entries.

## Pages

- `src/pages/[year]/[month]/[slug].astro` serves essays, reviews, and
  talks from one shared URL space; the build fails if two collections
  claim the same `/YYYY/MM/<slug>`.
- `src/pages/projects/[slug].astro` serves projects; `essays.astro`,
  `reviews.astro`, `talks.astro`, and `projects.astro` are the section
  indexes. All entry pages share `src/components/Entry.astro`.
- An essay, review, or talk names its projects in `projects` frontmatter
  (project IDs, i.e. file names). Its page links them as teal pills with
  a package icon, right-aligned on the date line (wrapping below it on
  narrow screens), and each project page lists the entries that name it
  as "Related Essays" and "Related Talks", as the legacy site did. An
  unknown ID fails the build; a draft project is not linked.
- `/essays` opens with "Featured Essays", a card grid (`EssayGrid.astro`)
  of the essays with an `order` (lowest first; three per row, so the top
  three share the first row), followed by "All Essays", every essay
  (featured ones included) newest first. With the bendiken.net imports the
  plain list grew too long to find the important essays in. Projects use
  `order` the same way.
- **Markdown for agents:** every entry and note is also served as its
  Markdown source at its URL plus `.md` (e.g. `/2011/01/unlicense-1st-year.md`,
  `/projects/rdf.rs.md`, `/notes/3d.md`), as GitHub Pages can't negotiate
  content types. The file is the repository source verbatim, frontmatter
  included, except that relative references (`./foo.jpg`) point to the
  raw file on GitHub (`master`), as the build only emits images under
  hashed names. The `[slug].md.ts` endpoints share `src/lib/markdown.ts`;
  pages announce their twin with `<link rel="alternate"
  type="text/markdown">` (the `markdown` prop of `Base.astro`).
- The home page and section indexes have Markdown twins too (`/index.md`,
  `/essays.md`, `/talks.md`, `/publications.md`, `/projects.md`,
  `/reviews.md`, `/notes.md`): a heading, a description, and a list
  linking each page's `.md` (papers link their external pages), with the
  date and summary. They are generated from the collections on every
  build by `src/pages/*.md.ts` (via `markdownIndex()`), so they never
  need regenerating by hand. Tag pages (`/tags`, `/tags/<slug>`) have no
  Markdown twins yet; that is deliberately deferred.
- `/llms.txt` (per llmstxt.org), also generated on every build
  (`src/pages/llms.txt.ts`), maps the site for LLMs: the tagline, a note
  on the `.md` convention, links to the section indexes and to the
  featured essays (by `order`), and the notes under "Optional".
- Section headings (`<h2>`) use title case: "Featured Essays", "Recent
  Talks".
- `/tags` lists all tags; `/tags/<slug>` lists a tag's entries. `tagSlug()`
  reproduces Hugo's slugs (lowercase, punctuation dropped, spaces to
  hyphens; `e⧸acc` → `eacc`), so every legacy tag page is kept (except the
  retired `aurora-labs`, whose entry is now tagged NEAR Protocol).
- RSS 2.0 feeds keep their legacy URLs: `/index.xml` (everything),
  `/<section>/index.xml`, and `/tags/<slug>/index.xml`. Category, author,
  and `/tags/index.xml` feeds are dropped with their pages. Items carry the
  summary, not full content. `src/lib/rss.ts` writes the XML directly
  rather than depending on `@astrojs/rss`.
- Feed item `<link>`s are canonical URLs, but `<guid>`s keep the legacy
  `.html` form (with `isPermaLink="false"`), so readers don't re-announce
  old items. New entries follow the same rule, for consistency.
- `/publications` lists papers from the `publications` collection, a
  single data file (`src/content/publications.yaml`, via the `file()`
  loader), as one list, newest first: title, authors (Arto's name in
  bold), then the venue and year. Each paper links directly to its
  arXiv/CEUR/OSF page; there are no per-paper pages. The list mirrors
  Arto's Google Scholar profile (titles as published, using arXiv's
  canonical titles); it is maintained by hand, not synced.
- Drafts (`draft: true`) are shown by `astro dev` but never built. This
  matches the live site, where only the Unlicense project is published.
- Frontmatter `subtitle`, `summary`, and `abstract` contain inline
  Markdown (links, emphasis, `---` dashes). `src/lib/inline.ts` renders
  that subset in a few lines, instead of depending on a Markdown library
  (Astro 7 no longer installs `@astrojs/markdown-remark` by default).
- The home page shows the hero with contact links (`src/data/contact.ts`),
  then the five latest talks and essays. Talks come first, in the top menu
  too (essays led while the talks were out of date). Every page keeps the legacy footer
  dedicating the site's materials to the public domain (CC0).
- Pages are intentionally unstyled semantic HTML until the visual design
  is done.

- Notes (`notes` collection) are undated reference pages. Their `title`
  is inline Markdown (often a link to Wikipedia), rendered as "Arto's
  Notes re: <title>"; `plain()` in `src/lib/inline.ts` strips it for
  `<title>`. `weight` (0-5) from the legacy `.weights.tsv` marks
  prominence on the `/notes` index (as a `weight-N` class). Notes are not
  in the RSS feeds and have no tags.

## Content migration

- `scripts/migrate-attic.rb` converts `attic/content/` into `src/content/`.
  It is Ruby (standard library only) to avoid adding npm dependencies.
- It is idempotent and overwrites its output, so it may only be rerun
  until `src/content/` receives manual edits; from then on, `src/content/`
  is the source of truth and the script is historical.
- `scripts/migrate-notes.rb` converts the 499 git-tracked pre-Hugo notes
  (`attic/attic/notes/*.rst`) to Markdown with `pandoc` (a one-off local
  tool, not a site dependency). It drops the "Arto's Notes re:" title
  block into frontmatter, shifts headings down a level, inlines
  `.. include::` code files, and rewrites `.. note::` boxes as
  `> **Note:**` and the custom `:strike:` role as `~~...~~`. Code blocks
  are always fenced (```` ```text ```` when there is no language), via
  `scripts/pandoc-fence.lua`; indented code at the start of a body would
  be lost, as Astro trims it. The same
  source-of-truth rule applies as for the attic content.
- Both scripts are historical: their migrated sources are gone from
  `attic/` (see git history).
