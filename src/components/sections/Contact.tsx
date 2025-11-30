import { useState } from 'react';
import FadeIn from '../FadeIn';
import { Mail, Phone, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact({ client }: { client: 'visible' }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola! Mi nombre es ${formData.name}.
    
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de evento: ${formData.eventType}

Mensaje: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5491163761916?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.section 
      ref={ref}
      id="contacto" 
      className="py-24 md:py-32 bg-card/30 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Cotizá tu evento
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Contanos tu idea y te armamos una <span className="font-serif italic text-primary">propuesta a medida</span>.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">Hablemos</h3>
                <p className="text-muted-foreground mb-8 font-light leading-relaxed text-lg">
                  Estamos listos para transformar tu idea en una <span className="font-serif italic text-primary">experiencia inolvidable</span>. 
                  Contactanos por cualquiera de estos medios:
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:musa18producciones@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">musa18producciones@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+5491163761916"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium">+54 9 11 6376-1916</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/musaproducciones_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-medium">@musaproducciones_</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+54 9 11 ..."
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                  Tipo de evento *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="">Seleccionar...</option>
                  <option value="corporativo">Corporativo y de marca</option>
                  <option value="cultural">Cultural y artístico</option>
                  <option value="social">Social y privado</option>
                  <option value="institucional">Institucional</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Contanos tu idea *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Describe tu evento, fecha aproximada, cantidad de invitados..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Enviar consulta por WhatsApp</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </motion.section>
  );
}
