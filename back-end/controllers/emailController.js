const Email = require('../models/email');
const { enviarCorreoBienvenida } = require('../services/emailService');

const registrarCorreo = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Registrar la recepción del correo electrónico
    console.log('Correo electrónico recibido:', email);

    const existeCorreo = await Email.findOne({ email });
    
    if (existeCorreo) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    const nuevoCorreo = new Email({ email });
    await nuevoCorreo.save();

    // Registrar el correo electrónico guardado en la base de datos
    console.log('Correo electrónico guardado en la base de datos:', nuevoCorreo);

    // Enviar correo electrónico de bienvenida
    await enviarCorreoBienvenida(email);

    res.status(201).json({ message: 'Correo electrónico registrado correctamente', email: nuevoCorreo });
  } catch (error) {
    console.error('Error al registrar el correo electrónico:', error);
    res.status(500).json({ message: 'Error al registrar correo electrónico' });
  }
};

module.exports = {
  registrarCorreo
};
