import React, { useState } from 'react';
import './Email.css';
import ApiService from '../../apiService/ApiService'; // Importa el servicio de API que creamos

function EmailInputButton() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Por favor, introduce una dirección de correo electrónico válida.');
      setSuccessMessage('');
      return;
    }
    try {
      setLoading(true);
      await ApiService.registrarCorreo(email); // Envía el correo electrónico al backend utilizando el servicio de API
      console.log('Correo electrónico enviado:', email);
      setEmail('');
      setShowInput(false);
      setSuccessMessage('¡Correo electrónico registrado correctamente!');
      setErrorMessage('');
    } catch (error) {
      setLoading(false);
      console.error('Error al enviar el correo electrónico:', error.message);
      setErrorMessage('Ha habido un error y no se ha podido registrar.\nPor favor revisa tu correo');
      setSuccessMessage('');
      setTimeout(() => {
        setLoading(true); // Ocultar spinner de carga después de 3 segundos
      }, 5000);
    }
  };

  // Función para validar el formato del correo electrónico utilizando expresiones regulares
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  if (successMessage) {
    return <div className="success-message">{successMessage}</div>;
  }

  return (
    <div className='email-input__container'>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && (
        <div className="error-message">
          {errorMessage.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      )}      {!showInput ? (
        <button className="btn" onClick={handleButtonClick}>
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>

          <span className="text">Déjanos tu Correo</span>
        </button>
      ) : (
        <form className='form-style' onSubmit={handleSubmit}>
          <div className="coolinput">
            <label htmlFor="email" className="text">email:</label>
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

    </div>
  );
}

export default EmailInputButton;
