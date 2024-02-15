import React, { useState } from 'react';
import './Email.css'
function EmailInputButton() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que quieras con el correo electrónico, como enviarlo a tu backend

    // con el 200 devolver un mensaje
    console.log('Correo electrónico enviado:', email);
    // Reinicia el estado y oculta el input
    setEmail('');
    setShowInput(false);
  };

  return (
    <div>
      {!showInput ? (
        <button class="btn" onClick={handleButtonClick}>
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>

          <span class="text">Introducir Correo</span>
        </button>
      ) : (
        <form className='form-style' onSubmit={handleSubmit}>
          <div class="coolinput">
            <label for="input" class="text">email:</label>
            <input
              type="text"
              placeholder="Introduce tu correo"
              name="input"
              class="input"
              value={email}
              onChange={handleInputChange} />
          </div>

          <button className='send-button' type="submit">Enviar</button>
        </form>
      )}

    </div>
  );
}

export default EmailInputButton;
