// src/services/emailService.js
import nodemailer from 'nodemailer';

// Transporte lazy para suportar Ethereal dinâmico
let transporterPromise;

async function getTransporter() {
  if (transporterPromise) return transporterPromise;

  if (process.env.EMAIL_SERVICE === 'gmail') {
    transporterPromise = Promise.resolve(
      nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // App password do Gmail
        },
      })
    );
    return transporterPromise;
  }

  if (process.env.EMAIL_SERVICE === 'custom') {
    transporterPromise = Promise.resolve(
      nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })
    );
    return transporterPromise;
  }

  // Ethereal (default/teste): cria conta temporária automaticamente
  transporterPromise = nodemailer.createTestAccount().then((account) =>
    nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    })
  );

  return transporterPromise;
}

/**
 * Enviar email de magic link
 */
export async function sendMagicLinkEmail(email, token, baseUrl = 'http://localhost:3000') {
  const transporter = await getTransporter();
  const magicLink = `${baseUrl}/auth?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'noreply@microtherapy.app',
    to: email,
    subject: '🔗 Seu Link Mágico - Micro Therapy Social',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; border-radius: 8px; margin-top: 20px; }
            .button { background: #667eea; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; display: inline-block; margin: 20px 0; }
            .footer { font-size: 12px; color: #999; margin-top: 20px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🧠 Micro Therapy Social</h1>
              <p>Seu Link Mágico para Login</p>
            </div>
            
            <div class="content">
              <p>Olá!</p>
              <p>Você solicitou um link para acessar sua conta sem precisar de senha. Clique no botão abaixo para fazer login:</p>
              
              <center>
                <a href="${magicLink}" class="button">✨ Fazer Login Seguro</a>
              </center>
              
              <p style="color: #999; font-size: 12px;">
                Ou copie e cole este link no seu navegador:<br>
                <code>${magicLink}</code>
              </p>
              
              <p style="color: #999; font-size: 12px;">
                Este link expira em 10 minutos por segurança.
              </p>
            </div>
            
            <div class="footer">
              <p>Se você não solicitou este link, ignore este email.</p>
              <p>&copy; 2025 Micro Therapy Social. Todos os direitos reservados.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Clique no link para fazer login:
      ${magicLink}
      
      Este link expira em 10 minutos.
      
      Se você não solicitou este link, ignore este email.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✉️  Email enviado para ${email}`);
    
    // Se for Ethereal (teste), mostrar a URL da preview
    if (process.env.EMAIL_SERVICE === 'ethereal' || !process.env.EMAIL_SERVICE) {
      console.log(`📧 Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    }
    
    return true;
  } catch (error) {
    console.error(`❌ Erro ao enviar email: ${error.message}`);
    return false;
  }
}

/**
 * Testar conexão de email
 */
export async function testEmailConnection() {
  try {
    const transporter = await getTransporter();
    await transporter.verify();
    console.log('✅ Conexão de email verificada com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro na conexão de email:', error.message);
    return false;
  }
}