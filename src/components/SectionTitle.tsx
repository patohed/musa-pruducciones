import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}: SectionTitleProps) {
  return (
    <div className={`space-y-4 mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
          <span className="gradient-text">
            {title}
          </span>
        </h2>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
      
      {/* Línea decorativa */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
