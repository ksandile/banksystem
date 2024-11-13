import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/side/Sidebar';
import About from './components/Pages/About';
import SignUp from './components/Forms/SignUp';
import SignIn from './components/Forms/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import ManageEmployees from './components/Management/ManageEmployees';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status on page load
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthentication = () => {
    setIsAuthenticated(true); // Update auth state after successful login
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('balance');
    setIsAuthenticated(false);
  };

  // Handle "Add New Employee" navigation
  const handleManageEmployeesNavigation = () => {
    navigate('/manage-employees'); // Navigate to ManageEmployees page
  };

  return (
    <div className="app">
      {/* Wait until the auth state is checked before rendering Sidebar */}
      {isAuthenticated !== null && (
        <Sidebar
          isAuthenticated={isAuthenticated}
          onSignOut={handleSignOut}
          onManageEmployees={handleManageEmployeesNavigation} // Pass navigation function here
        />
      )}
      <div className="main-content">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          
          {/* Dashboard is protected: only accessible when authenticated */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />}
          />
          
          {/* ManageEmployees route */}
          <Route path="/manageemployees" element={isAuthenticated ? <ManageEmployees /> : <Navigate to="/signin" />} />

          {/* SignUp and SignIn pages only visible if not authenticated */}
          {!isAuthenticated ? (
            <>
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/signin"
                element={<SignIn onSignIn={handleAuthentication} />}
              />
            </>
          ) : (
            // Redirect authenticated users away from SignIn and SignUp
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
