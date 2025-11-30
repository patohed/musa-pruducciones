import FadeIn from '../FadeIn';
import { Building2, Music, PartyPopper, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Events({ client }: { client: 'visible' }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  const eventTypes = [
    {
      icon: Building2,
      title: 'Corporativos y de marca',
      description: 'Eventos empresariales con identidad y propósito'
    },
    {
      icon: Music,
      title: 'Culturales y artísticos',
      description: 'Festivales, conciertos y experiencias culturales'
    },
    {
      icon: PartyPopper,
      title: 'Sociales y privados',
      description: 'Celebraciones íntimas con sello personal'
    },
    {
      icon: GraduationCap,
      title: 'Institucionales',
      description: 'Ceremonias y eventos formales con excelencia'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="eventos" 
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Tipos de eventos
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-muted-foreground font-light leading-relaxed">
              Desde lo íntimo hasta lo masivo, transformamos cada idea en <span className="text-primary">arte vivo</span>.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {eventTypes.map((event, index) => (
            <FadeIn key={event.title} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 p-8 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <event.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">{event.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{event.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
