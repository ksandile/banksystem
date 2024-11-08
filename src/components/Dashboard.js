// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => (
  <div className="main">
    <Sidebar />
    <main>
      <div className="wrapper-main">
        <section id="quick-actions">
          <h2>Welcome, Afika</h2>
          <h2>Balance: R507 009.98</h2>
          <h2>Dashboard</h2>
          <div className="action-buttons">
            <button>Add New Employee</button>
            <button>Remove Employee</button>
            <button>View Employees</button>
            <button>Process Payroll</button>
            <button>View Reports</button>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Dashboard;
