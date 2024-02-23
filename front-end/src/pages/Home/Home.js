import React from 'react';
import './Home.css'
import EmailInputButton from '../../components/Email/Email';

const Home = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='header__background'>
          <div className='header__container'>
            <h6 className='header__h6'>¿QUIERES SABER MÁS?</h6>
            <div className='background__logo'></div>
            <img className='header__logo' alt='logoMaria' src={require('../../assets/images/logoMaria.png')} />
            <h6 className='header__prox'>PRÓXIMAMENTE</h6>
            <EmailInputButton className='email-button__component'/>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Home;