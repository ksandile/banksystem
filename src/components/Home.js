// src/components/Home.js
import React from 'react';
import Sidebar from './Sidebar';

const Home = () => (
  <div className="main">
    <Sidebar />
    <main>
      <div className="wrapper-main">
        <section>
          <h2>About Our System</h2>
          <p>The Payroll Management System by ABSA is designed to help businesses manage employee payroll efficiently...</p>
          <h2>Additional Key Features</h2>
          <ul>
            <li>User authentication for secure access</li>
            <li>Manage company profiles and employee records</li>
            <li>Automated salary payment processing</li>
            <li>Benefits and deductions management</li>
            <li>Tax calculation and compliance tracking</li>
            <li>Comprehensive reporting and analytics tools</li>
          </ul>
        </section>
      </div>
    </main>
  </div>
);

export default Home;
