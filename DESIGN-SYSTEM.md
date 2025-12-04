# Sistema de Diseño - Musa Producciones

## 🎨 Filosofía de Diseño

El diseño de Musa Producciones se basa en **elegancia minimalista con efectos neon sofisticados**, combinando:

- **Tipografía ultra-light**: Peso 100-400 para transmitir refinamiento
- **Efectos neon sutiles**: Rosa #FF9FCD con glows y sombras difuminadas
- **Animaciones fluidas**: Transiciones suaves con spring physics
- **Espaciado generoso**: Padding y gaps amplios para respiración visual

---

## 🎯 Paleta de Colores

### Colores Principales
```css
--primary: hsl(330, 100%, 81%)     /* Rosa vibrante #FF9FCD */
--secondary: hsl(330, 75%, 65%)    /* Rosa profundo */
--background: hsl(0, 0%, 6%)       /* Negro profundo */
--foreground: hsl(0, 0%, 98%)      /* Blanco casi puro */
--card: hsl(330, 8%, 10%)          /* Card con tinte rosa */
```

### Uso de Opacidad Neon
- **Bordes normales**: `border-primary/25` (25%)
- **Bordes hover**: `border-primary/60-80` (60-80%)
- **Glows suaves**: `bg-primary/10-20` (10-20%)
- **Glows intensos**: `bg-primary/40-60` (40-60%)

---

## ✨ Efectos Neon Implementados

### 1. **Cards con Neon Glow**
```tsx
// Patrón estándar de card neon
<motion.div 
  className="relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 
             border border-primary/20 hover:border-primary/60"
  whileHover={{ y: -8, scale: 1.02 }}
>
  {/* Glow exterior */}
  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 
                  via-secondary/20 to-primary/20 rounded-2xl blur-xl 
                  opacity-0 group-hover:opacity-70" />
  
  {/* Glow interior */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 
                  via-primary/5 to-primary/10 opacity-0 
                  group-hover:opacity-100" />
  
  {/* Contenido */}
  <div className="relative z-10">
    {/* Tu contenido aquí */}
  </div>
</motion.div>
```

### 2. **Iconos con Drop Shadow Neon**
```tsx
<Icon className="h-8 w-8 text-primary 
                 drop-shadow-[0_0_12px_rgba(255,159,205,0.8)]" />
```

### 3. **Texto con Gradiente Animado**
```tsx
<h3 className="text-3xl font-thin uppercase tracking-widest 
               bg-gradient-to-r from-foreground via-primary to-foreground 
               bg-clip-text text-transparent 
               group-hover:from-primary group-hover:via-secondary 
               group-hover:to-primary">
  Título
</h3>
```

### 4. **Corner Accents** (Acentos en esquinas)
```tsx
{/* Esquina superior izquierda */}
<div className="absolute top-2 left-2 w-16 h-16 
                border-t-2 border-l-2 border-primary/50 
                rounded-tl-2xl opacity-0 group-hover:opacity-100" />

{/* Esquina inferior derecha */}
<div className="absolute bottom-2 right-2 w-16 h-16 
                border-b-2 border-r-2 border-primary/50 
                rounded-br-2xl opacity-0 group-hover:opacity-100" />
```

### 5. **Bottom Glow Line**
```tsx
<div className="absolute bottom-0 left-0 right-0 h-[2px] 
                bg-gradient-to-r from-transparent via-primary 
                to-transparent opacity-0 group-hover:opacity-100" />
```

---

## 🎭 Animaciones

### Motion Presets
```tsx
// Lift on hover
whileHover={{ y: -8, scale: 1.02 }}
transition={{ type: "spring", stiffness: 300, damping: 20 }}

// Icon rotation
whileHover={{ rotate: 360, scale: 1.1 }}
transition={{ duration: 0.6, ease: "easeInOut" }}

// Shake effect
whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
transition={{ duration: 0.5 }}

// Slide on hover
whileHover={{ x: 8, scale: 1.02 }}
transition={{ type: "spring", stiffness: 400 }}
```

