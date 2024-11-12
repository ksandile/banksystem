// src/components/EmployeeReports.js
import React from 'react';
import Sidebar from './Sidebar';
import './styles.css';

const EmployeeReports = () => {
    return (
        <div className="main">
            <Sidebar />
            <main>
                <div className="wrapper-main">
                    <section id="reports-section">
                        <h2>Reports Overview</h2>

                        {/* Example report types */}
                        <div className="report-types">
                            <a className="links" href="./employee.html">Employee Report</a>
                        </div>

                        {/* Placeholder for displaying selected report */}
                        <div id="report-display" style={{ marginTop: '20px' }}>
                            {/* Dynamic content will be injected here */}
                            <h3 id="report-title">Payroll History</h3>
                            
                            <table id="payroll-history">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Employee Name</th>
                                        <th>Amount Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Rows will be added dynamically */}
                                </tbody>
                            </table>
                        </div>

                    </section>
                </div>
            </main>
        </div>
    );
};

export default EmployeeReports;