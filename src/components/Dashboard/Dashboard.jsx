import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../side/Sidebar';
import './Dashboard.css';  // Make sure to import the CSS file

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  // Fetch user data from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedBalance = localStorage.getItem('balance');

    if (storedUsername && storedBalance) {
      setUsername(storedUsername);
      setBalance(storedBalance);
    }
  }, []);

  // Function to navigate to ManageEmployees page
  const handleAddNewEmployee = () => {
    navigate('/manageEmployees'); // Redirect to the ManageEmployees page
  };

  return (
    <div className="main-dashboard">
      <Sidebar />
      <main>
        <div className="wrapper-main-dash">
          <section id="quick-actions">
            <h2 className="welcome">Welcome, {username || 'User'}</h2>
            <p className="balance">Balance: {balance || 'R0.00'}</p>
            <h2>Dashboard</h2>
            <div className="action-buttons">
              {/* Button to navigate to ManageEmployees */}
              <button onClick={handleAddNewEmployee}>Add New Employee</button>
              <button>View Employees</button>
              <button>Process Payroll</button>
              <button>View Reports</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
