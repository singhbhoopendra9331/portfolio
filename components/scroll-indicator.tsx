'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      aria-hidden
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Scroll
      </span>
      <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border/70 p-1">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-primary"
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <ChevronDown className="h-3 w-3 text-muted-foreground" />
    </motion.div>
  );
}