---

## 📐 Espaciado y Tamaños

### Cards
- **Padding interno**: `p-8` a `p-10`
- **Gap entre cards**: `gap-8` a `gap-10`
- **Border radius**: `rounded-2xl` a `rounded-3xl`
- **Blur para glows**: `blur-xl` (20px) a `blur-2xl` (40px)

### Iconos
- **Tamaño en services**: `h-7 w-7`
- **Tamaño en events/about**: `h-10 w-10` a `h-12 w-12`
- **Padding del contenedor**: `p-4` a `p-6`

### Tipografía
- **Títulos de card**: `text-xl` a `text-3xl`
- **Labels**: `text-xs` con `uppercase` y `tracking-widest`
- **Descripciones**: `text-sm` a `text-lg`
- **Font weight**: `font-thin` (100) a `font-light` (300)

---

## 🎪 Componentes Implementados

### ✅ Services Section
- 7 cards en grid 3 columnas
- Iconos con rotación 360° on hover
- Glow blur exterior e interior
- Bottom glow line animada
- Títulos en uppercase thin

### ✅ Events Section  
- 4 cards en grid 2 columnas
- Multiple neon glows (top-right, bottom-left)
- Border glow con gradiente animado
- Corner accents en 4 esquinas
- Iconos con shake effect

### ✅ About Section
- 3 pilares en grid 3 columnas
- Radial glow central pulsante
- Iconos con shake complejo
- Gradiente de texto animado en hover
- Border shimmer animado

### ✅ Portfolio Section
- Grid 3 columnas responsive
- Glow exterior en hover
- Gradient overlay con neon
- Bottom content con slide-up
- Video play button con glow pulsante
- Corner accents en imágenes

### ✅ Contact Section
- Cards de contacto con slide effect
- Iconos rotantes on hover
- Formulario con container neon
- Inputs con focus glow rosa
- Submit button con gradiente animado continuo
- Shimmer effect en hover

---

## 📱 Responsive Behavior

Todos los componentes mantienen los efectos neon en todas las breakpoints:

- **Mobile** (< 640px): Grid 1 columna, padding reducido
- **Tablet** (640px - 1024px): Grid 2 columnas en events/services
- **Desktop** (> 1024px): Grid 3 columnas completo

Los efectos de hover se mantienen en todas las resoluciones.

---

## 🎨 Clases CSS Utilitarias Neon

### Nuevas clases en global.css:

```css
.neon-glow              /* Glow suave estándar */
.neon-glow-strong       /* Glow intenso con inset */
.neon-text              /* Text-shadow neon */
.neon-border            /* Border con glow */
.animate-neon-pulse     /* Pulso animado continuo */
.neon-scan              /* Línea de scan animada */
.text-shimmer           /* Shimmer en texto */
```

---

## 🚀 Próximos Pasos

### Para mantener consistencia:
1. **Usar siempre `font-thin` o `font-light`** en títulos
2. **`uppercase tracking-widest`** para labels pequeños
3. **Mínimo 2 glows por card**: uno exterior blur-xl, uno interior sutil
4. **Corner accents opcionales** para elementos premium
5. **Spring animations** para interacciones naturales

### Para expandir:
- [ ] Aplicar neon effects al Hero section
- [ ] Añadir particle effects sutiles en fondo
- [ ] Crear variantes de intensidad (subtle/normal/intense)
- [ ] Sistema de themes (permitir ajustar intensidad global)

---

## 💡 Tips de Implementación

### ❌ **Evitar**
- Font weights > 500 (excepto en casos muy específicos)
- Glows demasiado intensos (> 80% opacity)
- Demasiadas animaciones simultáneas
- Borders sólidos sin glow

### ✅ **Preferir**
- Gradientes sutiles `from-card/80 to-card/40`
- Multiple glows de baja intensidad
- Transiciones duration-300 a duration-500
- Border radius grandes (xl, 2xl, 3xl)

---

**Última actualización**: Diciembre 2025
**Versión**: 2.0 - Neon Elegance
