import type { MetadataRoute } from 'next';
import { getSiteContent } from '@/lib/site-content';

export default function robots(): MetadataRoute.Robots {
  const site = getSiteContent();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
