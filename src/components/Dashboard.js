// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import './styles.css';


const Dashboard = () => (
  <div className="dashboard-container">
    <Sidebar />
    <div className="main-content">
      <div className="wrapper-main">
        <section id="quick-actions">
          <h2>Welcome, Afika</h2>
          <h2>Balance: R507 009.98</h2>
          <h2>Dashboard</h2>
          <div className="action-buttons">
            <button>Manage Employees</button>
            <button>Process Payroll</button>
            <button>View Reports</button>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Dashboard;
