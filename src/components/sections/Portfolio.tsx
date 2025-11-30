import FadeIn from '../FadeIn';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Portfolio({ client }: { client: 'visible' }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  // Imágenes de muestra - reemplazar con las reales del cliente
  const portfolioItems = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop',
      title: 'Evento Corporativo'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
      title: 'Festival Musical'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
      title: 'Ambientación Premium'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c898?w=1200&h=800&fit=crop',
      title: 'Evento Social'
    },
    {
      type: 'video',
      url: 'https://player.vimeo.com/video/76979871',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      title: 'Reel Institucional'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop',
      title: 'Backstage'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="portfolio" 
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Una muestra de <span className="font-serif italic text-primary">ambientaciones y producciones</span> que reflejan nuestra estética y calidad.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 aspect-[4/3]">
                <img 
                  src={item.type === 'video' ? item.thumbnail : item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-lg font-semibold">{item.title}</p>
                  </div>
                </div>

                {/* Video play button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.8}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              *Imágenes de referencia. Portfolio completo disponible bajo consulta.
            </p>
          </div>
        </FadeIn>
      </div>
    </motion.section>
  );
}
