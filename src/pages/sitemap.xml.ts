import type { APIRoute } from 'astro';

// @astrojs/sitemap emits sitemap-index.xml, but crawlers and humans
// habitually request /sitemap.xml. Serve the same index there so both
// paths work. robots.txt points at sitemap-index.xml as the canonical.
export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://www.houndstack.com/sitemap-0.xml</loc></sitemap></sitemapindex>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
