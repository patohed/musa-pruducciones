import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollProgressBarProps {
  color?: string;
}

export default function ScrollProgressBar({ color = 'hsl(330, 100%, 81%)' }: ScrollProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          background: `linear-gradient(90deg, ${color}, hsl(330, 75%, 65%))`,
          scaleX: scrollProgress / 100,
          boxShadow: `0 0 20px ${color}`,
        }}
        initial={{ scaleX: 0 }}
      />

      {/* Floating particles that follow scroll */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${scrollProgress}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  );
}
