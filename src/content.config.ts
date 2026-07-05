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

export const collections = { writing, links };
