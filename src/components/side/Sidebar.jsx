import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current location (route)

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  const isActive = (path) => location.pathname === `/${path}` ? 'active' : '';

  return (
    <div className="sidebar">
      <ul>
        {/* Check if user is authenticated */}
        {isAuthenticated && (
          <>
            <li className={isActive('dashboard')}>
              <button onClick={() => handleNavigate('dashboard')}>Dashboard</button>
            </li>
            <li className={isActive('manageemployees')}>
              <button onClick={() => handleNavigate('manageemployees')}>Manage Employees</button>
            </li>
            <li className={isActive('processPayroll')}>
              <button onClick={() => handleNavigate('processPayroll')}>Process Payroll</button>
            </li>
            <li className={isActive('viewReports')}>
              <button onClick={() => handleNavigate('viewReports')}>View Reports</button>
            </li>
            <li>
              <button onClick={onSignOut}>Logout</button>
            </li>
          </>
        )}

        {/* If user is not authenticated, show Sign In and Register links */}
        {!isAuthenticated && (
          <>
            <li className={isActive('signin')}>
              <button onClick={() => handleNavigate('signin')}>Sign In</button>
            </li>
            <li className={isActive('register')}>
              <button onClick={() => handleNavigate('register')}>Register</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
