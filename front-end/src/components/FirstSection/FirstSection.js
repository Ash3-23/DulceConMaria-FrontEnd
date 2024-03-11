import React from 'react';
import './FirstSection.css';
import image from '../../assets/images/choco.png'

const FirstSection = () => {
  return (
    <div className='wrapper__start-section'>
      <div className='start-section__image'>
        <img className='start-image__choco' src={image} alt='chocolate' />
      </div>
      <div className='start-section__content'>
        <h4 className='start-content__h4'>Curso Online</h4>
        <h1 className='start-content__h1'>CHOCOLATERÍA</h1>
        <p className='start-content__p'>¡Descubre el mundo del chocolate con nuestro <strong>Curso Básico de Bombones de Chocolate! </strong>Aprende las técnicas fundamentales, desde el templado perfecto hasta la creación de exquisitos rellenos, todo desde la comodidad de tu hogar.<br />
          <span className='start-content__p-span'><strong>¡Inscríbete ahora y despierta tu creatividad dulce!</strong></span></p>
        <div className='start-content__button'>Inscribirme ahora</div>
      </div>
    </div>
  )
}

export default FirstSection