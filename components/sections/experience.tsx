'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/lib/data';
import { Section, SectionHeading, Reveal } from '@/components/motion-primitives';

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-background-secondary/30">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="A track record of building and shipping across the stack."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.role}-${exp.period}`} delay={0.1 + i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative ml-16 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
                >
                  {/* Node */}
                  <div className="absolute -left-[42px] flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
