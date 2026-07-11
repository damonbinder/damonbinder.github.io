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
| Recipes | `src/content/recipes/*.md` (one file per recipe) + `src/data/sources/*.ts` (complete source texts) |

Note: the blog posts folder is still named `writing/` (leftover from before the section was renamed "Blog"). Renaming it to `blog/` is on the TODO.

## Architecture

- **Blog is a unified "river"**: native posts (in `src/content/writing/`) plus link-posts pulled at build time by `src/loaders/external.ts` and merged in `src/lib/river.ts`. Sources: Defenses in Depth (author-filtered RSS) and Random Lives (HTML scrape). Podcasts are native link-post `.md` files. The internal content-collection name is `writing` (not user-facing).
- **Layout**: `src/layouts/Base.astro`. It takes a `wide` prop — wide pages (`home`, `research`, recipe source pages) use a 58rem measure; the rest (Blog, Projects, Books, About, individual recipe pages) use a 44rem reading measure (`--measure` in `src/styles/global.css`).
- **Nav** (in `src/components/Header.astro`): Blog · Projects · About. Books and Physics research are reached from the home page "Other stuff" column, deliberately **not** in the nav. The "Damon Binder" site-title is hidden on the home page (redundant with the hero).
- **Math**: `remark-math` + `rehype-katex`, rendered at build time; KaTeX CSS imported in `Base.astro`. Use `$$…$$` for display math.

## Recipes

Damon's personal collection of historical recipes he's actually cooked — classical (Apicius, Vinidarius, etc.) and Mānasollāsa (medieval Indian) so far. Not a comprehensive reconstruction reference; the bar for a recipe to go live is **Damon cooked it and it was good.**

- **Content collection**: `recipes`, schema in `src/content.config.ts`. Key fields: `source` (citation, e.g. "Vinidarius 20"), `work` (source name, or derived from `source` — see `workOf()`), `originalLang`/`original`/`translation`, `description` (optional — see guardrail below), `status: draft | published`. `category`/`subcategory`/`order` are **legacy** from an abandoned category-based taxonomy (see `src/data/recipe-sections.json`) — don't design new features around them; sources are now the organizing axis.
- **Publish gating**: `showingDrafts` (`src/lib/recipes.ts`) is true in dev or with `SHOW_DRAFTS=1`; the public build shows only `status: published`. Everything not yet cooked stays a backstage draft — this is how the site can go live before the whole backlog is done.
- **Routing is source-based**: `/recipes/[source]/` (the source's page) and `/recipes/[source]/[slug]/` (a recipe) — not by dish category. `citationNumber()` in `src/lib/recipes.ts` sorts recipes within a source by their actual position in the text (parsed from `source`), which is what page ordering and prev/next navigation use — **not** the legacy `order` field.
- **Full source text** (`src/data/sources/<work>.ts`, registered in `src/data/sources/index.ts`): the complete surviving text of a source — Latin/Sanskrit/etc. plus English — independent of which entries have become recipe pages yet. Rendered as a collapsed `<details>` on the source's page, each entry linking through to its recipe page when one exists.
- **Source metadata** (rough date + intro blurb about the cookbook/author): content collection `sources`, one markdown file per source in `src/content/sources/<slug>.md` — frontmatter `name` (matches `work` on recipes) and optional `period`, body is the blurb (plain markdown, standard `*emphasis*` works). Only sources with something to say need a file; the page skips the blurb block otherwise. Looked up via `getSourceEntry()` in `src/lib/recipes.ts`.
- **Loan words**: untranslated source-language terms (*caccabina*, *ofellae*, *patina*, *sextarius*...) are marked with `*asterisks*` in `title`/`translation`/`description` fields and rendered as `<em>` via a small `em()` helper on each page — **not** for modern ingredient substitutes named in an ingredient list (e.g. tejpat).
- **Editorial/uncertainty notes inside translations use square brackets**, e.g. `[the name is obscure]` — not parentheses.
- **Never fabricate original-language source text.** Only transcribe from a verified source Damon provides. Translations for recipes Damon hasn't personally checked may be AI-drafted, but say so explicitly when reporting the work — they haven't been reviewed the way his own are.

## Site-copy guardrails

- Keep copy **plain and factual** — no performative or salesy framing.
- **Bio and home blurb are Damon's to write.** Use explicit `[Placeholder]` text; do not invent them. **Do not write placeholder or filler prose anywhere on the site** — this extends to recipe descriptions/notes (see Recipes above): if there's nothing non-obvious to say, leave the optional field empty rather than restating the title or ingredients.
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
