'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { siteConfig, socialLinks } from '@/lib/data';
import { SocialIcon } from '@/components/social-icon';
import { MagneticButton } from '@/components/magnetic-button';
import { MeshGradientBackground } from '@/components/mesh-gradient';
import { ScrollIndicator } from '@/components/scroll-indicator';
import { Button } from '@/components/ui/button';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <MeshGradientBackground />

      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Bhoopendra Singh</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl"
          >
            Full-Stack JavaScript Developer specializing in{' '}
            <span className="font-semibold text-foreground">Next.js</span>,{' '}
            <span className="font-semibold text-foreground">React</span>,{' '}
            <span className="font-semibold text-foreground">TypeScript</span>,
            and scalable backend systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton
              href="/#projects"
              className="[&>svg]:ml-1.5"
            >
              <Button
                size="lg"
                className="h-12 w-full rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 text-white shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40 sm:w-auto"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MagneticButton>

            <MagneticButton href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-full border-border/70 bg-background/50 px-8 backdrop-blur-sm transition-colors hover:bg-secondary/60 sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="mt-12 flex items-center justify-center gap-3"
          >
            {socialLinks.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-primary"
              >
                <SocialIcon
                  name={s.icon as 'github' | 'linkedin' | 'globe' | 'mail'}
                />
              </Link>
            ))}
          </motion.div>

          {/* Tech marquee */}
          <motion.div
            variants={item}
            className="mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
          >
            <div className="flex w-max animate-marquee gap-8 text-sm font-medium text-muted-foreground/60">
              {[...techStack, ...techStack].map((t, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'Docker',
  'Git',
];
