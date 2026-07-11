'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';
import { aboutContent, timeline } from '@/lib/data';
import { Reveal, Section, SectionHeading } from '@/components/motion-primitives';

export function AboutSection() {
  return (
    <Section id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Engineer. Designer. Problem solver."
          description="I build software that is fast, accessible, and a pleasure to use."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Photo + stats */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60">
                <img
                  src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bhoopendra Singh — Full-Stack JavaScript Developer"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Decorative gradient ring */}
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {aboutContent.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-border/50 bg-card/40 p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Story + philosophy */}
          <div className="space-y-8 lg:col-span-3">
            <Reveal delay={0.15}>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <Sparkles className="h-5 w-5 text-primary" />
                My Story
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutContent.story}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <Code2 className="h-5 w-5 text-accent" />
                Tech Philosophy
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutContent.philosophy}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <Zap className="h-5 w-5 text-primary" />
                What I Enjoy Building
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {aboutContent.enjoyBuilding}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <Reveal className="mt-20" delay={0.1}>
          <h3 className="mb-10 text-center text-2xl font-bold">Journey</h3>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2" />

            <div className="space-y-10">
              {timeline.map((entry, i) => (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0
                      ? 'sm:flex-row-reverse sm:text-right'
                      : 'sm:flex-row'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-primary sm:left-1/2" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content */}
                  <div className="ml-10 flex-1 rounded-xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm sm:ml-0 sm:w-1/2 sm:p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {entry.year}
                    </span>
                    <h4 className="mt-2 text-base font-semibold">
                      {entry.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
