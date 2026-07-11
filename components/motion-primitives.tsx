'use client';

import * as React from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

// Reveal: fades + slides children into view on scroll
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container + item
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// Section wrapper with consistent spacing and id
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-24 py-20 sm:py-28 lg:py-32', className)}
    >
      {children}
    </section>
  );
}

// Section heading with eyebrow label
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn('mx-auto mb-14 max-w-2xl text-center', className)}>
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
