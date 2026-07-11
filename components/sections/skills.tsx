'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Blocks,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/lib/data';
import { Section, SectionHeading, Reveal, Stagger, StaggerItem } from '@/components/motion-primitives';

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  blocks: Blocks,
};

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-background-secondary/30">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A full-stack toolkit honed across production projects."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Blocks;
            const colorClass =
              cat.color === 'accent'
                ? 'from-accent/20 to-accent/5 text-accent'
                : 'from-primary/20 to-primary/5 text-primary';

            return (
              <StaggerItem key={cat.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
                >
                  {/* Glow on hover */}
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${colorClass} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorClass}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mb-4 text-lg font-semibold">{cat.title}</h3>

                    <ul className="space-y-3">
                      {cat.skills.map((skill, i) => (
                        <li key={skill.name}>
                          <div className="mb-1.5 flex items-center justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: 0.1 + i * 0.05,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className={`h-full rounded-full ${
                                cat.color === 'accent'
                                  ? 'bg-gradient-to-r from-accent to-accent/70'
                                  : 'bg-gradient-to-r from-primary to-primary/70'
                              }`}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Tech badges */}
        <Reveal className="mt-14" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {allTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/50 bg-card/40 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const allTech = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'Docker',
  'Git',
  'Cloudinary',
  'REST APIs',
];
