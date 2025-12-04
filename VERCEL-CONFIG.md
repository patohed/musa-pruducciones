# 🚀 Configuración en Vercel

## Variables de Entorno para Producción

### 1. Ir a tu proyecto en Vercel
- URL: https://vercel.com/[tu-usuario]/musa-producciones

### 2. Configurar Variables de Entorno

**Settings** → **Environment Variables** → **Add New**

Agregar estas 3 variables:

#### Variable 1: SENDGRID_API_KEY
```
Key: SENDGRID_API_KEY
Value: [Tu API Key de SendGrid - ver email de verificación]
Environments: ✓ Production ✓ Preview ✓ Development
```

#### Variable 2: EMAIL_TO
```
Key: EMAIL_TO
Value: contacto@musaproducciones.com.ar
Environments: ✓ Production ✓ Preview ✓ Development
```

#### Variable 3: EMAIL_FROM
```
Key: EMAIL_FROM
Value: millanpatricio@hotmail.com
Environments: ✓ Production ✓ Preview ✓ Development
```

### 3. Redeploy
Después de agregar las variables:
- Click en **Deployments**
- Click en los 3 puntos del último deployment
- Click en **Redeploy**

---

## ✅ Verificación

### Emails verificados en tu cuenta SendGrid:

1. **Domain Authentication**: `em1006.olivosgrowshop.com` ✓
   - Puedes usar cualquier email @em1006.olivosgrowshop.com
   - Ejemplo: `noreply@em1006.olivosgrowshop.com`

2. **Single Sender**: `millanpatricio@hotmail.com` ✓
   - Actualmente configurado (recomendado para empezar)

### Para usar el dominio personalizado:

Si prefieres usar emails con tu dominio autenticado:

```env
EMAIL_FROM=noreply@em1006.olivosgrowshop.com
# o
EMAIL_FROM=musa@em1006.olivosgrowshop.com
```

**Ventajas**:
- ✅ Mejor deliverability
- ✅ Más profesional
- ✅ Sin límites de sender

---

## 🧪 Testing

### En local:
```bash
npm run dev
# Ir a http://localhost:4321/#contacto
# Completar y enviar formulario
```

### Verificar email:
- Revisar `contacto@musaproducciones.com.ar`
- Verificar carpeta spam (primera vez)
- Responder al email para probar reply-to

---

## ⚠️ Seguridad

**IMPORTANTE**: Después de configurar Vercel:

1. ❌ **NO COMMITEAR** el archivo `.env` con la API Key
2. ✅ Verificar que `.env` esté en `.gitignore`
3. ✅ Usar `.env.example` para documentar variables necesarias

### Rotar API Key (si se expuso):
1. Ir a SendGrid → Settings → API Keys
2. Eliminar la key actual
3. Crear nueva API Key
4. Actualizar en `.env` y Vercel

---

## 📧 Recomendaciones

### Opción 1: Usar Hotmail (actual) ✅
**Pros**:
- ✅ Ya está verificado
- ✅ Funciona inmediatamente
- ✅ Simple de configurar

**Contras**:
- ⚠️ Puede ir a spam más fácilmente
- ⚠️ Menos profesional

### Opción 2: Usar dominio autenticado 🌟 RECOMENDADO
**Pros**:
- ✅ Mejor deliverability
- ✅ Más profesional
- ✅ Sin límites de verificación

**Contras**:
- ⚠️ Requiere cambiar EMAIL_FROM

**Para cambiar**:
```env
EMAIL_FROM=musa@em1006.olivosgrowshop.com
```

### Opción 3: Dominio propio (futuro)
Configurar `musaproducciones.com.ar` en SendGrid:
1. Domain Authentication
2. Agregar registros DNS
3. Esperar verificación (24-48hs)
4. Usar `noreply@musaproducciones.com.ar`

---

## 💰 Límites Plan Free

Tu configuración actual:
- ✅ 100 emails/día (3,000/mes)
- ✅ Sin tarjeta de crédito requerida
- ✅ Suficiente para sitio web de contacto

Si necesitas más → Upgrade a Essentials ($19.95/mes)

---

**Todo listo!** 🎉
El formulario enviará emails a `contacto@musaproducciones.com.ar` desde `millanpatricio@hotmail.com`
