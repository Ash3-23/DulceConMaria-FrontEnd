import React from 'react';
import icon4 from '../../assets/images/Ellipse4.png';
import unit4 from '../../assets/images/Vector 18.png';
import next from '../../assets/images/nextUnitPink.png';
import './Unit4.css'

const Unit4 = ({ changeUnit }) => {
  return (
    <div className='course-content__container-unit4'>
      <div className='course-content__content-unit4'>
        <h2 className='course-content__title4'>Contenido del Curso</h2>
        <img className='course-content__icon-choco4' src={icon4} alt='icon choco' />
        <h3 className='course-content__unit4'>Unidad 4:</h3>
        <h2 className='course-content__introduction4'> Montaje del Bombón</h2>
        <ul className='course-content__list-modules4'>
          <li className='course-content__module4'><strong>Módulo 1 - </strong>Básico</li>
          <li className='course-content__module4'><strong>Módulo 2 - </strong>Licor</li>
          <li className='course-content__module4'><strong>Módulo 3 - </strong>Frutas</li>
          <li className='course-content__module4'><strong>Módulo 4 - </strong>Frutos Secos</li>
          <li className='course-content__module4'><strong>Módulo 5 - </strong>De Chocolate Blanco</li>
        </ul>
      </div>
      <div className='course-content__show4'>
        <img className='course-content__show-image4' alt='course content' src={unit4} />
      </div>
      <div className='course-content__next4'>
        <img className='course-content__next-image4' alt='next' src={next} onClick={() => changeUnit(0)} />
      </div>
    </div>
  )
}

export default Unit4