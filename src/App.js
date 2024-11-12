import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import ManageEmployees from './components/ManageEmployee';
import ProcessPayroll from './components/ProcessPayroll';
import './components/styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the login state to true after a successful sign-in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set the login state to false when logging out
  };

  return (
    <Router>
      {/* Sidebar is always visible */}
      <Sidebar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Home />} />
          <Route path="/manage-employees" element={isLoggedIn ? <ManageEmployees /> : <Home />} />
          <Route path="/processpayroll" element={isLoggedIn ? <ProcessPayroll /> : <Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
