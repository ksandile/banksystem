// src/components/Reports.js
import React from 'react';
import Sidebar from './Sidebar';
import './styles.css';

const Reports = () => {
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
                            <a className="links" href="./employee.html">Employee Report</a>
                        </div>

                        {/* Placeholder for displaying selected report */}
                        <div id="report-display" style={{ marginTop: '20px' }}>
                            {/* Dynamic content will be injected here */}
                            <h3 id="report-title"></h3>
                            <table id="report-table" style={{ display: 'none' }}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Details</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody></tbody> {/* Rows will be added dynamically */}
                            </table>
                        </div>

                    </section>
                </div>
            </main>
        </div>
    );
};

export default Reports;