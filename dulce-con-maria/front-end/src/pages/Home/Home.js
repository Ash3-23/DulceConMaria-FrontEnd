import React from 'react';
import './Home.css'
import EmailInputButton from '../../components/Email/Email';

const Home = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='header__title'>Dulce con María</h1>

        <h6 className='header__h6'>Si quieres saber más te avisamos!</h6>
        <EmailInputButton />
      </header>

    </div>
  )
}

export default Home;