import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTransition({ 
  children, 
  className = ''
}: SectionTransitionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: '-80px 0px',
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { 
        opacity: 1,
      } : {
        opacity: 0,
      }}
      transition={{ 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
