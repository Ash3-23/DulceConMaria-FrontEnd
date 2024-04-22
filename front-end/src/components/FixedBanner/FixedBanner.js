import React from 'react';
import fixedBanner from '../../assets/images/Rectangle 19.png';
import './FixedBanner.css'

const FixedBanner = () => {
  return (
    <>
      <div className='fixed-banner__container'>
        <div className='fixed-banner__image'>
          <img className='banner__image' alt='banner' src={fixedBanner}></img>
        </div>
      </div>

      <div className='banner-description__container'>
        <div className='banner-description__wrapper'>
          <h2 className='banner-description__title'>¡Conviértete en un experto chocolatero!</h2>
          <p className='banner-description__description'>Inscríbete ahora en nuestro Curso Básico de Bombones de Chocolate y descubre el placer de crear tus propias obras maestras dulces.</p>
          <p className='banner-description__contact'>Contáctanos hoy mismo para más información y reserva tu lugar.</p>
          <p className='banner-description__button'>Inscribirme</p>

        </div>
      </div>
    </>
  )
}

export default FixedBanner