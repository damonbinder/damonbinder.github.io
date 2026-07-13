# djbinder.com — TODO

Astro rebuild — **live at [djbinder.com](https://djbinder.com) since 2026-07-13**, built and deployed from `master` via GitHub Actions (with a daily cron rebuild so the blog river's external feeds stay current). The old Jekyll site is parked in `legacy/`.

## Launched ✓ (2026-07-13)

- [x] **Deploy** — `.github/workflows/deploy.yml` builds the Astro site and deploys to GitHub Pages on push to `master`, manual dispatch, and a daily cron. Pages source switched Jekyll → GitHub Actions; HTTPS enforced.
- [x] **Domain** — djbinder.com resolves to the new deploy; CNAME preserved, cert approved. Drafts confirmed hidden in the public build.
- [x] **About bio** and **home blurb**.
- [x] **Recipes** — hub reworked (essay + alphabetical source index, unpublished sources greyed with dates only); source attribution regularized across ~172 classical recipes (explicit `work:`, "Author, Work N" citations, citation-order sort); source pages + two group pages ("Agricultural writers", "Other sources"); `/recipes/all/` facets (Tradition / Language / Category) with all 64 Mānasollāsa recipes categorized; per-source dates; recipe-page footer links; Medieval India blurb + Ancient Mediterranean era text (grammar pass).
- [x] **Books** — collapsible sections/subsections; bibliographic fixes.

## Post-launch follow-ups (non-blocking — edits auto-redeploy on push to `master`)

- [ ] **Ancient Mediterranean era text** — final read-through by Damon. Open micro-decisions: "Mithaikos" vs "Mithaecus" spelling (essay vs citations); the "Dining Philosophers" gloss for *Deipnosophistae*.
- [ ] **Two flagged recipes** — `lentils-with-greens` (Heidelberg entry number?) and `cabbage-salad` (confirm Mnesitheus-in-Oribasius, Cato cross-ref dropped).
- [ ] **Hub — lead copy**: "I've cooked hundreds…" vs the 19 recipes currently visible publicly.
- [ ] **Hub — five-cuisine framing**: only Ancient Mediterranean and Medieval India exist. Decide whether Mesopotamian / Medieval Arabic / Medieval European appear as "coming" or stay hidden.
- [ ] **Descriptions** — decide whether missing recipe `description` fields are expected or a gap to fill.
- [ ] **Mobile / card-metadata polish** across the recipe pages.
- [ ] **CI** — bump the GitHub Action versions when convenient (GitHub warns the pinned actions target Node 20; builds fine for now).

Done earlier: home page layout (portrait photo + three columns: Latest posts / Projects / Other stuff, with "See more →"), Blog section (renamed from Writing, aggregates Damon's posts + Defenses in Depth + Random Lives + podcasts), Projects page, Book recommendations page, Physics research page, and the old physics simulations restored as a project.

Done in an earlier session (recipes): Apicius source blurb + draft page (full text deliberately omitted, points to Grocock & Grainger); `/recipes/all/` facets; backfilled original Latin + first-pass (AI-drafted, unreviewed) translations across the Apicius recipe drafts; research notes on Apicius dating/eponyms in `research/`.

The recipes/books work from the launch session is captured in "Launched ✓" above; change reports for the attribution, category, and book-list fact-check passes are in `research/`.

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
