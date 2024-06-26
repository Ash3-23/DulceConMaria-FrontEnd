import React, { useState } from 'react';
import './Email.css';
import ApiService from '../../apiService/ApiService';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function EmailInputButton() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!validateEmail(email)) {
        setErrorMessage('Por favor, introduce una dirección de correo electrónico válida.');
        setSuccessMessage('');
        return;
      }
  
      setLoading(true);
      const response = await ApiService.registrarCorreo(email);
      setLoading(false);
      setEmail('');
      setShowInput(false);
      if (response.message === 'Correo electrónico registrado correctamente') {
        setSuccessMessage('¡Correo electrónico registrado correctamente!');
        setErrorMessage('');
        setRegistered(true); // Establece registered en true cuando el correo se registre correctamente
      }
  
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('El correo electrónico ya está registrado. Por favor, introduce otro correo electrónico.');
        setSuccessMessage('');
        setShowInput(true);
      } else {
        setLoading(false);
        console.error('Correo ya registrado en la base de datos', error);
        setSuccessMessage('El correo electrónico ya está registrado. Por favor, introduce otro correo electrónico.');
      }
    }
  };
  

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className='email-input__container'>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {registered && ( // Mostrar el botón solo cuando registered es true
        <Link to="/home">
          <button className="btn">Comenzar</button>
        </Link>
      )}
      {!registered && (
        <React.Fragment>
          {!showInput ? (
            <button className="btn" onClick={handleButtonClick}>
              <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              <span className="text">Déjanos tu Correo</span>
            </button>
          ) : (
            <form className='form-style' onSubmit={handleSubmit}>
              <div className="coolinput">
                <label htmlFor="email" className="text">Email:</label>
                <input
                  type="email"
                  placeholder="Introduce tu correo"
                  id='email'
                  name="input"
                  className="input"
                  autoComplete="email"
                  value={email}
                  onChange={handleInputChange} />
              </div>
              {loading ? (
                <div className="spinner-border" role="status">
                  <svg className='spinner__loader' viewBox="25 25 50 50">
                    <circle className='loader__circle' r="20" cy="50" cx="50"></circle>
                  </svg>
                </div>
              ) : (
                <button className='send-button' type="submit">Enviar</button>
              )}
            </form>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default EmailInputButton;
