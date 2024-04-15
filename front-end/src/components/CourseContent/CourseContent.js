import React, { useState } from 'react';
import './CourseContent.css';
import Unit1 from '../Unit1/Unit1';
import Unit2 from '../Unit2/Unit2';
import Unit3 from '../Unit3/Unit3';

const CourseContent = () => {
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);
  const [animateRight, setAnimateRight] = useState(false);

  // Función para manejar el cambio de unidad
  const changeUnit = (index) => {
    setAnimateRight(true); // Activa la animación
       // Espera un breve tiempo antes de cambiar la unidad activa
       setTimeout(() => {
        setActiveUnitIndex(index);
        // Reinicia la animación después de un breve tiempo
        setTimeout(() => {
          setAnimateRight(false);
        }, 500);
      }, 50); // Ajusta el tiempo según sea necesario
    };

      // Determinar el color de fondo basado en el índice de la unidad activa
  const backgroundColor = () => {
    switch (activeUnitIndex) {
      case 0:
        return '#F7B3CC'; // Color de fondo para la unidad 1
      case 1:
        return '#8DAEF5'; // Color de fondo para la unidad 2
      case 2:
        return '#FAF6F0'; // Color de fondo para la unidad 3
      default:
        return '#F7B3CC'; // Color de fondo predeterminado
    }
  };


  return (


    <div className='course-content__container' style={{ backgroundColor: backgroundColor() }}>
      <div className={`course-content__content ${animateRight ? 'animate-slide-right' : ''}`}>
        <div className='horizontal-scroll-container'>
          {activeUnitIndex === 0 && <Unit1 changeUnit={changeUnit} />}
          {activeUnitIndex === 1 && <Unit2 changeUnit={changeUnit} />}
          {activeUnitIndex === 2 && <Unit3 changeUnit={changeUnit} />}
        </div>
      </div>
    </div>
  )
}

export default CourseContent