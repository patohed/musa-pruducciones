import FadeIn from '../FadeIn';
import { Sparkles, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../SectionTitle';
import AnimatedCard from '../AnimatedCard';

export default function About({ client }: { client: 'visible' }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  const pillars = [
    {
      icon: Sparkles,
      title: 'Creatividad curada',
      description: 'Cada detalle pensado con propósito artístico'
    },
    {
      icon: Eye,
      title: 'Consciencia estética',
      description: 'Belleza visual en cada elemento'
    },
    {
      icon: Heart,
      title: 'Conexión real',
      description: 'Experiencias que tocan y transforman'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="nosotros" 
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionTitle 
          title="Quiénes somos"
          subtitle="En Musa Producciones creemos que cada evento puede transformarse en una experiencia artística"
        />
        
        <FadeIn>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Somos una productora integral con enfoque innovador y moderno, que combina{' '}
              <span className="text-primary font-medium">creatividad</span>,{' '}
              <span className="text-primary font-medium">estética</span> y{' '}
              <span className="text-primary font-medium">profesionalismo</span> para crear vivencias memorables.
            </p>
          </motion.div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.15}>
              <motion.div
                className="group relative p-10 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/25 hover:border-primary/70 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                {/* Animated neon background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
                
                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-8 inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:from-primary/60 group-hover:to-secondary/60 transition-all duration-300 shadow-2xl shadow-primary/40"
                    whileHover={{ 
                      rotate: [0, -15, 15, -10, 10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <pillar.icon className="h-12 w-12 text-primary drop-shadow-[0_0_15px_rgba(255,159,205,1)]" />
                  </motion.div>
                  <h3 className="text-3xl font-thin uppercase tracking-widest mb-5 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:via-secondary group-hover:to-primary transition-all duration-500 drop-shadow-[0_0_30px_rgba(255,159,205,0.5)]">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg tracking-wide">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Animated border shimmer */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-gradient" style={{ backgroundSize: '200% 100%' }} />
                </div>
                
                {/* Corner highlights */}
                <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
