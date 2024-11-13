// src/components/Reports.js
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import './styles.css';

const SalariesReport = () => {
    return (
        <div className="main">
            <Sidebar />
            <main>
                <div className="wrapper-main">
                    <section id="reports-section">
                        <h2>Reports Overview</h2>
                        <p>Select a report type to view detailed information.</p>

                        {/* Example report types */}
                        <div className="report-types">
                            <a className="links" href="./salary.html">Salary Report</a>
                        </div>

                        {/* Placeholder for displaying selected report */}
                        <div id="report-display" style={{ marginTop: '20px' }}>
                            {/* Dynamic content will be injected here */}
                            <h3 id="report-title">Employee List</h3>
                            <table id="report-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Job Title</th>
                                        <th>Salary</th>
                                        <th>ID Number</th>
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

export default SalariesReport;