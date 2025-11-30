import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export default function GradientText({ 
  children, 
  className = '',
  animated = true 
}: GradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${animated ? 'gradient-text' : ''} bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-display font-bold ${className}`}
    >
      {children}
    </motion.span>
  );
}
