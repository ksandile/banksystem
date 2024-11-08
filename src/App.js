// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'C:\Users\Setu.Xolilizwe\Documents\GitHub\banksystem\src\components\Home.js';
import Signup from 'C:\Users\Setu.Xolilizwe\Documents\GitHub\banksystem\src\components\SignUp.js';
import Dashboard from 'C:\Users\Setu.Xolilizwe\Documents\GitHub\banksystem\src\components\Dashboard.js';
import './styles.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
