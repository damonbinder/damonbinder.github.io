import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { externalLoader } from './loaders/external.ts';

// Native posts written here. Set `external` + `source` to turn one into a
// hand-made link post; otherwise it renders on its own page.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    external: z.string().url().optional(),
    source: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Link posts pulled automatically from external sources (Defenses in Depth,
// Random Lives) at build time.
const links = defineCollection({
  loader: externalLoader(),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    external: z.string().url(),
    source: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

// Classical recipes: one file per recipe, split from the source cookbook.
// Recipes start as `draft` (dev-only) and are flipped to `published` when
// they go live. Enrichment fields (original/translation/description/tags) are
// filled in as each recipe is drafted, so they are all optional.
const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    source: z.string().optional(),        // citation, e.g. "Apicius 4.3.6"
    // Provenance + enrichment
    work: z.string().optional(),          // source facet: author/work, e.g. "Vinidarius"
    originalLang: z.string().optional(),   // "Latin" | "Greek" | "Sanskrit" | …
    original: z.string().optional(),      // original-language source text
    translation: z.string().optional(),   // fresh English translation (Claude)
    description: z.string().optional(),    // brief intro to the dish
    related: z.array(z.string()).default([]),   // slugs of related recipes
    // Tag facets (browse axes)
    tradition: z.string().optional(),      // "Roman" | "Greek"
    course: z.string().optional(),         // starter | main | side | dessert | drink | sauce | bread
    dishType: z.string().optional(),       // patina | minutal | ofella | sausage | ...
    ingredients: z.array(z.string()).default([]),
    // Original grouping (retained during migration to tags)
    category: z.string(),
    subcategory: z.string().optional(),
    order: z.number().default(0),
    // Publication state
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = { writing, links, recipes };
