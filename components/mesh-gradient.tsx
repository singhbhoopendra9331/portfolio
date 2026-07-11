'use client';

import { motion } from 'framer-motion';

// Abstract animated mesh gradient for hero backgrounds
export function MeshGradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-32 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
