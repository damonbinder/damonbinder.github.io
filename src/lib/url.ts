// Link-post URLs come from outside this repo — an RSS feed and a scraped blog
// index — and end up as `<a href={p.external}>` in the built HTML. Astro escapes
// attribute values but does not look at the scheme, so a feed entry linking to
// `javascript:…` or `data:text/html,…` would be baked into the published pages
// and would run in this site's origin the moment a reader clicked the headline.
// Nothing reaches an href without passing through here first.
const SAFE_PROTOCOLS = new Set(['http:', 'https:']);

// The URL normalized as an absolute http(s) URL, or null for anything else —
// unparseable, or a scheme a link post has no business using (`javascript:`,
// `data:`, `mailto:`, `file:`…). `base` resolves relative links; an absolute
// URL ignores it, which is exactly why resolving against an origin is not on
// its own a scheme check.
//
// The normalized `href` is returned rather than the input, so tabs, newlines
// and stray control characters — which the URL parser strips, and which a
// browser would strip too, turning `java\nscript:` back into `javascript:` —
// cannot survive the check and reappear in the output.
export function safeHttpUrl(value: string, base?: string): string | null {
  let url: URL;
  try {
    url = new URL(value, base);
  } catch {
    return null;
  }
  return SAFE_PROTOCOLS.has(url.protocol) ? url.href : null;
}

export function isSafeHttpUrl(value: string): boolean {
  return safeHttpUrl(value) !== null;
}
