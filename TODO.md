# djbinder.com — TODO

Astro rebuild on branch `astro-rebuild`. The live site stays on `master` (old Jekyll) until we deploy.

## Before launch (blockers)

- [ ] **About bio** — write the real About page. Currently just a placeholder; the file is `src/pages/about/index.astro`.
- [ ] **Home blurb** — the brief description next to the photo on the home page is placeholder text. Needs Damon's words (`src/pages/index.astro`).
- [ ] **Deploy live** — add a GitHub Action to build the Astro site and deploy to GitHub Pages, and switch the repo's Pages source from Jekyll to Actions. Include a scheduled (cron) rebuild as part of this, so new Defenses in Depth and Random Lives posts stay current without a manual push.
- [ ] **Point djbinder.com at the new site** — confirm the custom domain resolves to the new deploy once Pages is switched (CNAME is preserved in `public/`).

Done this session: home page layout (portrait photo + three columns: Latest posts / Projects / Other stuff, with "See more →"), Blog section (renamed from Writing, aggregates Damon's posts + Defenses in Depth + Random Lives + podcasts), Projects page, Book recommendations page, Physics research page, and the old physics simulations restored as a project.

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