import { useState } from 'react';
import FadeIn from '../FadeIn';
import { Mail, Phone, Instagram, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Enviar por email usando SendGrid
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          message: ''
        });
        
        // Después de 3 segundos, también abrir WhatsApp
        setTimeout(() => {
          const whatsappMessage = `Hola! Mi nombre es ${formData.name}.
    
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de evento: ${formData.eventType}

Mensaje: ${formData.message}`;
          
          const whatsappUrl = `https://wa.me/5491163761916?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappUrl, '_blank');
        }, 1500);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor, intenta nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                <motion.a 
                  href="mailto:musa18producciones@gmail.com"
                  className="relative flex items-center space-x-4 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/25 hover:border-primary/60 transition-all duration-300 group overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <motion.div 
                    className="relative p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/40 group-hover:to-secondary/40 transition-colors shadow-lg shadow-primary/20"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Mail className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(255,159,205,0.6)]" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-thin">Email</p>
                    <p className="font-light tracking-wide">musa18producciones@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+5491163761916"
                  className="relative flex items-center space-x-4 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/25 hover:border-primary/60 transition-all duration-300 group overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <motion.div 
                    className="relative p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/40 group-hover:to-secondary/40 transition-colors shadow-lg shadow-primary/20"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Phone className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(255,159,205,0.6)]" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-thin">WhatsApp</p>
                    <p className="font-light tracking-wide">+54 9 11 6376-1916</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://instagram.com/musaproducciones_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center space-x-4 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/25 hover:border-primary/60 transition-all duration-300 group overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <motion.div 
                    className="relative p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/40 group-hover:to-secondary/40 transition-colors shadow-lg shadow-primary/20"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Instagram className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(255,159,205,0.6)]" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-thin">Instagram</p>
                    <p className="font-light tracking-wide">@musaproducciones_</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/60 to-card/30 border border-primary/20 overflow-hidden">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-30" />
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest font-thin mb-3">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-background/80 border border-primary/25 focus:border-primary/70 focus:outline-none focus:shadow-[0_0_20px_rgba(255,159,205,0.3)] transition-all duration-300 font-light"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-thin mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-background/80 border border-primary/25 focus:border-primary/70 focus:outline-none focus:shadow-[0_0_20px_rgba(255,159,205,0.3)] transition-all duration-300 font-light"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-thin mb-3">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-background/80 border border-primary/25 focus:border-primary/70 focus:outline-none focus:shadow-[0_0_20px_rgba(255,159,205,0.3)] transition-all duration-300 font-light"
                  placeholder="+54 9 11 ..."
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-xs uppercase tracking-widest font-thin mb-3">
                  Tipo de evento *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-background/80 border border-primary/25 focus:border-primary/70 focus:outline-none focus:shadow-[0_0_20px_rgba(255,159,205,0.3)] transition-all duration-300 font-light"
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
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-thin mb-3">
                  Contanos tu idea *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-background/80 border border-primary/25 focus:border-primary/70 focus:outline-none focus:shadow-[0_0_20px_rgba(255,159,205,0.3)] transition-all duration-300 resize-none font-light"
                  placeholder="Describe tu evento, fecha aproximada, cantidad de invitados..."
                />
              </div>

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">¡Mensaje enviado correctamente!</p>
                      <p className="text-sm opacity-80">Te redirigiremos a WhatsApp en un momento...</p>
                    </div>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Error al enviar</p>
                      <p className="text-sm opacity-80">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-5 px-8 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-primary-foreground rounded-xl font-thin uppercase tracking-widest text-sm shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-500 flex items-center justify-center gap-3 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.03, backgroundPosition: "100% 0" } : {}}
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                animate={!isSubmitting ? { backgroundPosition: ["0% 0", "100% 0", "0% 0"] } : {}}
                transition={{ 
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { type: "spring", stiffness: 400 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">
                  {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                </span>
                {isSubmitting ? (
                  <Loader2 className="relative z-10 h-5 w-5 animate-spin" />
                ) : (
                  <Send className="relative z-10 h-5 w-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform" />
                )}
              </motion.button>
              
              <p className="text-center text-xs text-muted-foreground mt-4">
                Al enviar, recibiremos tu consulta por email y también podrás contactarnos por WhatsApp
              </p>
            </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </motion.section>
  );
}
