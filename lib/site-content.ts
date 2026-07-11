import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const SITE_MDX = path.join(process.cwd(), 'content', 'site.mdx');

export type SiteFrontmatter = {
  title: string;
  tagline: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords: string[];
  email: string;
  url: string;
  image?: string;
  location?: string;
  available?: boolean;
  links: {
    portfolio: string;
    github: string;
    linkedin: string;
  };
  knowsAbout: string[];
  featuredProject?: {
    title: string;
    description: string;
    repository: string;
    tags: string[];
  };
};

export type SiteContent = SiteFrontmatter & {
  content: string;
};

export function getSiteContent(): SiteContent {
  const raw = fs.readFileSync(SITE_MDX, 'utf8');
  const { data, content } = matter(raw);
  const fm = data as SiteFrontmatter;

  return {
    ...fm,
    content,
  };
}
