'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [visible, setVisible] = React.useState(false);

  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.3 });

  React.useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 hidden h-[400px] w-[400px] rounded-full opacity-0 blur-[100px] md:block"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--accent) / 0.05) 40%, transparent 70%)',
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
