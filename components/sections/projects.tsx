'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { projects } from '@/lib/data';
import { Section, SectionHeading, Reveal, Stagger, StaggerItem } from '@/components/motion-primitives';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Production work, open source, and experiments."
        />

        {/* Featured project */}
        {featured && (
          <Reveal delay={0.1}>
            <FeaturedProjectCard project={featured} />
          </Reveal>
        )}

        {/* Grid of other projects */}
        {rest.length > 0 && (
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        )}

        {/* View all */}
        <Reveal className="mt-12 text-center" delay={0.1}>
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href="https://github.com/singhbhoopendra9331"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View all on GitHub
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

function FeaturedProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative grid overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm lg:grid-cols-2"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden lg:aspect-auto">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent lg:bg-gradient-to-r" />

        {/* Featured badge */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          <Star className="h-3 w-3 fill-accent text-accent" />
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {project.longDescription ?? project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/50 bg-secondary/60 px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-full bg-gradient-to-r from-primary to-primary/90 text-white">
            <Link
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Repository
            </Link>
          </Button>
          {project.liveUrl && (
            <Button asChild variant="outline" className="rounded-full">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm transition-colors hover:border-primary/30"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
