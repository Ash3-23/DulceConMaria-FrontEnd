import React from 'react';
import './RecipeCard.css';
import image from '../../assets/images/Rectangle 31.png';
import iconRecipes from '../../assets/images/iconRecipes.png';

const RecipeCard = ({ recipe }) => {
  if (!recipe) {
    return null; // Si recipe es undefined, retorna null o un mensaje de error
  }

  const { title, ingredients, description } = recipe;

  return (
    <>
      <div className='recetas-cards__container'>
   
        <div className='recetas-cards__content'>
          <div className='recetas-cards__border'>
            <div className='recetas-cards__title-wrapper'>
              <img className='cards-title__icon' src={iconRecipes} alt='iconRecipes' />
              <h2 className='cards-title__h1'>{title}</h2>
            </div>
            <div className='recetas-cards__image-wrapper'>
              <img className='cards__receta-image' src={image} alt={title} />
            </div>
            <div className='recetas-cards__line'></div>

            <div className='recipes-ingredients__container'>
              <div className='recipes-ingredients__wrapper1'>
                <h4 className='ingredients__title'>Ingredientes</h4>
                <ul className='ingredients__list'>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className='recetas-cards__line'></div>
              <div className='recetas-preparation__container'>
                <h4 className='recetas-preparation__title'>Preparación</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
