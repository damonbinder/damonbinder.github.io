# djbinder.com — project guide

Personal website for Damon Binder. This file is project-specific context; Damon's global rules (prose style, US spelling, sentence-case headers, workflow) still apply and aren't repeated here.

## What this is & status

- Astro static site. It replaces an old Jekyll site, now parked in **`legacy/`**.
- **Live at [djbinder.com](https://djbinder.com) since 2026-07-13.** Deployed from `master` via `.github/workflows/deploy.yml` — builds and pushes to GitHub Pages on every push to `master`, on manual dispatch, and on a daily cron (so the blog river's external feeds stay current). Work happens on `astro-rebuild`; commit and push to `master` to go live (as of the launch, `master` and `astro-rebuild` point at the same commit — merge or fast-forward as needed).
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
| Blink (the game) | `public/blink/` — a self-contained static app, notes in `docs/blink/` |

Note: the blog posts folder is still named `writing/` (leftover from before the section was renamed "Blog"). Renaming it to `blog/` is on the TODO.

**Everything under `public/` is copied verbatim into the build and served.** That is what makes `public/blink/` work — vanilla ES modules, no Astro involvement, editing it *is* deploying it — and it is also why that game's `CLAUDE.md` and `TODO.md` live in `docs/blink/` instead of beside the code. They were briefly in `public/` and were live at `/blink/CLAUDE.md`, which spoiled mechanics the game is meant to make you discover. Don't put anything under `public/` that you wouldn't publish.

**Blink is deliberately unlisted**: nothing links to it, and `public/blink/index.html` carries a `noindex` tag. Both are meant to come off together when it goes public — see `docs/blink/TODO.md`.

## Architecture

- **Blog is a unified "river"**: native posts (in `src/content/writing/`) plus link-posts pulled at build time by `src/loaders/external.ts` and merged in `src/lib/river.ts`. Sources: Defenses in Depth and Random Lives, both HTML scrapes (see "External facts"). Podcasts are native link-post `.md` files. The internal content-collection name is `writing` (not user-facing).
- **Layout**: `src/layouts/Base.astro`. It takes a `wide` prop — wide pages (`home`, `research`, recipe source pages) use a 58rem measure; the rest (Blog, Projects, Books, About, individual recipe pages) use a 44rem reading measure (`--measure` in `src/styles/global.css`).
- **Nav** (in `src/components/Header.astro`): Blog · Projects · About. Books and Physics research are reached from the home page "Other stuff" column, deliberately **not** in the nav. The "Damon Binder" site-title is hidden on the home page (redundant with the hero).
- **Math**: `remark-math` + `rehype-katex`, rendered at build time; KaTeX CSS imported in `Base.astro`. Use `$$…$$` for display math.

## Recipes

Damon's personal collection of historical recipes he's actually cooked — classical (Apicius, Vinidarius, etc.) and Mānasollāsa (medieval Indian) so far. Not a comprehensive reconstruction reference; the bar for a recipe to go live is **Damon cooked it and it was good.**

- **Content collection**: `recipes`, schema in `src/content.config.ts`. Key fields: `source` (citation, e.g. "Vinidarius 20"), `work` (source name, or derived from `source` — see `workOf()`), `originalLang`/`original`/`translation`, `status: draft | published`. A recipe's intro/description is **body prose above the `## Ingredients` heading** (the first paragraph of the markdown body) — there is **no** `description` frontmatter field. `category`/`subcategory`/`order` are **legacy** from an abandoned category-based taxonomy (see `src/data/recipe-sections.json`) — don't design new features around them; sources are now the organizing axis.
- **Publish gating**: `showingDrafts` (`src/lib/recipes.ts`) is true in dev or with `SHOW_DRAFTS=1`; the public build shows only `status: published`. Everything not yet cooked stays a backstage draft — this is how the site can go live before the whole backlog is done.
- **Where the Mānasollāsa recipes came from, and what a draft is.** They were generated in bulk from one cookbook document (`Recipe Source List`), which was itself built from a working Sanskrit transcription plus a close English translation. That document reproduced the Sanskrit per recipe but reduced the English to a **short summary per dish** — so a draft's `translation` is a digest rather than a translation, and its `original` inherits whatever errors were in the transcription. **Drafts are very provisional: a bulk first pass, not an attempt at accuracy.** Errors in a draft are the expected state, not a finding. Don't report them as if they were a discovery, and don't reason from "the drafts are full of errors" to any conclusion about the site.
- **What publishing means.** Damon cooked it and it was good, **and** he individually checked the text before publishing. Published recipes have had a pass drafts have not, which is why they contain far fewer errors. So treat a published page's wording as reviewed: change it only on evidence, keep the change minimal, and say exactly what changed.
- **Routing is source-based**: `/recipes/[source]/` (the source's page) and `/recipes/[source]/[slug]/` (a recipe) — not by dish category. `citationNumber()` in `src/lib/recipes.ts` sorts recipes within a source by their actual position in the text (parsed from `source`), which is what page ordering and prev/next navigation use — **not** the legacy `order` field.
- **Full source text** (`src/data/sources/<work>.ts`, registered in `src/data/sources/index.ts`): the complete surviving text of a source — Latin/Sanskrit/etc. plus English — independent of which entries have become recipe pages yet. Rendered as a collapsed `<details>` on the source's page, each entry linking through to its recipe page when one exists.
- **Source metadata** (rough date + intro blurb about the cookbook/author): content collection `sources`, one markdown file per source in `src/content/sources/<slug>.md` — frontmatter `name` (matches `work` on recipes) and optional `period`, body is the blurb (plain markdown, standard `*emphasis*` works). Only sources with something to say need a file; the page skips the blurb block otherwise. Looked up via `getSourceEntry()` in `src/lib/recipes.ts`.
- **Loan words**: untranslated source-language terms (*caccabina*, *ofellae*, *patina*, *sextarius*...) are marked with `*asterisks*` in the `title`/`translation` frontmatter fields (rendered as `<em>` via a small `em()` helper on each page) and in body prose (rendered as Markdown emphasis directly) — **not** for modern ingredient substitutes named in an ingredient list (e.g. tejpat).
- **Editorial/uncertainty notes inside translations use square brackets**, e.g. `[the name is obscure]` — not parentheses.
- **Never fabricate original-language source text.** Only transcribe from a verified source Damon provides. Translations for recipes Damon hasn't personally checked may be AI-drafted, but say so explicitly when reporting the work — they haven't been reviewed the way his own are.

## Site-copy guardrails

- Keep copy **plain and factual** — no performative or salesy framing.
- **Bio and home blurb are Damon's to write.** Use explicit `[Placeholder]` text; do not invent them. **Do not write placeholder or filler prose anywhere on the site** — this extends to recipe intros/notes (see Recipes above): if there's nothing non-obvious to say, write no intro rather than restating the title or ingredients.
- Preserve Damon's exact wording; don't silently reword or re-case (headers are sentence case).

## Verify workflow

- After changes, verify in the preview (console/logs/snapshot/inspect), not just by assuming.
- **The in-app preview iframe renders ~300px wide**, so desktop layouts show as the mobile stack. Check computed styles / widths rather than trusting screenshots for layout.

## External facts

- **Defenses in Depth** — Damon's blog at defensesindepth.bio. Multi-author. It was on Ghost and moved to Jekyll in August 2026, which killed the author feed the loader used (`/author/damon/rss/`, now a 404). There is no per-author feed on the new site and the site-wide `/feed.xml` is capped at 15 posts across all authors, so the loader scrapes his author page, `/authors/damon-binder/`, which lists all of them unpaginated. It skips posts titled `Linkpost: …`: the blog runs its own link-posts, and Damon carries the same links here as native link-posts pointing at the article rather than at the DiD wrapper page.
- **Random Lives** — deployed at random-lives.github.io/random-lives, a separate GitHub org (Jekyll, no RSS feed yet → the loader scrapes its `/blog/` index).

## Deploy

Live and deployed — see "What this is & status" above for how. See **TODO.md** for current outstanding (post-launch) work.
