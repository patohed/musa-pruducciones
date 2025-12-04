import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, eventType, message } = data;

    // Validar datos
    if (!name || !email || !phone || !eventType || !message) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son requeridos' }),
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400 }
      );
    }

    const SENDGRID_API_KEY = import.meta.env.SENDGRID_API_KEY;
    const EMAIL_TO = import.meta.env.EMAIL_TO || 'contacto@musaproducciones.com.ar';
    const EMAIL_FROM = import.meta.env.EMAIL_FROM || 'noreply@musaproducciones.com.ar';

    if (!SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY no está configurado');
      return new Response(
        JSON.stringify({ error: 'Error de configuración del servidor' }),
        { status: 500 }
      );
    }

    // Mapear tipos de eventos a español
    const eventTypeLabels: Record<string, string> = {
      corporativo: 'Corporativo y de marca',
      cultural: 'Cultural y artístico',
      social: 'Social y privado',
      institucional: 'Institucional',
      otro: 'Otro'
    };

    const eventTypeLabel = eventTypeLabels[eventType] || eventType;

    // Preparar el HTML del email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f8f8f8;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #FF9FCD 0%, #E57BA8 100%);
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              color: #ffffff;
              font-size: 28px;
              font-weight: 300;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .content {
              padding: 40px 30px;
            }
            .field {
              margin-bottom: 25px;
              border-bottom: 1px solid #f0f0f0;
              padding-bottom: 15px;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label {
              font-size: 11px;
              font-weight: 600;
              color: #FF9FCD;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 5px;
            }
            .value {
              font-size: 16px;
              color: #333;
              font-weight: 300;
            }
            .message-box {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #FF9FCD;
              margin-top: 10px;
            }
            .footer {
              background: #1a1a1a;
              padding: 30px;
              text-align: center;
              color: #999;
              font-size: 12px;
            }
            .footer a {
              color: #FF9FCD;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nueva Consulta</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre completo</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #FF9FCD; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Teléfono</div>
                <div class="value"><a href="tel:${phone}" style="color: #FF9FCD; text-decoration: none;">${phone}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Tipo de evento</div>
                <div class="value">${eventTypeLabel}</div>
              </div>
              
              <div class="field">
                <div class="label">Mensaje</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de <a href="https://musaproducciones.com.ar">Musa Producciones</a></p>
              <p style="margin-top: 15px; font-size: 11px;">Por favor, responde directamente al email del cliente para continuar la conversación.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Texto plano alternativo
    const textContent = `
Nueva Consulta - Musa Producciones

NOMBRE: ${name}
EMAIL: ${email}
TELÉFONO: ${phone}
TIPO DE EVENTO: ${eventTypeLabel}

MENSAJE:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de Musa Producciones.
Por favor, responde directamente al email del cliente: ${email}
    `.trim();

    // Enviar email con SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: EMAIL_TO }],
            subject: `Nueva consulta de ${name} - ${eventTypeLabel}`,
          },
        ],
        from: {
          email: EMAIL_FROM,
          name: 'Musa Producciones',
        },
        reply_to: {
          email: email,
          name: name,
        },
        content: [
          {
            type: 'text/plain',
            value: textContent,
          },
          {
            type: 'text/html',
            value: htmlContent,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Error al enviar el email' }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email enviado correctamente' }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500 }
    );
  }
};
