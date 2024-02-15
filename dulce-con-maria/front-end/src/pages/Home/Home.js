import React from 'react';
import './Home.css'
import EmailInputButton from '../../components/Email/Email';

const Home = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='header__title'>Dulce con María</h1>
      </header>
      <EmailInputButton />
    </div>
  )
}

export default Home;