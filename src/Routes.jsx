// Routes.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './App'; // Asegúrate de que la ruta sea correcta
import SelectedNumbersPage from './SelectedNumbersPage'; // Crea este archivo

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selected-numbers" element={<SelectedNumbersPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
