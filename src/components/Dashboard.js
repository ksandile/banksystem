// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from './Sidebar';
import './styles.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate to Manage Employees page
  const handleManageEmployeesClick = () => {
    navigate('/manage-employees');
  };

  const handleProcessPayRollClick = () => {
    navigate('/processpayroll');
  };

  const handleReportsClick = () => {
    navigate('/reports');
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="wrapper-main">
          <section id="quick-actions">
            <h2>Welcome, Afika</h2>
            <h2>Balance: R507 009.98</h2>
            <h2>Dashboard</h2>
            <div className="action-buttons">
              <button onClick={handleManageEmployeesClick}>Manage Employees</button>
              <button onClick={handleProcessPayRollClick}>Process Payroll</button>
              <button onClick={handleReportsClick}>View Reports</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
