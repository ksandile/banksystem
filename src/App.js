import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/side/Sidebar';
import About from './components/Pages/About';
import SignUp from './components/Forms/SignUp';
import SignIn from './components/Forms/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import ManageEmployees from './components/Management/ManageEmployees';
import ProcessPayroll from './components/Management/ProcessPayroll';
import Reports from './components/Management/Reports';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <div className="app">
      {isAuthenticated && (
        <Sidebar
          isAuthenticated={isAuthenticated}
          onSignOut={handleSignOut}
          currentPage={location.pathname} // Pass current path to Sidebar
        />
      )}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />}
          />
          <Route
            path="/manageemployees"
            element={
              isAuthenticated ? (
                <ManageEmployees isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/processPayroll"
            element={
              isAuthenticated ? (
                <ProcessPayroll isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/viewReports"
            element={
              isAuthenticated ? (
                <Reports isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />

          {!isAuthenticated ? (
            <>
              <Route path="/register" element={<SignUp />} />
              <Route path="/signin" element={<SignIn onSignIn={handleAuthentication} />} />
            </>
          ) : (
            <>
              <Route path="/signin" element={<Navigate to="/dashboard" />} />
              <Route path="/register" element={<Navigate to="/dashboard" />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
