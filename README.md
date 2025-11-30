# MUSA PRODUCCIONES - Landing Page

Landing page moderna y estética para Musa Producciones, una productora integral de experiencias artísticas y eventos.

## ✨ Características

- **Diseño profesional**: Sistema de diseño completo con paleta rosa + negro inspirada en el logo oficial
- **Animaciones premium**: Framer Motion con efectos glassmorphism, microinteracciones y resplandor
- **Componentes reutilizables**: AnimatedCard, GradientText, SectionTitle con variants profesionales
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Performance optimizado**: Construido con Astro para máxima velocidad
- **Logo oficial integrado**: Logo "Musa" en rosa con animaciones sutiles
- **Configuración Figma**: MCP integrado para diseño profesional

## 🎨 Tecnologías

- **Astro** - Framework web moderno
- **React** - Componentes interactivos
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **TypeScript** - Type safety
- **Lucide React** - Iconos modernos

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando            | Acción                                          |
| :----------------- | :---------------------------------------------- |
| `npm install`      | Instala las dependencias                        |
| `npm run dev`      | Inicia servidor local en `localhost:4321`       |
| `npm run build`    | Construye el sitio para producción en `./dist/` |
| `npm run preview`  | Previsualiza el build localmente                |

## 📝 Estructura del Proyecto

```
/
├── public/
│   └── mindsett logo-03.png    # Logo de Musa Producciones
├── src/
│   ├── components/
│   │   ├── sections/           # Secciones de la landing
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── Venues.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx          # Navegación
│   │   ├── Footer.tsx          # Pie de página
│   │   └── FadeIn.tsx          # Componente de animación
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal
│   ├── lib/
│   │   └── utils.ts            # Utilidades
│   ├── pages/
│   │   └── index.astro         # Página principal
│   └── styles/
│       └── global.css          # Estilos globales
└── package.json
```

## 🎯 Secciones de la Landing

1. **Hero** - Presentación principal con logo y frase distintiva
2. **Nosotros** - Quiénes somos y nuestros pilares
3. **Servicios** - Servicios integrales que ofrecemos
4. **Eventos** - Tipos de eventos que producimos
5. **Espacios** - Locaciones aliadas
6. **Portfolio** - Galería de trabajos (imágenes de muestra)
7. **Contacto** - Formulario que envía a WhatsApp

## 🎨 Paleta de Colores

- **Background**: Negro profundo (#0F0F0F)
- **Primary**: Rosa del logo oficial (#FF9FCD - hsl(330, 100%, 81%))
- **Card**: Negro con tinte rosa (#1A1316)
- **Efectos**: Glassmorphism con resplandor rosa
- **Tipografía**: Poppins (principal), Cormorant Garamond (elegante), Montserrat (complementaria)

## 📱 Contacto

- **Email**: musa18producciones@gmail.com
- **WhatsApp**: +54 9 11 6376-1916
- **Instagram**: [@musaproducciones_](https://instagram.com/musaproducciones_)

## 📝 Notas Importantes

- **Logo oficial**: Se utiliza `Logo musa-01.svg` con color rosa #FF9FCD
- **Sistema de diseño**: Paleta unificada rosa + negro en todo el sitio
- **Componentes profesionales**: Glassmorphism, gradientes animados, sombras elevadas
- Las imágenes del portfolio son de muestra de Unsplash. Reemplazalas con tus fotos reales.
- El formulario de contacto envía automáticamente a WhatsApp con los datos completados.
- Puedes actualizar los colores editando las variables CSS en `src/styles/global.css`
- Para agregar más espacios/alianzas, edita el array `venues` en `src/components/sections/Venues.tsx`

## 🎨 Componentes de Diseño Profesional

- **AnimatedCard**: Card con 3 variants (glass, elevated, interactive)
- **GradientText**: Texto con gradiente rosa animado
- **SectionTitle**: Títulos de sección con línea decorativa
- **MusaLogoOfficial**: Logo oficial con animaciones Framer Motion

## 🚀 Despliegue en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel:

### Pasos para Desplegar:

1. **Crear cuenta en Vercel** (si no tienes una):
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Importar el Proyecto**:
   - Click en "Add New Project"
   - Selecciona el repositorio: `patohed/musa-pruducciones`
   - Vercel detectará automáticamente que es un proyecto Astro

3. **Configuración Automática**:
   - Framework Preset: Astro (detectado automáticamente)
   - Build Command: `npm run build` (ya configurado)
   - Output Directory: `dist` (ya configurado)
   - Install Command: `npm install` (ya configurado)

4. **Deploy**:
   - Click en "Deploy"
   - Espera unos minutos mientras Vercel construye el proyecto
   - Una vez completado, tu sitio estará disponible en: `https://musa-producciones.vercel.app`

### Despliegues Automáticos:

- Cada vez que hagas `git push` a la rama `master`, Vercel desplegará automáticamente los cambios
- Los pull requests generarán preview deployments para revisar cambios antes de fusionar

### Archivos de Configuración:

- `vercel.json` - Configuración específica de Vercel
- `astro.config.mjs` - Configurado con el site URL de producción

## 🔧 Desarrollo

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre tu navegador en `http://localhost:4321`

---

**Musa Producciones** - Creamos experiencias que se viven.
