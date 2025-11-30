import { motion } from 'framer-motion';

interface LogoMinimalProps {
  className?: string;
  showText?: boolean;
}

export default function MusaLogoMinimal({ className = '', showText = false }: LogoMinimalProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Símbolo del logo */}
      <div className="relative w-12 h-12">
        {/* Resplandor de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-lg animate-pulse" />
        
        {/* Contenedor con efecto glass */}
        <motion.div
          className="relative w-full h-full rounded-2xl bg-gradient-to-br from-card/80 to-background/80 backdrop-blur-sm border border-primary/30 overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full p-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* M minimalista con ola */}
            <path
              d="M 15 70 L 15 30 L 30 50 L 45 30 L 45 70"
              stroke="url(#minimalGradient1)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Ola decorativa */}
            <path
              d="M 55 50 Q 65 40, 75 50 Q 85 60, 95 50"
              stroke="url(#minimalGradient2)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="animate-wave"
            />
            
            <defs>
              <linearGradient id="minimalGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(280, 70%, 65%)" />
                <stop offset="100%" stopColor="hsl(280, 50%, 55%)" />
              </linearGradient>
              
              <linearGradient id="minimalGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(280, 60%, 60%)" />
                <stop offset="100%" stopColor="hsl(280, 50%, 50%)" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Partícula decorativa */}
          <motion.div
            className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Texto del logo (opcional) */}
      {showText && (
        <div className="flex flex-col">
          <motion.span 
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            MUSA
          </motion.span>
          <motion.span 
            className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Producciones
          </motion.span>
        </div>
      )}
    </div>
  );
}
