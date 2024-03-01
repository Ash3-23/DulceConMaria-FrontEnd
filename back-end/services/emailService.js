const nodemailer = require('nodemailer');

// Verificar si las credenciales de correo electrónico están configuradas correctamente
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.error('Las credenciales de correo electrónico no están configuradas correctamente.');
  process.exit(1); // Salir del programa con código de error
}

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

/**
 * Función para enviar correos electrónicos de bienvenida.
 * @param {string} email - La dirección de correo electrónico del destinatario.
 */
const enviarCorreoBienvenida = async (email) => {
  try {
    // Validar la dirección de correo electrónico
    if (!email) {
      throw new Error('La dirección de correo electrónico es requerida.');
    }

    // Configurar el correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '¡Bienvenido/a a Dulce con María!',
      text: '¡Hola! Bienvenido a nuestro sitio web. Esperamos que disfrutes de tu experiencia.'
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    console.log('Correo electrónico de bienvenida enviado correctamente a:', email);
  } catch (error) {
    console.error('Error al enviar el correo electrónico de bienvenida:', error.message);
    throw error; // Relanzar el error para que pueda ser manejado por el código que llama a esta función.
  }
};

module.exports = { enviarCorreoBienvenida };
