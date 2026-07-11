import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { getSiteContent } from '@/lib/site-content';
import { buildMetadata } from '@/lib/seo';
import { PageTransition } from '@/components/page-transition';
import { formatDate } from '@/lib/format';

const site = getSiteContent();

export const metadata: Metadata = buildMetadata(
  {
    title: 'Blog',
    description:
      'Articles on Next.js, React, TypeScript, full-stack architecture, and web performance by Bhoopendra Singh.',
    path: '/blog',
    keywords: [
      'Next.js blog',
      'React tutorials',
      'TypeScript',
      'full-stack development',
      'web performance',
      'Bhoopendra Singh',
    ],
  },
  site.url,
  site.title
);

export const dynamic = 'force-static';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageTransition>
      <div className="container py-28 sm:py-32">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Writing
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts on full-stack JavaScript, performance, and building for
            the web.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="mx-auto max-w-3xl space-y-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
                style={{
                  animation: `fade-up 0.5s ease-out ${i * 0.08}s both`,
                }}
              >
                <article className="overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-8">
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

                  <h2 className="mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {post.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
