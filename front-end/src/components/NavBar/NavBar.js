import React, {useState} from 'react';
import './NavBar.css'
import logoMaria from '../../assets/images/Logo.png';


const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className='container__navbar'>
      <div className='navbar__logo'>
        {/* <img className='logo__background' alt='background' src={ellipse} /> */}
        <img className='logo__img' alt='logo' src={logoMaria} />
      </div>
      <div className={`navbar__links ${showMenu ? 'show' : ''}`}>
        <p className='navbar__item'>Curso</p>
        <p className='navbar__item'>Recetas</p>
        <p className='navbar__item'>Blog</p>
        <p className='navbar__item inscription'>Inscribirme</p>
      </div>
      <div className='navbar__burger' onClick={toggleMenu}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 12H21'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 6H21'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 18H21'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;