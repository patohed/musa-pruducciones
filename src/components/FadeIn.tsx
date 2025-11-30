import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
  once?: boolean;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  duration = 0.8,
  once = false
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.15,
    rootMargin: '-50px 0px',
  });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {
        opacity: 0,
        ...directions[direction]
      }}
      exit={{
        opacity: 0,
        ...directions[direction]
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: duration * 0.8 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
