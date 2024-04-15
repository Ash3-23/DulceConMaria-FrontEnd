import React from 'react';
import icon2 from '../../assets/images/Ellipse2.png';
import unit2 from '../../assets/images/Vector 16.png';
import next from '../../assets/images/nextUnitBlue.png';
import './Unit2.css'

const Unit2 = ({ changeUnit }) => {
  return (
    <div className='course-content__container-unit2'>
      <div className='course-content__content-unit2'>
        <h2 className='course-content__title2'>Contenido del Curso</h2>
        <img className='course-content__icon-choco2' src={icon2} alt='icon choco2' />
        <h3 className='course-content__unit2'>Unidad 2:</h3>
        <h2 className='course-content__introduction2'>Preparación</h2>
        <ul className='course-content__list-modules2'>
          <li className='course-content__module2'><strong>Módulo 1 - </strong>Materiales</li>
          <li className='course-content__module2'><strong>Módulo 2 - </strong>Tipos de Moldes</li>
          <li className='course-content__module2'><strong>Módulo 3 - </strong>Ingredientes</li>

        </ul>
      </div>
      <div className='course-content__show2'>
        <img className='course-content__show-image2' alt='course content' src={unit2} />
      </div>
      <div className='course-content__next2'>
        <img className='course-content__next-image2' alt='next' src={next} onClick={() => changeUnit(2)} />
      </div>
    </div>
  )
}

export default Unit2