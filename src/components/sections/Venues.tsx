import FadeIn from '../FadeIn';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Venues({ client }: { client: 'visible' }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  const venues = [
    {
      name: 'Hipódromo de Palermo',
      location: 'CABA',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c898?w=800&h=600&fit=crop'
    },
    {
      name: 'Hipódromo de La Plata',
      location: 'La Plata, Buenos Aires',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
    },
    {
      name: 'Hotel Howard Johnson La Plata',
      location: 'La Plata, Buenos Aires',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="espacios" 
      className="py-24 md:py-32 bg-card/30"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Espacios y alianzas
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Trabajamos junto a <span className="font-serif italic text-primary">locaciones aliadas</span> para potenciar la experiencia de cada producción.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {venues.map((venue, index) => (
            <FadeIn key={venue.name} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 tracking-tight">{venue.name}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm font-light">{venue.location}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-center text-muted-foreground italic">
            También producimos en otros espacios a pedido del cliente.
          </p>
        </FadeIn>
      </div>
    </motion.section>
  );
}
