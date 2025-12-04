import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'particles' | 'glow' | 'gradient';
}

export default function SectionDivider({ variant = 'wave' }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  if (variant === 'wave') {
    return (
      <motion.div 
        ref={ref}
        className="relative h-32 md:h-40 overflow-hidden"
        style={{ opacity, y }}
      >
        {/* Multiple animated waves */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale }}
        >
          <svg 
            viewBox="0 0 1200 120" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            {/* First wave */}
            <motion.path
              d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient1)"
              initial={{ d: "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" }}
              animate={{ 
                d: [
                  "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
                  "M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z",
                  "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Second wave */}
            <motion.path
              d="M0,80 Q300,60 600,80 T1200,80 L1200,120 L0,120 Z"
              fill="url(#waveGradient2)"
              initial={{ d: "M0,80 Q300,60 600,80 T1200,80 L1200,120 L0,120 Z" }}
              animate={{ 
                d: [
                  "M0,80 Q300,60 600,80 T1200,80 L1200,120 L0,120 Z",
                  "M0,80 Q300,110 600,80 T1200,80 L1200,120 L0,120 Z",
                  "M0,80 Q300,60 600,80 T1200,80 L1200,120 L0,120 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(330, 100%, 81%)" stopOpacity="0.15" />
                <stop offset="50%" stopColor="hsl(330, 100%, 81%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(330, 75%, 65%)" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(330, 75%, 65%)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="hsl(330, 75%, 65%)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(330, 100%, 81%)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl"
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: '50%',
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    );
  }

  if (variant === 'particles') {
    return (
      <motion.div 
        ref={ref}
        className="relative h-32 md:h-40 overflow-hidden"
        style={{ opacity }}
      >
        {/* Large floating particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${(i / 15) * 100}%`,
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, hsl(330, 100%, 81%), transparent)' 
                  : 'radial-gradient(circle, hsl(330, 75%, 65%), transparent)',
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 2, 0.5],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Connection lines between particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute top-1/2 h-[1px]"
            style={{
              left: `${i * 20}%`,
              width: '20%',
              background: 'linear-gradient(90deg, transparent, hsl(330, 100%, 81%, 0.3), transparent)',
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Gradient background pulse */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    );
  }

  if (variant === 'glow') {
    return (
      <motion.div 
        ref={ref}
        className="relative h-32 md:h-40 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ scale, y }}
        >
          {/* Multiple horizontal glow lines */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              opacity: [0.5, 1, 0.5],
              scaleX: [0.8, 1, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-[45%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="absolute top-[55%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Multiple pulsating glows */}
          <motion.div
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-40 h-40 bg-primary/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0.8, 0.4],
              x: [-20, 20, -20]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-40 h-40 bg-secondary/40 rounded-full blur-3xl"
            animate={{
              scale: [1.8, 1, 1.8],
              opacity: [0.8, 0.4, 0.8],
              x: [20, -20, 20]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Orbiting small glows */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full"
              style={{
                x: -6,
                y: -6,
              }}
              animate={{
                rotate: 360,
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              transformTemplate={({ rotate }) => 
                `rotate(${rotate}) translateX(${80 + i * 15}px)`
              }
            />
          ))}
        </motion.div>
      </motion.div>
    );
  }

  if (variant === 'gradient') {
    return (
      <motion.div 
        ref={ref}
        className="relative h-32 md:h-40 overflow-hidden"
        style={{ opacity }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            scale,
            background: 'linear-gradient(90deg, transparent, hsl(330, 100%, 81%, 0.2), transparent)'
          }}
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Secondary gradient sweep */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(90deg, transparent, hsl(330, 75%, 65%, 0.15), transparent)'
          }}
          animate={{
            x: ['100%', '-100%']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Diagonal animated lines */}
        <div className="absolute inset-0 flex items-center justify-around">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[2px] bg-gradient-to-b from-transparent via-primary/40 to-transparent"
              style={{ 
                transform: `skewX(-20deg)`,
                height: '100%'
              }}
              animate={{
                opacity: [0.2, 0.9, 0.2],
                scaleY: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Horizontal scanline */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
          animate={{
            top: ['0%', '100%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Pulsating dots along the lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${10 + i * 9}%`,
              top: '50%',
            }}
            animate={{
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    );
  }

  return null;
}
