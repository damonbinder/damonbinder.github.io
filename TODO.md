# djbinder.com — TODO

Astro rebuild on branch `astro-rebuild`. The live site stays on `master` (old Jekyll) until we deploy.

## Before launch (blockers)

- [x] **About bio** — written (`src/data/about.md`).
- [x] **Home blurb** — written (inline in `src/pages/index.astro`).
- [ ] **Recipes section — get the pages right** (Damon's parked deploy for this):
  - [ ] **Ancient Mediterranean era text** — Damon to read through `src/content/eras/ancient-mediterranean.md` and confirm he's happy with it.
  - [ ] **All Recipes page** (`/recipes/all/`) — Damon to confirm he's happy with it. Candidate improvements: a "showing N recipes" count, an empty-state when a filter combo matches nothing, and (maybe) a sort control (currently source order).
  - [ ] **Hub — unpublished sources** (`/recipes/`): decide whether the public hub lists drafted-but-unpublished sources (Apicius, Athenaeus, Galen, …) as muted "N drafted, not yet published" roadmap teasers, or hides them until they have a published recipe.
  - [ ] **Hub — five-cuisine framing**: only Ancient Mediterranean and Medieval India exist. Decide whether Mesopotamian / Medieval Arabic / Medieval European appear as "coming" or stay hidden until they have recipes.
  - [ ] **Hub — lead copy**: revisit "I've cooked hundreds…" now that the visible set is 18.
  - [ ] **Per-source pages** — quick coherence pass across the three live sources (Vinidarius and Mānasollāsa carry a full-text accordion; Apicius deliberately doesn't).
  - [ ] **Descriptions** — decide whether missing recipe `description` fields are expected or a gap to fill.
  - [ ] **Mobile / card-metadata polish** across the recipe pages.
- [ ] **Deploy live** — add a GitHub Action to build the Astro site and deploy to GitHub Pages, and switch the repo's Pages source from Jekyll to Actions. Include a scheduled (cron) rebuild so new Defenses in Depth and Random Lives posts stay current without a manual push. (Production build is confirmed clean — 33 pages, 18 recipes.)
- [ ] **Point djbinder.com at the new site** — confirm the custom domain resolves to the new deploy once Pages is switched (CNAME is preserved in `public/`).

Done earlier: home page layout (portrait photo + three columns: Latest posts / Projects / Other stuff, with "See more →"), Blog section (renamed from Writing, aggregates Damon's posts + Defenses in Depth + Random Lives + podcasts), Projects page, Book recommendations page, Physics research page, and the old physics simulations restored as a project.

Done this session (recipes): Ancient Mediterranean and Medieval India era blurbs; Apicius source blurb + draft page (full text deliberately omitted, points to Grocock & Grainger); rebuilt `/recipes/all/` with Tradition / Category / Language facets (Isicia folded into Meat, "Eggs and Patinas" → Eggs, fixed order; dropped the specialized dish-type and course facets); standardized 18 cluttered source citations; backfilled original Latin + first-pass (AI-drafted, unreviewed) translations across the Apicius recipe drafts; research notes on Apicius dating/eponyms in `research/`.

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
