import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import MusaLogoOfficial from './MusaLogoOfficial';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('#inicio');
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(20, 20, 20, 0)', 'rgba(20, 20, 20, 0.95)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    [0, 16]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Detectar sección activa
    const sections = navItems.map(item => document.querySelector(item.href));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <motion.header 
      style={{
        backgroundColor: headerBackground,
        backdropFilter: `blur(${headerBlur}px)`,
        WebkitBackdropFilter: `blur(${headerBlur}px)`,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "shadow-lg shadow-primary/5 border-b border-white/5" : "border-b border-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo oficial - responsive */}
          <a href="#inicio" className="group">
            {/* Mobile: 70x52 */}
            <div className="block sm:hidden">
              <MusaLogoOfficial width={70} height={52} />
            </div>
            {/* Tablet: 100x75 */}
            <div className="hidden sm:block md:hidden">
              <MusaLogoOfficial width={100} height={75} />
            </div>
            {/* Desktop: 120x90 */}
            <div className="hidden md:block">
              <MusaLogoOfficial width={120} height={90} />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-4 py-2 text-sm font-thin uppercase tracking-widest transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Neon glow background on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isHovered || isActive ? 1 : 0,
                      scale: isHovered || isActive ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Outer glow */}
                  {(isHovered || isActive) && (
                    <motion.div
                      className="absolute -inset-1 rounded-lg bg-primary/30 blur-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Text */}
                  <span 
                    className={cn(
                      "relative z-10 transition-all duration-300",
                      isActive 
                        ? "text-primary drop-shadow-[0_0_8px_rgba(255,159,205,0.8)]" 
                        : isHovered
                        ? "text-primary drop-shadow-[0_0_6px_rgba(255,159,205,0.6)]"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                  
                  {/* Bottom line */}
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: isHovered || isActive ? 1 : 0,
                      opacity: isHovered || isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                  
                  {/* Floating particles on hover */}
                  {isHovered && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          style={{
                            left: `${25 + i * 25}%`,
                            top: '50%',
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl overflow-hidden"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Neon background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl"
              animate={{
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Outer glow */}
            <motion.div
              className="absolute -inset-1 bg-primary/30 rounded-xl blur-lg"
              animate={{
                opacity: isOpen ? 0.6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(255,159,205,0.8)]" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 px-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="relative block px-5 py-4 text-sm font-thin uppercase tracking-widest rounded-xl overflow-hidden"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{
                    x: isOpen ? 0 : -50,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active state background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                      layoutId="mobileActiveTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-primary/20 rounded-xl blur-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Text */}
                  <span
                    className={cn(
                      "relative z-10 transition-all duration-200",
                      isActive 
                        ? "text-primary drop-shadow-[0_0_8px_rgba(255,159,205,0.8)]" 
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                  
                  {/* Right indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
