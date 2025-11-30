import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MusaLogoOfficial from '../MusaLogoOfficial';

export default function Hero({ client }: { client: 'load' }) {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradiente animado con mesh */}
      <div className="absolute inset-0 gradient-mesh animate-gradient" />
      
      {/* Formas ondulares animadas */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {/* Blob 1 */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/40 to-secondary/40 blur-3xl animate-morph"
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        />
        {/* Blob 2 */}
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/40 to-primary/40 blur-3xl animate-morph"
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, 100]),
            animationDelay: '2s' 
          }}
        />
        {/* Blob 3 */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-float"
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, 50]),
            animationDelay: '1s' 
          }}
        />
      </div>
      
      {/* Ondas decorativas */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full h-64 animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(280, 70%, 65%)" />
              <stop offset="100%" stopColor="hsl(280, 50%, 45%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content con parallax */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-4 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo SVG animado moderno */}
          <motion.div
            className="mb-12 inline-block relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Anillos decorativos giratorios */}
            <motion.div 
              className="absolute -inset-12 border-2 border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -inset-16 border border-secondary/15 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Resplandor pulsante */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Logo oficial con animaciones */}
            <div className="relative">
              <MusaLogoOfficial width={200} height={250} />
            </div>
            
            {/* Partículas orbitales */}
            <motion.div
              className="absolute top-0 right-4 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-4 left-0 w-2 h-2 bg-secondary rounded-full shadow-lg shadow-secondary/50"
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              PRODUCTORA
            </span>
            <span className="block bg-gradient-to-r from-secondary via-primary to-foreground bg-clip-text text-transparent mt-2">
              INTEGRAL
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium italic text-transparent bg-gradient-to-r from-primary/90 via-primary to-secondary/90 bg-clip-text mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Artística y Eventos
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 max-w-3xl mx-auto mb-12 font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Creamos, diseñamos y producimos experiencias memorables
          </motion.p>

          <motion.a
            href="#nosotros"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Conocer más</span>
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
