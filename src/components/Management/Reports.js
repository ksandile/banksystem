import React from 'react';
import Sidebar from '../side/Sidebar';
import '../../styles.css';

const Reports = () => {
    return (
        <div className="main">
            <Sidebar />
            <main>
                <div className="wrapper-main">
                    <section id="reports-section">
                        <h2>Generate Reports</h2>
                        <div className="report-links">
                            <a href="#">Employee Report</a>
                            <a href="#">Salary Report</a>
                        </div>
                        <div id="report-display">
                            <h3>Employee Salary Report</h3>
                            <table id="salary-report">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Salary</th>
                                        <th>Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Dynamic rows will be injected here */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Reports;
