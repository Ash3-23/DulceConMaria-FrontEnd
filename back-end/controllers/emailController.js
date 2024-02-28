const Email = require('../models/email');
const { enviarCorreoBienvenida } = require('../services/emailService');


// Controlador para manejar la solicitud POST para registrar un nuevo correo electrónico
const registrarCorreo = async (req, res) => {
  try {
    // Extraer el correo electrónico del cuerpo de la solicitud
    const { email } = req.body;

    // Verificar si el correo electrónico ya existe en la base de datos
    const existeCorreo = await Email.findOne({ email });

    // Si el correo electrónico ya existe, enviar un mensaje de error
    if (existeCorreo) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    // Crear un nuevo objeto de correo electrónico utilizando el modelo de Mongoose
    const nuevoCorreo = new Email({ email });

    // Guardar el nuevo correo electrónico en la base de datos
    await nuevoCorreo.save();

    console.log(email)

    // Enviar correo electrónico de bienvenida
    await enviarCorreoBienvenida(email);

    // Enviar una respuesta de éxito al cliente
    res.status(201).json({ message: 'Correo electrónico registrado correctamente', email: nuevoCorreo });
  } catch (error) {
    // Si ocurre algún error durante el proceso, enviar un mensaje de error
    console.error(error);
    res.status(500).json({ message: 'Error al registrar correo electrónico' });
  }
};

module.exports = {
  registrarCorreo
};
