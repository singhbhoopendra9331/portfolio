import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  published: boolean;
  heroImage?: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: string;
  content: string;
};

export type PostListItem = Omit<PostMeta, 'content'>;

function ensurePostsDir() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
}

export function getAllPosts(): PostListItem[] {
  ensurePostsDir();
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    const fm = data as PostFrontmatter;
    const stats = readingTime(content);
    return {
      slug,
      title: fm.title,
      description: fm.description,
      date: fm.date,
      tags: fm.tags ?? [],
      author: fm.author ?? 'Bhoopendra Singh',
      published: fm.published ?? true,
      heroImage: fm.heroImage,
      readingTime: stats.text,
    };
  });

  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostMeta | null {
  ensurePostsDir();
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  const stats = readingTime(content);

  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    tags: fm.tags ?? [],
    author: fm.author ?? 'Bhoopendra Singh',
    published: fm.published ?? true,
    heroImage: fm.heroImage,
    readingTime: stats.text,
    content,
  };
}

export type Heading = {
  level: number;
  text: string;
  slug: string;
};

export function getHeadingsFromContent(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    headings.push({ level, text, slug });
  }
  return headings;
}
