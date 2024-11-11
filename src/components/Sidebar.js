// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Sidebar = () => (
  <div className="sidebar">
    <img src="/path/to/logo.png" alt="Logo" className="logo" />
    <Link to="/dashboard">Home</Link>
    <Link to="/manage-employees">Manage Employees</Link>
    <Link to="/process-payroll">Process Payroll</Link>
    <Link to="/view-reports">View Reports</Link>
    <Link to="/">Logout</Link>
  </div>
);

export default Sidebar;
