// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// djbinder.com is served at the domain root via the CNAME in public/,
// so no `base` path is needed.
export default defineConfig({
  site: 'https://djbinder.com',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
