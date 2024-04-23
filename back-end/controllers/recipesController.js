const Recipe = require('../models/recipes');

// Controlador para crear una nueva receta
const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, image, description } = req.body;

    // Crear nueva instancia de receta
    const newRecipe = new Recipe({
      title,
      ingredients,
      image,
      description
    });

    // Guardar la receta en la base de datos
    await newRecipe.save();

    res.status(201).json({ message: 'Receta creada correctamente', recipe: newRecipe });
  } catch (error) {
    console.error('Error al crear receta:', error);
    res.status(500).json({ error: 'Hubo un error al crear la receta' });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.error('Error al obtener recetas:', error);
    res.status(500).json({ error: 'Hubo un error al obtener las recetas' });
  }
};

module.exports = {
  createRecipe, getRecipes
};
