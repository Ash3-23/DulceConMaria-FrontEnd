require('dotenv').config();
const path = require('path');
const nodemailer = require('nodemailer');
const imagePath = path.join(__dirname, 'logoMaria.png');

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

// Contenido HTML del correo electrónico personalizado
const htmlContent = `
  <html>
    <head>
      <style>
        /* Estilos CSS para el correo electrónico */
        body {
          font-family: Arial, sans-serif;
        }
        .container {
          width: 80%;
          margin: 0 auto;
        }
        .header {
          background-color: #f0f0f0;
          padding: 20px;
          text-align: center;
        }
        .content {
          padding: 20px;
        }
        .course-info {
          margin-top: 20px;
          background-color: #f9f9f9;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Bienvenido/a a Dulce con María!</h1>
          <img src="cid:logo" alt="Logo de Dulce con María" style="width: 150px; height: auto;">
          </div>
        <div class="content">
          <p>Estimado/a usuario,</p>
          <p>¡Gracias por registrarte en nuestro boletín informativo! Estamos emocionados de tenerte como parte de nuestra comunidad.</p>
          <div class="course-info">
            <h2>¡Descubre nuestros cursos de repostería y chocolates!</h2>
            <p>En Dulce con María ofrecemos una amplia variedad de cursos para que puedas convertirte en un experto en repostería y chocolates. ¡No te lo pierdas!</p>
            <a href="https://dulceconmaria.com/home" target="_blank" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px;">Explora nuestros cursos</a>
          </div>
          <p>Atentamente,</p>
          <p>María Tovar</p>
        </div>
      </div>
    </body>
  </html>
`;

// Función para enviar correos electrónicos de bienvenida
const enviarCorreoBienvenida = async (email) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '¡Bienvenido/a a Dulce con María!',
      html: htmlContent,
      attachments: [
        {
          filename: 'logoMaria.png',
          path: imagePath,
          cid: 'logo'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    console.log('Correo de bienvenida enviado correctamente a:', email);
  } catch (error) {
    console.error('Error al enviar el correo electrónico de bienvenida:', error);
  }
};

module.exports = { enviarCorreoBienvenida };
