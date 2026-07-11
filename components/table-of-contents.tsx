'use client';

import * as React from 'react';
import type { Heading } from '@/lib/blog';
import { cn } from '@/lib/utils';

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block">
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        On this page
      </h4>
      <ul className="space-y-2 border-l border-border/60">
        {headings.map((h) => (
          <li key={h.slug}>
            <a
              href={`#${h.slug}`}
              className={cn(
                '-ml-px block border-l-2 py-1 text-sm transition-colors',
                h.level === 3 ? 'pl-8' : 'pl-4',
                activeId === h.slug
                  ? 'border-primary font-medium text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
