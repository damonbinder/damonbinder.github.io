# djbinder.com — TODO

Astro rebuild on branch `astro-rebuild`. The live site stays on `master` (old Jekyll) until we deploy.

## Before launch (blockers)

- [x] **About bio** — written (`src/data/about.md`).
- [x] **Home blurb** — written (inline in `src/pages/index.astro`).
- [ ] **Recipes section — get the pages right** (Damon's parked deploy for this):
  - [x] **Hub layout** (`/recipes/`) — essay + a sticky alphabetical source index (single-author sources first, group pages after). Unpublished sources show greyed with their date only (no draft counts leaked to the public).
  - [x] **Source attribution** — explicit `work:` on every classical recipe; citations regularized to "Author, Work N" (Option B); dish→source routing fixed; recipes now sort in citation order (book.chapter.recipe) within each source.
  - [x] **Source pages** — dedicated pages for the ten chosen sources (+ Mānasollāsa); everything else grouped onto "Agricultural writers" and "Other sources". Rough dates added for all sources. Recipe pages gained a footer linking to the source + recipe index.
  - [x] **All Recipes page** (`/recipes/all/`) — result count, empty-state, filter order Tradition / Language / Category; Mānasollāsa recipes backfilled with canonical categories.
  - [x] **Medieval India era text**; grammar pass on Ancient Mediterranean era text.
  - [ ] **Ancient Mediterranean era text** — final read-through by Damon. Open micro-decisions: "Mithaikos" vs "Mithaecus" spelling (essay vs citations); the "Dining Philosophers" gloss for *Deipnosophistae*.
  - [ ] **Two flagged recipes** — `lentils-with-greens` (Heidelberg entry number?) and `cabbage-salad` (confirm Mnesitheus-in-Oribasius, Cato cross-ref dropped).
  - [ ] **Hub — five-cuisine framing**: only Ancient Mediterranean and Medieval India exist. Decide whether Mesopotamian / Medieval Arabic / Medieval European appear as "coming" or stay hidden.
  - [ ] **Hub — lead copy**: "I've cooked hundreds…" vs the 19 recipes currently visible publicly.
  - [ ] **Descriptions** — decide whether missing recipe `description` fields are expected or a gap to fill.
  - [ ] **Mobile / card-metadata polish** across the recipe pages.
- [ ] **Deploy live** — add a GitHub Action to build the Astro site and deploy to GitHub Pages, and switch the repo's Pages source from Jekyll to Actions. Include a scheduled (cron) rebuild so new Defenses in Depth and Random Lives posts stay current without a manual push. (Production build is confirmed clean — 33 pages, 18 recipes.)
- [ ] **Point djbinder.com at the new site** — confirm the custom domain resolves to the new deploy once Pages is switched (CNAME is preserved in `public/`).

Done earlier: home page layout (portrait photo + three columns: Latest posts / Projects / Other stuff, with "See more →"), Blog section (renamed from Writing, aggregates Damon's posts + Defenses in Depth + Random Lives + podcasts), Projects page, Book recommendations page, Physics research page, and the old physics simulations restored as a project.

Done in an earlier session (recipes): Apicius source blurb + draft page (full text deliberately omitted, points to Grocock & Grainger); `/recipes/all/` facets; backfilled original Latin + first-pass (AI-drafted, unreviewed) translations across the Apicius recipe drafts; research notes on Apicius dating/eponyms in `research/`.

Done in the latest session (recipes): reworked the hub into essay + alphabetical source-index rail; regularized attribution across ~172 classical recipes against the master CSV (explicit `work:`, Option B citations, citation-order sort); source-page routing with two group pages ("Agricultural writers", "Other sources"); public hub shows unpublished sources greyed with dates only; backfilled canonical categories on all 64 Mānasollāsa recipes; all-recipes filter order → Tradition / Language / Category; recipe-page footer links; Medieval India blurb; grammar pass + source dates. Change reports in `research/`. **Not yet committed.**

## Polish & small decisions (pre- or post-launch)

- [ ] **Rename the blog content folder** — posts live in `src/content/writing/` (a leftover name); rename to `src/content/blog/` so it matches the section. Internal only.
- [ ] **Width consistency** — Blog, Projects, and About are at the reading width (44rem); Books and Physics research are still on the wider layout (58rem). Decide whether to match them.
- [ ] **Projects "See more →"** — mirror the Latest-posts treatment once Projects has more entries.

## Feature projects (post-launch — tracked, not blocking deploy)

- [ ] A Timeline of Everything
- [ ] The Tree of Life
- [ ] The proto-Indo-European language tree
- [ ] The Music Box (and other vibe-coded projects)
- [ ] Decide hosting for these: subdomains (`lives.djbinder.com`) vs subpaths (`djbinder.com/timeline`)

## Later / nice-to-have

- [ ] **Random Lives**: move to its own domain + add an RSS feed (`jekyll-feed`), then switch the aggregator in `src/loaders/external.ts` from HTML-scraping the blog index to reading the feed (like Defenses in Depth).
- [ ] **Apicius recipes** — as Damon cooks and publishes each, review/replace its AI-drafted translation with his own (the drafts are backstage until published).
