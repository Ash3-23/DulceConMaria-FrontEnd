import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import HomePage from './pages/HomePage/HomePage';
import RecipesCarousel from './pages/RecipesCarrousel/RecipesCarrousel';
import HeaderLayout from './utils/HeaderLayout/HeaderlLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<HeaderLayout />}>

          <Route path='/home' element={<HomePage />} />
          <Route path='/recetas' element={<RecipesCarousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
