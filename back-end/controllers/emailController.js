const Email = require('../models/email');
const { enviarCorreoBienvenida } = require('../services/emailService');
require('dotenv').config();


const registrarCorreo = async (req, res) => {
  try {
    const { email } = req.body;
    console.log('Controller - Correo electrónico recibido:', email);

    const existeCorreo = await Email.findOne({ email });
    if (existeCorreo) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    const nuevoCorreo = new Email({ email });
    await nuevoCorreo.save();

    console.log('Controller - Correo electrónico guardado en la base de datos:', nuevoCorreo);

    await enviarCorreoBienvenida(email);
    console.log(enviarCorreoBienvenida(email));
    res.status(200).json({ message: 'Correo electrónico registrado correctamente', email: nuevoCorreo });
  } catch (error) {
    console.error('Controller - Error al registrar el correo electrónico:', error);
    res.status(500).json({ message: 'Error al registrar correo electrónico' });
  }
};

module.exports = {
  registrarCorreo
};
