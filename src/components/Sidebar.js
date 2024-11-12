// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Sidebar = () => {
  const location = useLocation();

  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="sidebar">
      <img src="logo.png" alt="absa logo" className="logo" />

      {isDashboard ? (
        // Links for logged-in users on the Dashboard page
        <>
          <Link to="/" style={{ fontWeight: 'bold' }}>Home</Link>
          <Link to="/manage-employees" style={{ fontWeight: 'bold' }}>Manage Employees</Link>
          <Link to="/process-payroll" style={{ fontWeight: 'bold' }}>Process Payroll</Link>
          <Link to="/home" style={{ fontWeight: 'bold' }}>Logout</Link>
        </>
      ) : (
        // Default links for non-logged-in users
        <>
          <Link to="/signup" style={{ fontWeight: 'bold' }}>Login</Link>
          <Link to="/signup" style={{ fontWeight: 'bold' }}>Register</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
