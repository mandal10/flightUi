
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<h1><HeroSection /></h1>} />
          <Route path="/Flight" element={<h1>Flight</h1>} />
          <Route path="/developers" element={<h1>Developers</h1>} />
          <Route path="/documentation" element={<h1>Documentation</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
