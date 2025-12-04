# 📧 Configuración de Email con SendGrid

## 🎯 Objetivo

El formulario de contacto de Musa Producciones envía correos electrónicos a **contacto@musaproducciones.com.ar** usando SendGrid.

---

## 🚀 Configuración Rápida

### 1. **Crear cuenta en SendGrid**

1. Ir a [SendGrid](https://sendgrid.com/)
2. Crear cuenta gratuita (incluye 100 emails/día gratis)
3. Verificar email

### 2. **Obtener API Key**

1. Login en SendGrid
2. Ir a **Settings** → **API Keys**
3. Click en **Create API Key**
4. Nombre: `musa-producciones-web`
5. Permisos: **Full Access** o mínimo **Mail Send**
6. Copiar la API Key (solo se muestra una vez)

### 3. **Verificar Email Sender**

**Opción A: Single Sender Verification** (más rápido)
1. Ir a **Settings** → **Sender Authentication**
2. Click en **Verify a Single Sender**
3. Completar el formulario:
   - From Name: `Musa Producciones`
   - From Email: `noreply@musaproducciones.com.ar`
   - Reply To: `contacto@musaproducciones.com.ar`
4. Verificar el email que llegará a tu casilla

**Opción B: Domain Authentication** (recomendado para producción)
1. Ir a **Settings** → **Sender Authentication**
2. Click en **Authenticate Your Domain**
3. Seguir los pasos para agregar registros DNS
4. Esperar validación (puede tardar 24-48hs)

### 4. **Configurar Variables de Entorno**

#### **Desarrollo Local:**

Editar el archivo `.env`:

```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxx
EMAIL_TO=contacto@musaproducciones.com.ar
EMAIL_FROM=noreply@musaproducciones.com.ar
```

#### **Producción (Vercel):**

1. Ir a proyecto en Vercel
2. **Settings** → **Environment Variables**
3. Agregar:
   - `SENDGRID_API_KEY` = tu_api_key
   - `EMAIL_TO` = contacto@musaproducciones.com.ar
   - `EMAIL_FROM` = noreply@musaproducciones.com.ar
4. Aplicar a: **Production, Preview, Development**
5. Redeploy el proyecto

---

## 📝 Cómo Funciona

### Flujo del Formulario:

```
Usuario completa formulario
        ↓
Click en "Enviar consulta"
        ↓
POST a /api/contact
        ↓
Validación de datos
        ↓
Envío a SendGrid API
        ↓
Email enviado a contacto@musaproducciones.com.ar
        ↓
Mensaje de éxito + Redirección a WhatsApp
```

### Características:

✅ **Email HTML elegante** con diseño rosa Musa
✅ **Email texto plano** como fallback
✅ **Reply-to automático** al email del cliente
✅ **Validación de campos** antes de enviar
✅ **Feedback visual** (loading, success, error)
✅ **Doble canal**: Email + WhatsApp
✅ **Responsive** en todos los dispositivos

---

## 📧 Formato del Email

### Subject:
```
Nueva consulta de [Nombre] - [Tipo de Evento]
```

### Contenido:
- **Header rosa** con logo conceptual
- **Campos del formulario** organizados y legibles
- **Botones de acción** (Email, Teléfono)
- **Footer profesional** con links
- **Reply-to** configurado al email del cliente

---

## 🧪 Testing

### Probar en Local:

```bash
# 1. Configurar .env con tu API Key
# 2. Iniciar servidor
npm run dev

# 3. Ir a http://localhost:4321/#contacto
# 4. Completar y enviar formulario
# 5. Verificar email en contacto@musaproducciones.com.ar
```

### Verificar que llegó el email:

- ✅ Revisar bandeja de entrada
- ✅ Revisar carpeta de spam (primera vez)
- ✅ Verificar que el reply-to funciona (responder al email)

---

## ⚠️ Troubleshooting

### "Error al enviar el mensaje"

**Posibles causas:**

1. **API Key inválida**
   - Verificar que esté correctamente copiada en `.env`
   - Verificar que tenga permisos de Mail Send
   - Regenerar API Key si es necesario

2. **Email no verificado**
   - Verificar que `EMAIL_FROM` esté verificado en SendGrid
   - Opción: usar Single Sender Verification

3. **Límite de envíos alcanzado**
   - Plan Free: 100 emails/día
   - Verificar en SendGrid Dashboard → Activity

4. **CORS / Variables de entorno no cargadas**
   - Reiniciar servidor de desarrollo
   - Verificar que `.env` esté en la raíz del proyecto
   - Verificar que las variables tengan el nombre correcto

### Revisar logs:

```bash
# En desarrollo
# Los errores aparecen en la consola del navegador (F12)
# y en la terminal donde corre npm run dev

# En producción (Vercel)
# Ir a: Dashboard → Deployments → Tu deployment → Functions → contact
```

---

## 📊 Monitoreo

### SendGrid Dashboard:

1. **Activity Feed**: Ver emails enviados en tiempo real
2. **Stats**: Estadísticas de entrega, opens, clicks
3. **Alerts**: Configurar notificaciones por email

URL: https://app.sendgrid.com/statistics

---

## 🔒 Seguridad

### ✅ Buenas Prácticas:

- ✅ API Key solo en variables de entorno (nunca en código)
- ✅ `.env` en `.gitignore`
- ✅ Validación de datos en servidor
- ✅ Rate limiting (SendGrid lo maneja automáticamente)
- ✅ Sanitización de HTML en emails

### ❌ NO HACER:

- ❌ Commitear `.env` a Git
- ❌ Compartir API Key públicamente
- ❌ Usar API Key en frontend (siempre en backend)

---

## 💰 Costos

### Plan Free (actual):
- ✅ **100 emails/día** (3,000/mes)
- ✅ Suficiente para contacto web
- ✅ Sin tarjeta de crédito requerida

### Si necesitas más:
- **Essentials**: $19.95/mes → 50,000 emails
- **Pro**: Desde $89.95/mes → 100,000+ emails

---

## 🎨 Personalización

### Modificar diseño del email:

Editar: `src/pages/api/contact.ts`

```typescript
const htmlContent = `
  <!-- Tu HTML personalizado aquí -->
`;
```

### Cambiar destinatario:

```env
EMAIL_TO=otro-email@dominio.com
```

### Agregar múltiples destinatarios:

```typescript
personalizations: [
  {
    to: [
      { email: 'contacto@musaproducciones.com.ar' },
      { email: 'info@musaproducciones.com.ar' }
    ],
    subject: `Nueva consulta...`,
  },
],
```

---

## 📚 Recursos

- [SendGrid Docs](https://docs.sendgrid.com/)
- [SendGrid API Reference](https://docs.sendgrid.com/api-reference/mail-send/mail-send)
- [Astro API Routes](https://docs.astro.build/en/core-concepts/endpoints/)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

## ✨ Próximas Mejoras

- [ ] Auto-responder al cliente
- [ ] Notificación por Slack/Discord
- [ ] Guardar consultas en base de datos
- [ ] Dashboard de consultas recibidas
- [ ] Templates de email personalizables
- [ ] A/B testing de mensajes

---

**Última actualización**: Diciembre 2025  
**Versión**: 1.0 - SendGrid Integration
