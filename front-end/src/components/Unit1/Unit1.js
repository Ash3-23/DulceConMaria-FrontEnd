import React from 'react';
import icon from '../../assets/images/iconChoco.png';
import unit1 from '../../assets/images/Vector 15.png';
import next from '../../assets/images/nextLection.png';
import './Unit1.css'

const Unit1 = ({changeUnit}) => {
  return (
 <div className='course-content__container-unit1'>
      <div className='course-content__content-unit1'>
        <h2 className='course-content__title'>Contenido del Curso</h2>
        <img className='course-content__icon-choco' src={icon} alt='icon choco' />
        <h3 className='course-content__unit'>Unidad 1:</h3>
        <h2 className='course-content__introduction'>Introducción</h2>
        <ul className='course-content__list-modules'>
          <li className='course-content__module'><strong>Módulo 1 - </strong>Presentación</li>
          <li className='course-content__module'><strong>Módulo 2 - </strong>El chocolate</li>
          <li className='course-content__module'><strong>Módulo 3 - </strong>Tipos de Chocolate</li>
          <li className='course-content__module'><strong>Módulo 4 - </strong>Tipos de Chocolate en repostería y sus características</li>
          <li className='course-content__module'><strong>Módulo 5 - </strong>Cómo trabajar el chocolate</li>
          <li className='course-content__module'><strong>Módulo 6 - </strong>Templado del chocolate</li>
        </ul>
      </div>
      <div className='course-content__show'>
        <img className='course-content__show-image' alt='course content' src={unit1} />
      </div>
      <div className='course-content__next'>
        <img className='course-content__next-image' alt='next' src={next} onClick={() => changeUnit(1)} />
      </div>
    </div>
  )
}

export default Unit1