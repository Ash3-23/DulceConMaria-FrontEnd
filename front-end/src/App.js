import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import HomePage from './pages/HomePage/HomePage';
import Recetas from './pages/Recetas/Recetas';
// import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/recetas' element={<Recetas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
