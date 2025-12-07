import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Envoi du mail au propriétaire du site
  await transporter.sendMail({
    from: email,
    to: 'budaberg35@gmail.com',
    subject: `Souhait d'information pour mon futur projet - ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  // Envoi du mail de confirmation à l'expéditeur
  const logoPath = path.join(process.cwd(), 'public', 'uploads', 'logo-tn.png');
  const logoAttachment = {
    filename: 'logo-tn.png',
    content: fs.readFileSync(logoPath),
  };

  await transporter.sendMail({
    from: 'budaberg35@gmail.com',
    to: email,
    subject: 'Confirmation de réception de votre demande',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="cid:logo" alt="Logo Terre Nordique" style="max-width: 200px; height: auto;" />
        </div>
        <h2 style="color: #231F20;">Bonjour ${name},</h2>
        <p>Nous avons bien reçu votre demande et nous ne manquerons pas de revenir vers vous.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #CD291E; margin-top: 0;">Résumé de votre message :</h3>
          <p><strong>Message :</strong> ${message}</p>
        </div>
        <p>Merci de votre confiance.</p>
        <p>Cordialement,<br>L'équipe Terre Nordique</p>
      </div>
    `,
    attachments: [{
      filename: 'logo-tn.png',
      path: logoPath,
      cid: 'logo'
    }]
  });

  return new Response('Message envoyé', { status: 200 });
} 