'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { siteConfig, socialLinks } from '@/lib/data';
import { SocialIcon } from '@/components/social-icon';

export function SiteFooter() {
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border/60">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                BS
              </span>
              Bhoopendra Singh
            </Link>
            <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
              {siteConfig.title} building fast, accessible web experiences.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-all hover:scale-105 hover:border-primary/40 hover:text-primary"
              >
                <SocialIcon name={s.icon as 'github' | 'linkedin' | 'globe' | 'mail'} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p className="flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Bhoopendra Singh. Built with
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
            using Next.js &amp; Tailwind.
          </p>
          <p className="text-xs">All rights reserved.</p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
