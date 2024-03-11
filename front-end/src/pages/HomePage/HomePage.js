import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css'
import FirstSection from '../../components/FirstSection/FirstSection';

const HomePage = () => {
  return (
    <div className='body__homePage'>
      <NavBar />
      <FirstSection />

    </div>
  )
}

export default HomePage