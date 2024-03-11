import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css'
import FirstSection from '../../components/FirstSection/FirstSection';
import CurseContent from '../../components/CurseContent/CurseContent';

const HomePage = () => {
  return (
    <div className='body__homePage'>
      <NavBar />
      <FirstSection />
      <CurseContent />

    </div>
  )
}

export default HomePage