import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

export default function MusaLogo({ className = '', animated = true }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Círculo de fondo con gradiente giratorio */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-xl opacity-40"
        animate={animated ? {
          rotate: 360,
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Contenedor principal del logo */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-background via-card to-background border-2 border-primary/40 overflow-hidden backdrop-blur-sm">
        {/* Resplandor interno */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
        
        {/* Logo SVG moderno */}
        <svg 
          viewBox="0 0 200 200" 
          className="relative z-10 w-full h-full p-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letra M moderna y elegante */}
          <motion.path
            d="M 35 145 L 35 65 L 35 65 Q 35 60 38 58 L 65 105 L 92 58 Q 95 60 95 65 L 95 145"
            stroke="url(#logoGradient1)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animated ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Sombra/profundidad de la M */}
          <motion.path
            d="M 37 145 L 37 65 L 65 105 L 93 65 L 93 145"
            stroke="url(#logoShadow)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animated ? { pathLength: 1, opacity: 0.3 } : { pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.1, ease: "easeInOut" }}
          />
          
          {/* Detalle superior - acento */}
          <motion.path
            d="M 35 65 L 45 65 M 85 65 L 95 65"
            stroke="url(#logoGradient2)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animated ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          />
          
          {/* Ola decorativa mejorada */}
          <motion.path
            d="M 115 105 Q 127 88, 140 105 Q 153 122, 165 105 Q 172 98, 178 105"
            stroke="url(#logoGradient2)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animated ? { 
              pathLength: 1, 
              opacity: [0, 1, 1],
              y: [0, -4, 0]
            } : { pathLength: 1, opacity: 1 }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.8, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Partículas/chispas decorativas */}
          <motion.circle
            cx="130"
            cy="135"
            r="3.5"
            fill="url(#logoGradient3)"
            initial={{ scale: 0, opacity: 0 }}
            animate={animated ? { 
              scale: [0, 1.3, 1],
              opacity: [0, 1, 0.9]
            } : { scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.2, delay: 1.8 }}
          />
          
          <motion.circle
            cx="158"
            cy="128"
            r="2.5"
            fill="url(#logoGradient3)"
            initial={{ scale: 0, opacity: 0 }}
            animate={animated ? { 
              scale: [0, 1.3, 1],
              opacity: [0, 1, 0.8]
            } : { scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 2 }}
          />
          
          <motion.circle
            cx="145"
            cy="80"
            r="2"
            fill="url(#logoGradient3)"
            initial={{ scale: 0, opacity: 0 }}
            animate={animated ? { 
              scale: [0, 1.3, 1],
              opacity: [0, 1, 0.7]
            } : { scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.2, delay: 2.2 }}
          />

          {/* Gradientes mejorados */}
          <defs>
            {/* Gradiente principal para la M */}
            <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(280, 80%, 70%)" />
              <stop offset="50%" stopColor="hsl(280, 70%, 65%)" />
              <stop offset="100%" stopColor="hsl(280, 60%, 55%)" />
            </linearGradient>
            
            {/* Sombra de la M */}
            <linearGradient id="logoShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(280, 60%, 45%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(280, 50%, 35%)" stopOpacity="0.3" />
            </linearGradient>
            
            {/* Gradiente para ola y detalles */}
            <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(280, 75%, 65%)" />
              <stop offset="50%" stopColor="hsl(280, 80%, 70%)" />
              <stop offset="100%" stopColor="hsl(280, 70%, 60%)" />
            </linearGradient>
            
            {/* Gradiente radial para partículas */}
            <radialGradient id="logoGradient3">
              <stop offset="0%" stopColor="hsl(280, 85%, 75%)" stopOpacity="1" />
              <stop offset="50%" stopColor="hsl(280, 75%, 65%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(280, 60%, 50%)" stopOpacity="0.7" />
            </radialGradient>
          </defs>
        </svg>

        {/* Efecto de brillo rotativo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={animated ? {
            x: [-200, 200]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Anillo decorativo exterior */}
      <motion.div
        className="absolute -inset-1 border-2 border-primary/20 rounded-full"
        animate={animated ? {
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
