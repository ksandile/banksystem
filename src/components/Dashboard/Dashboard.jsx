import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../side/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedBalance = localStorage.getItem('balance');

    if (storedUsername && storedBalance) {
      setUsername(storedUsername);
      setBalance(storedBalance);
    }
  }, []);

  const handleAddNewEmployee = () => {
    navigate('/manageEmployees');
  };

  const handleProcessPayroll = () => {
    navigate('/processPayroll');
  };

  const handleViewReports = () => {
    navigate('/viewReports');
  };

  return (
    <div className="main-dashboard">
      <Sidebar isAuthenticated={true} />
      <main>
        <div className="wrapper-main-dash">
          <section id="quick-actions">
            <h2 className="welcome">Welcome, {username || 'User'}</h2>
            <p className="balance">Balance: {balance || 'R0.00'}</p>
            <h2>Dashboard</h2>
            <div className="action-buttons">
              <button onClick={handleAddNewEmployee}>Add New Employee</button>
              <button onClick={handleProcessPayroll}>Process Payroll</button>
              <button onClick={handleViewReports}>View Reports</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
