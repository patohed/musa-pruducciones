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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {eventTypes.map((event, index) => (
            <FadeIn key={event.title} delay={index * 0.15}>
              <motion.div 
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/90 to-card/60 border border-primary/30 hover:border-primary/80 transition-all duration-500 p-10"
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Multiple neon glows */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/15 rounded-full blur-[60px] group-hover:bg-secondary/30 transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-secondary/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Border glow animation */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary animate-gradient" style={{ backgroundSize: '200% 100%' }} />
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25 group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-300 shadow-2xl shadow-primary/30"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <event.icon className="h-10 w-10 text-primary drop-shadow-[0_0_12px_rgba(255,159,205,0.8)]" />
                  </motion.div>
                  <h3 className="text-2xl font-thin uppercase tracking-widest mb-4 text-foreground group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_20px_rgba(255,159,205,0.4)]">
                    {event.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed tracking-wide">{event.description}</p>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
