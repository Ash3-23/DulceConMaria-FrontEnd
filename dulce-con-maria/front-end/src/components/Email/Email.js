import React, { useState } from 'react';

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
    console.log('Correo electrónico enviado:', email);
    // Reinicia el estado y oculta el input
    setEmail('');
    setShowInput(false);
  };

  return (
    <div>
      {!showInput ? (
        <button onClick={handleButtonClick}>Introducir Correo</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Introduce tu correo"
            value={email}
            onChange={handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default EmailInputButton;
