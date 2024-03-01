import React from 'react';
import './NavBar.css'
import logoMaria from '../../assets/images/Logo.png';


const NavBar = () => {
  return (
    <div className='container__navbar'>
      <div className='navbar__logo'>
        {/* <img className='logo__background' alt='background' src={ellipse} /> */}
        <img className='logo__img' alt='logo' src={logoMaria} />
        {/* <img className='logo__title' alt='logoTitle' src={title} /> */}
      </div>
      <div className='navbar__links'>
        <p className='navbar__item'>Curso</p>
        <p className='navbar__item'>Recetas</p>
        <p className='navbar__item'>Blog</p>
        <p className='navbar__item inscription'>Inscribirme</p>
      </div>
    </div>
  )
}

export default NavBar