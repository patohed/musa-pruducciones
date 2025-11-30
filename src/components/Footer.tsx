import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo oficial y frase */}
          <div className="space-y-4">
            <img 
              src="/logo-musa.svg" 
              alt="Musa Producciones" 
              className="h-20 w-auto"
            />
            <p className="text-xl font-serif italic text-primary/90 leading-relaxed">
              Creamos experiencias que se viven.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold tracking-tight">Contacto</h3>
            <div className="space-y-3 text-muted-foreground">
              <a 
                href="mailto:musa18producciones@gmail.com" 
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">musa18producciones@gmail.com</span>
              </a>
              <a 
                href="tel:+5491163761916" 
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+54 9 11 6376-1916</span>
              </a>
              <a 
                href="https://instagram.com/musaproducciones_" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@musaproducciones_</span>
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold tracking-tight">Ubicación</h3>
            <div className="flex items-start space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-1" />
              <span className="text-sm">CABA · GBA · Producción nacional</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Musa Producciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
