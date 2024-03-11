import React from 'react';
import './CurseContent.css'

const CurseContent = () => {
  return (
//  cambiar el nombre de curse a Course

    <div className='curse-content__container'>
      <div className='curse-content__content'>
        <h1>Contenido del Curse</h1>
      </div>
      <div className='curse-content__show'>
        <div className='curse-content__show-background'></div>
        <img className='curse-content__show-image'></img>
      </div>
    </div>
  )
}

export default CurseContent