'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Loader2, Mail, MapPin } from 'lucide-react';
import { siteConfig, socialLinks } from '@/lib/data';
import { Section, SectionHeading, Reveal } from '@/components/motion-primitives';
import { SocialIcon } from '@/components/social-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Status = 'idle' | 'loading' | 'success';

export function ContactSection() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    // Simulated submission — static site friendly
    setTimeout(() => setStatus('success'), 1200);
  }

  function reset() {
    setForm({ name: '', email: '', message: '' });
    setStatus('idle');
  }

  return (
    <Section id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <Reveal className="space-y-8" delay={0.1}>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Get in touch</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;m currently available for freelance work and full-time
                opportunities. Whether you have a question, a project, or just
                want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={siteConfig.links.email}
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/40 p-4 backdrop-blur-sm transition-colors hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="text-sm font-medium group-hover:text-primary">
                    {siteConfig.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/40 p-4 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Location
                  </div>
                  <div className="text-sm font-medium">{siteConfig.location}</div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <div className="mb-3 text-sm font-medium text-muted-foreground">
                Find me online
              </div>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
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
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-white"
                    >
                      <Check className="h-8 w-8" />
                    </motion.div>
                    <h3 className="mt-6 text-xl font-semibold">Message sent!</h3>
                    <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                      Thanks for reaching out. I&apos;ll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={reset}
                    >
                      Send another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="bg-background/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className="bg-background/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        placeholder="Tell me about your project..."
                        className="resize-none bg-background/60"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full rounded-full bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/20"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
