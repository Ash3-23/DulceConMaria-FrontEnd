import React, { useState, useEffect } from 'react';
import './NavBar.css'
import logoMaria from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`container__navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className='navbar__logo'>
        {/* <img className='logo__background' alt='background' src={ellipse} /> */}
        <img className='logo__img' alt='logo' src={logoMaria} />
      </div>
      <div className={`navbar__links ${showMenu ? 'show' : ''}`}>
        <p className='navbar__item'>Curso</p>
        <p className='navbar__item'>Recetas</p>
        <p className='navbar__item'>Blog</p>
        <p className='navbar__item inscription color'>Inscribirme</p>
      </div>
      <div className='navbar__burger' onClick={toggleMenu}>
        <svg
          width='22'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 12H21'
            stroke='#F990B7'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 6H21'
            stroke='#F990B7'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 18H21'
            stroke='#F990B7'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        {showMenu && (
          <div className="burger__dropdown-menu">
            <ul className='dropdown-menu__links'>
              <li className='dropdown-menu__links-back'>      <FontAwesomeIcon onClick={closeMenu} icon={faArrowLeft} />
              </li>
              <li className='dropdown-menu__links-item'>Curso</li>
              <li className='dropdown-menu__links-item'>Recetas</li>
              <li className='dropdown-menu__links-item'>Blog</li>
              <li className='dropdown-menu__links-item inscription'>Inscribirme</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;