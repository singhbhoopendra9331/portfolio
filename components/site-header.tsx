'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems, siteConfig } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/50 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-base font-bold tracking-tight"
          aria-label="Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-lg transition-transform group-hover:scale-105">
            BS
          </span>
          <span className="hidden sm:inline">
            Bhoopendra<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href.split('#')[0]) &&
                  item.href !== '/';
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.title}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-primary to-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 sm:inline-flex"
          >
            <Link href="/#contact">Let&apos;s talk</Link>
          </Button>

          {/* Mobile menu trigger */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-sm md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2 px-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-white"
                >
                  <Link href="/#contact">Let&apos;s talk</Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
