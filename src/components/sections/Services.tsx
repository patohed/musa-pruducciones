import FadeIn from '../FadeIn';
import { 
  Lightbulb, 
  Users, 
  Palette, 
  Zap, 
  Utensils, 
  Camera, 
  Megaphone 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services({ client }: { client: 'visible' }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  const services = [
    {
      icon: Lightbulb,
      title: 'Dirección creativa y producción general',
      description: 'Conceptualización integral del evento'
    },
    {
      icon: Users,
      title: 'Booking y coordinación de artistas',
      description: 'Selección y gestión de talentos'
    },
    {
      icon: Palette,
      title: 'Ambientación y escenografía',
      description: 'Diseño espacial y decoración'
    },
    {
      icon: Zap,
      title: 'Técnica (sonido, luces, visuales)',
      description: 'Producción técnica profesional'
    },
    {
      icon: Utensils,
      title: 'Catering y gastronomía',
      description: 'Experiencias culinarias memorables'
    },
    {
      icon: Camera,
      title: 'Registro audiovisual y fotografía',
      description: 'Captura profesional del evento'
    },
    {
      icon: Megaphone,
      title: 'Comunicación y marketing previo',
      description: 'Difusión y promoción estratégica'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="servicios" 
      className="py-24 md:py-32 bg-card/30"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Servicios
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Ofrecemos producción integral <span className="font-serif italic text-primary">"llave en mano"</span> o servicios individuales, 
              adaptándonos a las necesidades de cada cliente.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <motion.div 
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 hover:border-primary/60 transition-all duration-500 h-full overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300 shadow-lg shadow-primary/20"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <service.icon className="h-7 w-7 text-primary drop-shadow-[0_0_8px_rgba(255,159,205,0.6)]" />
                  </motion.div>
                  <h3 className="text-xl font-thin uppercase tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
                </div>
                
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
