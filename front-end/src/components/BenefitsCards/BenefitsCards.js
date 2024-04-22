import React from 'react';
import cardsIcon1 from '../../assets/images/cardsIcon1.png';
import cardsIcon2 from '../../assets/images/cardsIcon2.png';
import cardsIcon3 from '../../assets/images/cardsIcon3.png';
import cardsIcon4 from '../../assets/images/cardsIcon4.png';
import './BenefitsCards.css'


const BenefitsCards = () => {
  return (
    <div className='benefits-cards__container'>
      <div className='benefits-card__title-container'>
        <h2 className='benefits-cards__title'>Beneficios del Curso</h2>
      </div>

      <div className='benefits-cards__content-container'>
        <div className='benefits-cards__card'>
          <div className='benefits-card__card-content'>
            <img className='benefits-cards__icon' alt='icon' src={cardsIcon1}></img>
            <h6 className='benefits-cards__description'>Aprenderás de forma práctica y didáctica, con explicaciones detalladas y ejemplos visuales.</h6>
          </div>
        </div>


        <div className='benefits-cards__card'>
          <div className='benefits-card__card-content'>
            <img className='benefits-cards__icon' alt='icon' src={cardsIcon2}></img>
            <h6 className='benefits-cards__description'>Obtendrás acceso a un contenido exclusivo y de alta calidad, creado por expertos en chocolatería.</h6>
          </div>
        </div>


        <div className='benefits-cards__card'>
          <div className='benefits-card__card-content'>
            <img className='benefits-cards__icon' alt='icon' src={cardsIcon3}></img>
            <h6 className='benefits-cards__description'>Podrás practicar desde la comodidad de tu hogar, adaptando el ritmo de aprendizaje a tu propia agenda.</h6>
          </div>
        </div>


        <div className='benefits-cards__card'>
          <div className='benefits-card__card-content'>
            <img className='benefits-cards__icon' alt='icon' src={cardsIcon4}></img>
            <h6 className='benefits-cards__description'>Al finalizar el curso, estarás listo para sorprender a tus amigos y familiares con tus propios bombones artesanales.</h6>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BenefitsCards