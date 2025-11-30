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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 tracking-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
