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
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '¡Bienvenido/a a Dulce con María!',
      text: '¡Hola! Bienvenido a nuestro sitio web. Esperamos que disfrutes de tu experiencia.',
    };

    await transporter.sendMail(mailOptions);
    console.log('Correo de bienvenida enviado correctamente a:', email);
  } catch (error) {
    console.error('Error al enviar el correo electrónico de bienvenida:', error);
    // Aquí puedes decidir cómo manejar el error, como lanzar una excepción
    // o simplemente imprimir un mensaje de error y continuar
  }
};

module.exports = { enviarCorreoBienvenida };
