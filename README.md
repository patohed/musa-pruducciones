# MUSA PRODUCCIONES - Landing Page

Landing page moderna y estética para Musa Producciones, una productora integral de experiencias artísticas y eventos.

## ✨ Características

- **Diseño moderno premium**: Fondo oscuro con paleta de colores inspirada en el logo
- **Animaciones sutiles**: Implementadas con Framer Motion para una experiencia fluida
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Performance optimizado**: Construido con Astro para máxima velocidad
- **Componentes interactivos**: Header con navegación, formulario de contacto con WhatsApp

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

- **Background**: Gris grafito oscuro (#141414)
- **Primary**: Tonos violeta/magenta del logo (#B86FDD aprox.)
- **Secondary**: Variaciones del primary
- **Tipografía**: Inter (sans) y Playfair Display (serif)

## 📱 Contacto

- **Email**: musa18producciones@gmail.com
- **WhatsApp**: +54 9 11 6376-1916
- **Instagram**: [@musaproducciones_](https://instagram.com/musaproducciones_)

## 📝 Notas para el Cliente

- Las imágenes del portfolio son de muestra de Unsplash. Reemplazalas con tus fotos reales.
- El formulario de contacto envía automáticamente a WhatsApp con los datos completados.
- Puedes actualizar los colores editando las variables CSS en `src/styles/global.css`
- Para agregar más espacios/alianzas, edita el array `venues` en `src/components/sections/Venues.tsx`

## 🚀 Despliegue

Puedes desplegar fácilmente en:

- **Vercel**: `vercel deploy`
- **Netlify**: Conecta el repositorio
- **GitHub Pages**: Con GitHub Actions

## 🔧 Desarrollo

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre tu navegador en `http://localhost:4321`

---

**Musa Producciones** - Creamos experiencias que se viven.
