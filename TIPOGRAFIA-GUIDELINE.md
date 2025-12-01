# 📝 Guía de Tipografía Musa Producciones

## 🎯 Filosofía Tipográfica

**Trazos finos, elegantes y delicados** que reflejan la sofisticación del logo oficial. La tipografía debe respirar, con espacios generosos y pesos ligeros que transmitan ligereza y refinamiento.

## 🔤 Jerarquía de Pesos

### Poppins (Principal)
```
Light (300)     → Párrafos, texto descriptivo, títulos display
Regular (400)   → Subtítulos, texto destacado, H2-H3
Medium (500)    → Elementos de énfasis, botones, H4-H6
SemiBold (600)  → Solo para CTA críticos o elementos muy puntuales
Bold (700+)     → ⚠️ EVITAR - rompe la estética fina del logo
```

## 📐 Uso por Componente

### Headers (H1-H6)
- **H1**: `font-weight: 300`, `letter-spacing: 0.02em` - Ligereza máxima
- **H2-H3**: `font-weight: 400`, `letter-spacing: 0.01em` - Balance elegante
- **H4-H6**: `font-weight: 500` - Mínimo contraste necesario

### Párrafos
- **Body**: `font-weight: 300`, `letter-spacing: 0.01em`, `line-height: 1.8`
- **Descripción**: Texto aireado, fácil de leer
- **Énfasis**: `font-weight: 500` (NO bold 700)

### Botones y CTA
- **Principal**: `font-weight: 400`, `letter-spacing: 0.025em`
- **Secundario**: `font-weight: 300`, `letter-spacing: 0.02em`
- **Hover**: Aumentar `letter-spacing` a 0.05em (no cambiar peso)

### Logo y Marca
- **Acompañamiento**: `font-weight: 300`, uppercase con `letter-spacing: 0.075em`
- **Tagline**: `font-weight: 300`, italic opcional

## ✨ Letter-Spacing Personalizado

```css
/* Disponibles en Tailwind */
tracking-relaxed   → 0.01em   (default elegante)
tracking-wide      → 0.025em  (botones, menú)
tracking-wider     → 0.05em   (títulos destacados)
tracking-luxury    → 0.075em  (marca, logo text)
```

## 🎨 Combinaciones Recomendadas

### Hero Section
```tsx
<h1 className="text-6xl font-light tracking-wider">
  Creamos experiencias
</h1>
<p className="text-lg font-light tracking-relaxed leading-relaxed">
  Descripción elegante con mucho aire
</p>
```

### Cards y Componentes
```tsx
<h3 className="text-2xl font-normal tracking-relaxed">
  Título de Card
</h3>
<p className="text-base font-light tracking-relaxed">
  Contenido descriptivo
</p>
```

### Botones
```tsx
<button className="font-normal tracking-wide hover:tracking-wider">
  Ver Más
</button>
```

## ⚠️ Reglas de Oro

### ✅ SÍ
- Usar `font-light` (300) como base
- Dar espacio con `letter-spacing` positivo
- Line-height generoso (1.6-1.8)
- Aire entre elementos
- Mayúsculas con tracking amplio

### ❌ NO
- Usar `font-bold` (700+) excepto casos extremos
- Letter-spacing negativo
- Textos apretados o densos
- Bold para títulos principales
- Condensar tipografía

## 🌟 Ejemplos de Uso

### Sección Hero
```tsx
// ✅ Correcto
<h1 className="text-6xl font-light tracking-wider">
  MUSA PRODUCCIONES
</h1>

// ❌ Incorrecto
<h1 className="text-6xl font-bold tracking-tight">
  MUSA PRODUCCIONES
</h1>
```

### Texto Descriptivo
```tsx
// ✅ Correcto
<p className="text-base font-light tracking-relaxed leading-relaxed">
  Productora integral de experiencias artísticas
</p>

// ❌ Incorrecto
<p className="text-base font-semibold tracking-tight">
  Productora integral de experiencias artísticas
</p>
```

## 📱 Responsive

En móviles, mantener la elegancia reduciendo tamaños pero NO aumentando pesos:

```tsx
<h1 className="text-4xl md:text-6xl font-light tracking-wider">
  Título
</h1>
```

## 🎭 Tipografías Secundarias

### Cormorant Garamond (Serif Elegante)
- Solo para citas, testimonios o elementos muy especiales
- `font-weight: 400` (normal)
- Usar con moderación

### Montserrat (Display Alternativo)
- Solo si Poppins no está disponible
- Mismas reglas de peso (300-500)

## 💡 Tip Final

> **"Si dudas si usar bold, probablemente no lo necesites."**
> 
> La elegancia está en la ligereza, no en el peso. Deja que el espaciado, tamaño y color hagan el trabajo de jerarquía.

---

**Última actualización**: 30 de noviembre de 2025
**Diseño alineado con**: Logo Oficial Musa Producciones (#FF9FCD)
