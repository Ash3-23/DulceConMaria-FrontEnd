import React, { useState } from 'react';
import './CourseContent.css';
import Unit1 from '../Unit1/Unit1';
import Unit2 from '../Unit2/Unit2';
import Unit3 from '../Unit3/Unit3';
import Unit4 from '../Unit4/Unit4';
import { useSwipeable } from 'react-swipeable';


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
        return '#FFFFFF'; // Color de fondo para la unidad 1
      case 1:
        return '#FFFFFF'; // Color de fondo para la unidad 2
      case 2:
        return '#FFFFFF'; // Color de fondo para la unidad 3
      case 3:
        return '#FFFFFF'; // Color de fondo para la unidad 3
      default:
        return '#FFFFFF'; // Color de fondo predeterminado
    }
  };

   // Hook para manejar el deslizamiento de unidades en la versión móvil
  const handlers = useSwipeable({
    onSwipedLeft: () => changeUnit((activeUnitIndex + 1) % 4),
    onSwipedRight: () => changeUnit((activeUnitIndex + 3) % 4)
  });

  return (
    <div className='course-content__container' style={{ backgroundColor: backgroundColor() }} {...handlers}>
      <div className={`course-content__content ${animateRight ? 'animate-slide-right' : ''}`}>
        <div className='horizontal-scroll-container'>
          {activeUnitIndex === 0 && <Unit1 changeUnit={changeUnit} />}
          {activeUnitIndex === 1 && <Unit2 changeUnit={changeUnit} />}
          {activeUnitIndex === 2 && <Unit3 changeUnit={changeUnit} />}
          {activeUnitIndex === 3 && <Unit4 changeUnit={changeUnit} />}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;