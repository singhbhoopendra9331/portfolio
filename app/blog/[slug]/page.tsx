import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

import { getAllPosts, getPostBySlug, getHeadingsFromContent } from '@/lib/blog';
import { getSiteContent } from '@/lib/site-content';
import {
  buildPostMetadata,
  buildBlogPostingJsonLd,
  buildBreadcrumbJsonLd,
} from '@/lib/seo';
import { formatDate } from '@/lib/format';
import { PageTransition } from '@/components/page-transition';
import { TableOfContents } from '@/components/table-of-contents';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-static';
export const dynamicParams = false;

const site = getSiteContent();

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return buildPostMetadata(post, site.url, site.title);
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const headings = getHeadingsFromContent(post.content);
  const image = post.ogImage ?? post.heroImage;

  const blogPostingJsonLd = buildBlogPostingJsonLd(post, site);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: site.url },
    { name: 'Blog', url: `${site.url}/blog` },
    { name: post.title, url: `${site.url}/blog/${post.slug}` },
  ]);

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="container py-28 sm:py-32">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <header className="mx-auto mb-12 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full border border-border/40 bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {image && (
          <div className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl border border-border/50">
            <img
              src={image}
              alt={post.title}
              className="aspect-video w-full object-cover"
              loading="eager"
            />
          </div>
        )}

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_220px]">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeHighlight],
                },
              }}
            />
          </div>

          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border/50 bg-card/40 p-8 text-center backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Enjoyed this post?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Let me know what you think or suggest a topic for next time.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full">
              <Link href="/#contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog">More articles</Link>
            </Button>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
