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
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop&q=80',
      title: 'Evento Corporativo Premium'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=800&fit=crop&q=80',
      title: 'Producción Musical'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&q=80',
      title: 'Ambientación Elegante'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&h=800&fit=crop&q=80',
      title: 'Celebración Exclusiva'
    },
    {
      type: 'video',
      url: 'https://player.vimeo.com/video/76979871',
      thumbnail: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=800&fit=crop&q=80',
      title: 'Reel Audiovisual'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop&q=80',
      title: 'Behind the Scenes'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div 
                className="group relative overflow-hidden rounded-2xl bg-background border border-primary/25 hover:border-primary/70 transition-all duration-500 aspect-[4/3]"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Neon glow around card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full overflow-hidden rounded-2xl">
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.url}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay with neon effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="p-6 w-full relative z-10">
                      <motion.p 
                        className="text-xl font-thin uppercase tracking-widest text-foreground drop-shadow-[0_0_20px_rgba(255,159,205,0.8)]"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.title}
                      </motion.p>
                      <div className="mt-2 h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent w-0 group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>

                  {/* Video play button with neon */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {/* Neon glow behind button */}
                        <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-60 animate-pulse" />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/50 border-2 border-primary/50">
                          <Play className="h-10 w-10 text-primary-foreground ml-1 drop-shadow-lg" />
                        </div>
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/60 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/60 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
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
