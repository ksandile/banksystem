import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for navigation

const Sidebar = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate(); // Use the useNavigate hook to handle navigation

  // Function to handle navigation logic
  const handleNavigate = (page) => {
    // Navigate to the specified page
    navigate(`/${page}`);
  };
  

  return (
    <div className="sidebar">
      <ul>
        <li>
          <button onClick={() => handleNavigate('dashboard')}>Dashboard</button>
        </li>
        {isAuthenticated && (
          <li>
            <button onClick={() => handleNavigate('manageEmployees')}>Manage Employees</button>
          </li>
        )}
        {!isAuthenticated ? (
          <>
            <li><button onClick={() => handleNavigate('signin')}>Sign In</button></li>
            <li><button onClick={() => handleNavigate('register')}>Register</button></li>
          </>
        ) : (
          <li><button onClick={onSignOut}>Sign Out</button></li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
