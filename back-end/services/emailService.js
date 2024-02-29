require('dotenv').config();

const nodemailer = require('nodemailer');

// Configurar el transportador de nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
});

// Función para enviar correos electrónicos de bienvenida
const enviarCorreoBienvenida = async (email) => {
  try {
    // Configurar el correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // La dirección de correo electrónico del destinatario
      subject: '¡Bienvenido/a a Dulce con María!', // Asunto del correo electrónico
      text: '¡Hola! Bienvenido a nuestro sitio web. Esperamos que disfrutes de tu experiencia.', // Contenido del correo electrónico
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    console.log('Correo electrónico de bienvenida enviado correctamente a:', email);
  } catch (error) {
    console.error('Error al enviar el correo electrónico de bienvenida:', error);
    throw error;
  }
};

module.exports = { enviarCorreoBienvenida };
