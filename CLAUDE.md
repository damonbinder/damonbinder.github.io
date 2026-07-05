# djbinder.com — project guide

Personal website for Damon Binder. This file is project-specific context; Damon's global rules (prose style, US spelling, sentence-case headers, workflow) still apply and aren't repeated here.

## What this is & status

- Astro static site, being built on branch **`astro-rebuild`**. It replaces an old Jekyll site, now parked in **`legacy/`**.
- The **live site is still the old Jekyll** served from `master`. Nothing goes live until we deploy (see TODO.md). Work on `astro-rebuild`.
- Dev: `npm run dev` (port 4321). Build: `npm run build`. Verify changes with the preview tools.

## Where content lives

All content is in markdown/data files — **do not hardcode content inside `.astro` components.**

| Content | File |
|---|---|
| Blog posts | `src/content/writing/*.md` (one file per post) |
| Book recommendations | `src/data/book-recommendations.md` |
| Physics research | `src/data/physics-research.md` |
| Projects | `src/data/projects.ts` |
| Physics simulations | `src/data/simulations.md` (intro + list) + the apps in `public/scripts/` |
| About page | `src/data/about.md` |
| Home blurb + portrait | `src/pages/index.astro` — the blurb is inline here (it's part of the hero layout); photo at `public/face.jpg` |

Note: the blog posts folder is still named `writing/` (leftover from before the section was renamed "Blog"). Renaming it to `blog/` is on the TODO.

## Architecture

- **Blog is a unified "river"**: native posts (in `src/content/writing/`) plus link-posts pulled at build time by `src/loaders/external.ts` and merged in `src/lib/river.ts`. Sources: Defenses in Depth (author-filtered RSS) and Random Lives (HTML scrape). Podcasts are native link-post `.md` files. The internal content-collection name is `writing` (not user-facing).
- **Layout**: `src/layouts/Base.astro`. It takes a `wide` prop — wide pages (`home`, `research`) use a 58rem measure; the rest (Blog, Projects, Books, About) use a 44rem reading measure (`--measure` in `src/styles/global.css`). Blog, Projects, and About share the reading width.
- **Nav** (in `src/components/Header.astro`): Blog · Projects · About. Books and Physics research are reached from the home page "Other stuff" column, deliberately **not** in the nav. The "Damon Binder" site-title is hidden on the home page (redundant with the hero).
- **Math**: `remark-math` + `rehype-katex`, rendered at build time; KaTeX CSS imported in `Base.astro`. Use `$$…$$` for display math.

## Site-copy guardrails

- Keep copy **plain and factual** — no performative or salesy framing.
- **Bio and home blurb are Damon's to write.** Use explicit `[Placeholder]` text; do not invent them.
- Preserve Damon's exact wording; don't silently reword or re-case (headers are sentence case).

## Verify workflow

- After changes, verify in the preview (console/logs/snapshot/inspect), not just by assuming.
- **The in-app preview iframe renders ~300px wide**, so desktop layouts show as the mobile stack. Check computed styles / widths rather than trusting screenshots for layout.

## External facts

- **Defenses in Depth** — Damon's Ghost blog at defensesindepth.bio. Multi-author; the loader reads the author feed (`/author/damon/rss/`) and also filters by `dc:creator` = "Damon Binder".
- **Random Lives** — deployed at random-lives.github.io/random-lives, a separate GitHub org (Jekyll, no RSS feed yet → the loader scrapes its `/blog/` index).

## Deploy plan

Not deployed yet. Plan: GitHub Action to build + deploy to GitHub Pages, switch the repo's Pages source off Jekyll to Actions, add a scheduled (cron) rebuild so Defenses in Depth / Random Lives stay current, and confirm the domain (CNAME is preserved in `public/`).

See **TODO.md** for the current outstanding work.
