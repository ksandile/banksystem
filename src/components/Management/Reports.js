import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../side/Sidebar';
import '../../styles.css';

const Reports = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportData, setReportData] = useState([]);

  // If user is not authenticated, redirect to sign-in page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate]);

  const fetchReportData = (reportType) => {
    // Mock data based on report type
    const mockData = {
      salary: [
        { date: '2024-11-01', details: 'Salary for October', amount: '5000' },
        { date: '2024-10-01', details: 'Salary for September', amount: '4800' },
      ],
      employee: [
        { date: '2024-11-10', details: 'John Doe', amount: 'N/A' },
        { date: '2024-11-11', details: 'Jane Smith', amount: 'N/A' },
      ],
    };

    // Set data based on selected report type
    setReportData(mockData[reportType] || []);
    setSelectedReport(reportType);
  };

  return (
    <div className="main">
      <Sidebar />
      <main>
        <div className="wrapper-main">
          <section id="reports-section">
            <h2>Reports Overview</h2>
            <p>Select a report type to view detailed information.</p>

            {/* Report selection links */}
            <div className="report-types">
              <button className="links" onClick={() => fetchReportData('salary')}>Salary Report</button>
              <button className="links" onClick={() => fetchReportData('employee')}>Employee Report</button>
            </div>

            {/* Display sign-out button if authenticated */}
            {isAuthenticated && (
              <button className="logout-button" onClick={onSignOut}>Log Out</button>
            )}

            {/* Report content */}
            {selectedReport && (
              <div id="report-display" style={{ marginTop: '20px' }}>
                <h3 id="report-title">
                  {selectedReport === 'salary' ? 'Salary Report' : 'Employee Report'}
                </h3>
                <table id="report-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Details</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.details}</td>
                        <td>{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Reports;
