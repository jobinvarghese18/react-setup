import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
