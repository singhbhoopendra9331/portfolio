import type { MetadataRoute } from 'next';
import { siteConfig, navItems } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = navItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  };

  return [...staticRoutes, blogIndex, ...blogPosts];
}
