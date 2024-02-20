const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Ruta para registrar un nuevo correo electrónico
router.post('/', emailController.registrarCorreo);

// Otras rutas para manejar operaciones CRUD de correos electrónicos...

module.exports = router;

