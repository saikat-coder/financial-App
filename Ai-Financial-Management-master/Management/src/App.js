import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import { useState } from 'react';

import ContactUsPage from './pages/ContactUsPage';

import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import AboutPage from './pages/About/AboutPage';
import DashboardFormPage from './pages/DashboardFormPage/DashboardFormPage';
import Dashboard from './pages/Dashboard/Dashboard';

// Add this route inside the <Routes> component

function App() {
  const [formData, setFormData] = useState({});

  return (
    
    <Router>
      <CartProvider>
        <Navbar/>
        
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/contact" element={<ContactUsPage />} />
        
        
        <Route path="/login" element={<LoginPage/>}/>
     
        <Route path="/about" element={<AboutPage />} />
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboardFormPage" element={< DashboardFormPage setFormData={setFormData}/>} />
        <Route path="/dashboard/:id" element={< Dashboard formData={formData}/>} />
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
