const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

// Ruta para registrar un nuevo correo electrónico
router.get('/', recipesController.getRecipes);
router.post('/', recipesController.createRecipe);

// Otras rutas para manejar operaciones CRUD de correos electrónicos...

module.exports = router;