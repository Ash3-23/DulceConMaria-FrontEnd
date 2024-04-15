import React from 'react';
import icon3 from '../../assets/images/Ellipse3.png';
import unit3 from '../../assets/images/Vector 17.png';
import next from '../../assets/images/nextUnitPink.png';
import './Unit3.css'

const Unit3 = ({ changeUnit }) => {
  return (
    <div className='course-content__container-unit3'>
      <div className='course-content__content-unit3'>
        <h2 className='course-content__title3'>Contenido del Curso</h2>
        <img className='course-content__icon-choco3' src={icon3} alt='icon choco' />
        <h3 className='course-content__unit3'>Unidad 3:</h3>
        <h2 className='course-content__introduction3'>Introducción</h2>
        <ul className='course-content__list-modules3'>
          <li className='course-content__module3'><strong>Módulo 1 - </strong>Presentación</li>
          <li className='course-content__module3'><strong>Módulo 2 - </strong>El chocolate</li>
          <li className='course-content__module3'><strong>Módulo 3 - </strong>Tipos de Chocolate</li>
          <li className='course-content__module3'><strong>Módulo 4 - </strong>Tipos de Chocolate en repostería y sus características</li>
          <li className='course-content__module3'><strong>Módulo 5 - </strong>Cómo trabajar el chocolate</li>
          <li className='course-content__module3'><strong>Módulo 6 - </strong>Templado del chocolate</li>
        </ul>
      </div>
      <div className='course-content__show3'>
        <img className='course-content__show-image3' alt='course content' src={unit3} />
      </div>
      <div className='course-content__next3'>
        <img className='course-content__next-image3' alt='next' src={next} onClick={() => changeUnit(0)} />
      </div>
    </div>
  )
}

export default Unit3