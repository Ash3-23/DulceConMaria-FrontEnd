import React, { useState, useEffect } from 'react';
import ApiService from '../../apiService/ApiService';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './RecipesCarrousel.css';
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'

const RecipesCarousel = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    async function fetchRecipes() {
      try {
        const fetchedRecipes = await ApiService.obtenerRecetas();
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error('Error al obtener recetas:', error.message);
      }
    }

    fetchRecipes();
  }, []);



  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === recipes.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recipes.length - 1 : prevIndex - 1));
  };

  return (
    <div className='recetario__container'>
      <div className='recetario-carousel__container'>
        <h1 className='recetario__title'>Recetario</h1>
        <div className='carousel__wrapper'>
          <div className='carousel-track' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {recipes.map((recipe, index) => (
              <div key={index} className='carousel-item'>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
          <div className='carousel__wrapper-background'>
            <div className='carousel__wrapper--leftCard'></div>
            <div className='carousel__wrapper--rightCard'></div>
          </div>

        </div>




        <div className='carousel-control__wrapper'>
          <img className='carousel-control' onClick={handlePrev} src={leftArrow}></img>
          <img className='carousel-control' onClick={handleNext} src={rightArrow}></img></div>
      </div>
    </div>
  );
};

export default RecipesCarousel;