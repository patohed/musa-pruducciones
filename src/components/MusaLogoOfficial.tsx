import { motion } from 'framer-motion';

interface MusaLogoOfficialProps {
  width?: number;
  height?: number;
  showText?: boolean;
  className?: string;
}

export default function MusaLogoOfficial({ 
  width = 120, 
  height = 150,
  showText = true,
  className = '' 
}: MusaLogoOfficialProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        src="/logo-musa.svg" 
        alt="Musa Producciones" 
        width={width}
        height={height}
        className="object-contain"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
}
