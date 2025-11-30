import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: 'glass' | 'elevated' | 'interactive';
}

export default function AnimatedCard({ 
  children, 
  delay = 0, 
  className = '',
  variant = 'glass'
}: AnimatedCardProps) {
  const variants = {
    glass: 'glass-card',
    elevated: 'elevated-shadow bg-card',
    interactive: 'card-interactive glass-card'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: variant === 'interactive' ? 1.02 : 1.01,
        transition: { duration: 0.3 }
      }}
      className={`${variants[variant]} rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
