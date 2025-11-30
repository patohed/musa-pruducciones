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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <AnimatedCard 
              key={pillar.title} 
              delay={index * 0.15}
              variant="interactive"
              className="group"
            >
              <motion.div 
                className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <pillar.icon className="h-10 w-10 text-primary" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight gradient-text">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                {pillar.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
