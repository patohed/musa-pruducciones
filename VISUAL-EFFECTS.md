# 🎬 Efectos Visuales - Musa Producciones

## ✨ Transiciones entre Secciones

### 📍 Implementación

Se han agregado **4 variantes** de dividers animados entre cada sección del sitio:

#### 1. **Wave Divider** 🌊
- **Ubicación**: Hero → About, Venues → Portfolio
- **Efecto**: Dos capas de ondas animadas con gradientes rosa
- **Características**:
  - Ondas con movimiento orgánico (8-10s de duración)
  - Partículas flotantes (6 partículas)
  - Glow animado horizontal
  - Parallax con scroll (y-transform)
  - Opacidad dinámica basada en scroll

```tsx
<SectionDivider variant="wave" />
```

#### 2. **Particles Divider** ✨
- **Ubicación**: About → Services, Portfolio → Contact
- **Efecto**: Sistema de partículas con líneas de conexión
- **Características**:
  - 15 partículas flotantes de diferentes tamaños
  - Líneas de conexión animadas entre partículas
  - Gradientes radiales (primary/secondary)
  - Pulso de fondo animado
  - Movimiento vertical complejo (y: -40px)

```tsx
<SectionDivider variant="particles" />
```

#### 3. **Glow Divider** 💫
- **Ubicación**: Services → Events
- **Efecto**: Sistema de luces orbitales con líneas brillantes
- **Características**:
  - 3 líneas horizontales con diferentes opacidades
  - 3 glows pulsantes grandes (40-48px blur)
  - 8 pequeños glows orbitales (rotate 360°)
  - Movimiento horizontal alternado
  - Efecto de profundidad con múltiples capas

```tsx
<SectionDivider variant="glow" />
```

#### 4. **Gradient Divider** 🎨
- **Ubicación**: Events → Venues
- **Efecto**: Barras diagonales con scanline y gradientes móviles
- **Características**:
  - 12 líneas diagonales animadas (skewX -20deg)
  - Doble gradiente horizontal móvil (8s y 10s)
  - Scanline vertical (top: 0→100%)
  - 10 dots pulsantes a lo largo
  - Efecto de "matrix rain" moderno

```tsx
<SectionDivider variant="gradient" />
```

---

## 📊 Barra de Progreso de Scroll

### ScrollProgressBar Component

**Características**:
- Barra superior fija con gradiente animado rosa
- 8 partículas flotantes que siguen el scroll
- Box-shadow neon intenso
- ScaleX animado según progreso de scroll
- Z-index 50 (siempre visible)

**Implementación**:
```tsx
<ScrollProgressBar client:load />
```

---

## 🖼️ Portfolio - Imágenes Actualizadas

### Cambios Realizados:

#### ✅ **Imágenes Reemplazadas**:

1. **Evento Corporativo Premium**
   - URL: `photo-1511795409834-ef04bbd61622`
   - Categoría: Eventos empresariales elegantes

2. **Producción Musical**
   - URL: `photo-1429962714451-bb934ecdc4ec`
   - Categoría: Conciertos y festivales

3. **Ambientación Elegante**
   - URL: `photo-1464366400600-7168b8af9bc3`
   - Categoría: Decoración y setup

4. **Celebración Exclusiva**
   - URL: `photo-1505236858219-8359eb29e329`
   - Categoría: Eventos sociales premium

5. **Reel Audiovisual**
   - URL: `photo-1478147427282-58a87a120781`
   - Tipo: Video thumbnail
   - Botón play con neon pulsante

6. **Behind the Scenes**
   - URL: `photo-1523580494863-6f3031224c94`
   - Categoría: Backstage y producción

#### 🛡️ **Manejo de Errores**:
```tsx
onError={(e) => {
  const target = e.target as HTMLImageElement;
  target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30';
}}
```
- Fallback automático si alguna imagen falla
- Lazy loading activado (`loading="lazy"`)
- Calidad optimizada (`q=80`)

---

## 🎭 Efectos Técnicos por Divider

### Performance y Animaciones:

| Divider | Elementos Animados | Duration Range | Repeat | Ease |
|---------|-------------------|----------------|---------|------|
| **Wave** | 2 paths + 6 particles + 1 glow | 4-10s | Infinity | easeInOut |
| **Particles** | 15 particles + 5 lines + 1 gradient | 2-6s | Infinity | easeInOut |
| **Glow** | 3 lines + 3 glows + 8 orbitals | 2-8s | Infinity | easeInOut/linear |
| **Gradient** | 12 lines + 2 sweeps + 1 scan + 10 dots | 2.5-10s | Infinity | linear/easeInOut |

### Transforms Utilizados:

```typescript
// Scroll-based
opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9])
y: useTransform(scrollYProgress, [0, 1], [50, -50])

// Animation-based
y: [0, -40, 0]
opacity: [0.2, 1, 0.2]
scale: [0.5, 2, 0.5]
rotate: 360
x: ['-100%', '100%']
```

---

## 🎨 Paleta de Colores Neon

Todos los dividers utilizan la paleta consistente:

```css
Primary: hsl(330, 100%, 81%)    /* Rosa vibrante #FF9FCD */
Secondary: hsl(330, 75%, 65%)   /* Rosa profundo */

Opacidades usadas:
- Sutiles: 0.1 - 0.2
- Normales: 0.3 - 0.4
- Intensas: 0.6 - 0.8
- Máximas: 1.0

Blur levels:
- Soft: blur-xl (20px)
- Medium: blur-2xl (40px)
- Strong: blur-3xl (60px)
- Extra: blur-[80px] (custom)
```

---

## 📐 Dimensiones Responsivas

```css
Mobile (< 768px):
  height: 8rem (128px)

Desktop (≥ 768px):
  height: 10rem (160px)
```

---

## 🚀 Optimizaciones

### Viewport Detection:
```typescript
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});
```
- Solo anima cuando está visible en viewport
- Reduce carga de CPU/GPU
- Smooth transitions con Framer Motion

### Lazy Loading:
- Imágenes del portfolio: `loading="lazy"`
- Componentes: `client:visible` en Astro
- Dividers: Solo cargan al hacer scroll

---

## 📱 Comportamiento Móvil

### Ajustes automáticos:
- ✅ Altura reducida en mobile (128px vs 160px)
- ✅ Menos partículas en pantallas pequeñas
- ✅ Blur más suave para mejor performance
- ✅ Animaciones optimizadas (menos fps en móvil)

---

## 🎯 Flujo de Navegación

```
Hero
  ↓ Wave Divider
About
  ↓ Particles Divider
Services
  ↓ Glow Divider
Events
  ↓ Gradient Divider
Venues
  ↓ Wave Divider
Portfolio
  ↓ Particles Divider
Contact
```

**Total**: 6 dividers animados + 1 barra de progreso global

---

## 💡 Próximas Mejoras Sugeridas

- [ ] Agregar variante "spotlight" con luz de seguimiento
- [ ] Implementar variante "grid" con efecto cyber
- [ ] Crear variante "DNA" con doble hélice animada
- [ ] Añadir controles de intensidad (subtle/normal/intense)
- [ ] Sistema de themes para cambiar colores globalmente
- [ ] Parallax en elementos de fondo de cada sección
- [ ] Cursor personalizado con efecto neon
- [ ] Micro-interacciones en scroll (reveal animations)

---

**Última actualización**: Diciembre 2025  
**Versión**: 2.1 - Visual Effects & Transitions
