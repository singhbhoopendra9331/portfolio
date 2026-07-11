'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  ...props
}: React.ComponentProps<typeof motion.a> & { strength?: number }) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={cn('inline-flex', className)}
      {...props}
    >
      {children}
    </motion.a>
  );
}
