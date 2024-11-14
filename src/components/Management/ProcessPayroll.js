import React, { useState, useEffect } from 'react';
import Sidebar from '../side/Sidebar';
import '../../styles.css';

const ProcessPayroll = ({ isAuthenticated }) => {
    const [employees, setEmployees] = useState([]);
    const [payrollData, setPayrollData] = useState({
        date: '',
        employeeId: '',
        salaryAmount: ''
    });
    const [payrollHistory, setPayrollHistory] = useState([]);

    useEffect(() => {
        loadEmployees();
        loadPayrollHistory();
    }, []);

    const loadEmployees = () => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    };

    const loadPayrollHistory = () => {
        const history = JSON.parse(localStorage.getItem('payrollHistory')) || [];
        setPayrollHistory(history);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayrollData({ ...payrollData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        processPayroll();
        resetForm();
    };

    const processPayroll = () => {
        const newEntry = {
            date: payrollData.date,
            employeeName: employees.find(emp => emp.id === payrollData.employeeId)?.name || 'Unknown',
            amountPaid: payrollData.salaryAmount
        };
        
        const updatedHistory = [...payrollHistory, newEntry];
        localStorage.setItem('payrollHistory', JSON.stringify(updatedHistory));
        setPayrollHistory(updatedHistory);
    };

    const resetForm = () => {
        setPayrollData({
            date: '',
            employeeId: '',
            salaryAmount: ''
        });
    };

    return (
        <div className="main">
            <Sidebar isAuthenticated={isAuthenticated} />
            <main>
                <div className="wrapper-main">
                    <section id="payroll-section">
                        <h2>Payroll Processing</h2>
                        <form id="payroll-form" onSubmit={handleSubmit}>
                            <input
                                type="date"
                                name="date"
                                value={payrollData.date}
                                onChange={handleChange}
                                required
                            />
                            <select
                                name="employeeId"
                                value={payrollData.employeeId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Employee</option>
                                {employees.map(emp => (
                                    <option key={emp.id} value={emp.id}>{emp.name}</option>
                                ))}
                            </select>
                            <input
                                type="number"
                                name="salaryAmount"
                                placeholder="Salary Amount"
                                value={payrollData.salaryAmount}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Process Payroll</button>
                        </form>

                        <h3>Payroll History</h3>
                        <table id="payroll-history">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Employee Name</th>
                                    <th>Amount Paid</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payrollHistory.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{entry.date}</td>
                                        <td>{entry.employeeName}</td>
                                        <td>{entry.amountPaid}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ProcessPayroll;
