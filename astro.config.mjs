// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// djbinder.com is served at the domain root via the CNAME in public/,
// so no `base` path is needed.
export default defineConfig({
  site: 'https://djbinder.com',
  // Astro 7 changed the default to 'jsx', which strips the whitespace between
  // inline elements — that eats the space after the `›` in recipe breadcrumbs
  // and around the `·` separators on source pages. Keep HTML whitespace rules.
  compressHTML: true,
  markdown: {
    // Astro 7 defaults to its own Sätteri markdown pipeline. Stay on the
    // remark/rehype (unified) pipeline, which is what remark-math and
    // rehype-katex are written against.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
