import type { Metadata } from 'next';
import type { PostMeta } from '@/lib/blog';
import type { SiteContent } from '@/lib/site-content';
import { formatDateISO } from '@/lib/format';

const DEFAULT_OG_IMAGE = '/opengraph-image';

export type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  keywords?: string[];
};

function resolveImage(image: string | undefined, baseUrl: string): string {
  if (!image) return `${baseUrl}${DEFAULT_OG_IMAGE}`;
  if (image.startsWith('http')) return image;
  return `${baseUrl}${image}`;
}

export function buildMetadata(
  config: SeoConfig,
  baseUrl: string,
  siteName: string
): Metadata {
  const url = config.path ? `${baseUrl}${config.path}` : baseUrl;
  const image = resolveImage(config.image, baseUrl);

  return {
    title: config.title,
    description: config.description,
    ...(config.keywords?.length ? { keywords: config.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: config.type ?? 'website',
      locale: 'en_US',
      url,
      title: config.title,
      description: config.description,
      siteName,
      ...(config.publishedTime ? { publishedTime: config.publishedTime } : {}),
      ...(config.modifiedTime ? { modifiedTime: config.modifiedTime } : {}),
      ...(config.authors?.length ? { authors: config.authors } : {}),
      ...(config.tags?.length ? { tags: config.tags } : {}),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [image],
    },
  };
}

export function buildSiteMetadata(site: SiteContent): Metadata {
  const title = site.seoTitle ?? `${site.title} — ${site.tagline}`;
  const description = site.seoDescription ?? site.description;
  const pageMeta = buildMetadata(
    {
      title,
      description,
      keywords: site.keywords,
      image: site.image,
    },
    site.url,
    site.title
  );

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s | ${site.title}`,
    },
    description,
    keywords: site.keywords,
    authors: [{ name: site.title }],
    creator: site.title,
    openGraph: pageMeta.openGraph,
    twitter: pageMeta.twitter,
    alternates: {
      canonical: site.url,
      types: {
        'application/rss+xml': [
          { url: '/rss.xml', title: `${site.title} Blog` },
        ],
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/icon',
    },
    manifest: '/manifest.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function buildPostMetadata(post: PostMeta, baseUrl: string, siteName: string): Metadata {
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.description;
  const image = post.ogImage ?? post.heroImage;
  const modified = post.updated ?? post.date;

  return buildMetadata(
    {
      title,
      description,
      path: `/blog/${post.slug}`,
      image,
      type: 'article',
      publishedTime: formatDateISO(post.date),
      modifiedTime: formatDateISO(modified),
      authors: [post.author],
      tags: post.tags,
    },
    baseUrl,
    siteName
  );
}

export function buildPersonJsonLd(site: SiteContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.title,
    url: site.url,
    jobTitle: site.tagline,
    description: site.description,
    email: site.email,
    ...(site.image ? { image: site.image } : {}),
    ...(site.location ? { address: { '@type': 'PostalAddress', addressCountry: site.location } } : {}),
    sameAs: [
      site.links.github,
      site.links.linkedin,
      site.links.portfolio,
    ],
    knowsAbout: site.knowsAbout,
  };
}

export function buildWebSiteJsonLd(site: SiteContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.title,
    url: site.url,
    description: site.description,
    author: {
      '@type': 'Person',
      name: site.title,
      url: site.url,
    },
  };
}

export function buildBlogPostingJsonLd(post: PostMeta, site: SiteContent) {
  const image = post.ogImage ?? post.heroImage;
  const modified = post.updated ?? post.date;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: formatDateISO(post.date),
    dateModified: formatDateISO(modified),
    ...(image ? { image } : {}),
    author: {
      '@type': 'Person',
      name: post.author,
      url: site.url,
    },
    publisher: {
      '@type': 'Person',
      name: site.title,
      url: site.url,
      ...(site.image ? { image: site.image } : {}),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
