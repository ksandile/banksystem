import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="logo.png" alt="absa logo" className="logo" />
      <Link to="/signup" className="sidebar-link">Login</Link>
      <Link to="/signup" className="sidebar-link">Register</Link>
    </div>
  );
}

export default Sidebar;
