// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import ManageEmployees from './components/ManageEmployee';
import './components/styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Sidebar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-employees" element={<ManageEmployees />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
