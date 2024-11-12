import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Sidebar = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="sidebar">
      <img src="logo.png" alt="Logo" className="logo" />

      {!isLoggedIn ? (
        <>
          <Link to="/dashboard" style={{ fontWeight: 'bold' }}>Dashboard</Link>
          <Link to="/manage-employees" style={{ fontWeight: 'bold' }}>Manage Employees</Link>
          <Link to="/processpayroll" style={{ fontWeight: 'bold' }}>Process Payroll</Link>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </>
      ) : (

        <>
          <Link to="/" style={{ fontWeight: 'bold' }}>Home</Link>
          <Link to="/signup" style={{ fontWeight: 'bold' }}>Login</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
