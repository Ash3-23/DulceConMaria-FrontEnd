import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css'
import FirstSection from '../../components/FirstSection/FirstSection';
import CurseContent from '../../components/CourseContent/CourseContent';
import BenefitsCards from '../../components/BenefitsCards/BenefitsCards';
import FixedBanner from '../../components/FixedBanner/FixedBanner';

const HomePage = () => {
  return (
    <div className='body__homePage'>
      <NavBar />
      <FirstSection />
      <CurseContent />
      <BenefitsCards />
      <FixedBanner />

    </div>
  )
}

export default HomePage