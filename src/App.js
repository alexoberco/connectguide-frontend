import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ServicesView from './components/ServicesView';
import AgregarServicio from './components/AgregarServicio'; 
import './styles/App.css'; 

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<ServicesView userRole='operador' />} />
        <Route path="/add-service" element={<AgregarServicio />} />
      </Routes>
    </Router>
  );
}

export default App;
