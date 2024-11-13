import React, { useState, useEffect } from 'react';
import Sidebar from '../side/Sidebar';
import '../../styles.css';
import './manageemployee.css'; // Import the new CSS file

const ManageEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        jobTitle: '',
        salary: '',
        idNumber: '',
        hire_date: '',
        account_number: ''
    });
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentEditIndex !== null) {
            updateEmployee();
        } else {
            addEmployee();
        }
        resetForm();
    };

    const addEmployee = () => {
        const updatedEmployees = [...employees, formData];
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setEmployees(updatedEmployees);
    };

    const updateEmployee = () => {
        const updatedEmployees = [...employees];
        updatedEmployees[currentEditIndex] = formData;
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setEmployees(updatedEmployees);
        setCurrentEditIndex(null);
    };

    const editEmployee = (index) => {
        setFormData(employees[index]);
        setCurrentEditIndex(index);
    };

    const deleteEmployee = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setEmployees(updatedEmployees);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            jobTitle: '',
            salary: '',
            idNumber: '',
            hire_date: '',
            account_number: ''
        });
    };

    return (
        <div className="manage-employees-container">
            <Sidebar />
            <main>
                <div className="manage-employees-wrapper">
                    <section className="employee-form-section">
                        <h2>{currentEditIndex !== null ? 'Edit Employee' : 'Add New Employee'}</h2>
                        <form id="employee-form" className="employee-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Employee Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Job Title"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <input
                                type="number"
                                name="salary"
                                placeholder="Salary"
                                value={formData.salary}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <input
                                type="text"
                                name="idNumber"
                                placeholder="ID Number"
                                value={formData.idNumber}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <input
                                type="text"
                                name="hire_date"
                                placeholder="Hire Date"
                                value={formData.hire_date}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <input
                                type="text"
                                name="account_number"
                                placeholder="Account Number"
                                value={formData.account_number}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <button type="submit" className="submit-btn">
                                {currentEditIndex !== null ? 'Update Employee' : 'Add Employee'}
                            </button>
                        </form>
                    </section>

                    <section className="employee-list-section">
                        <h2>Employee List</h2>
                        <table className="employee-list-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Job Title</th>
                                    <th>Salary</th>
                                    <th>ID Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={index}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.jobTitle}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.idNumber}</td>
                                        <td>
                                            <button className="edit-btn" onClick={() => editEmployee(index)}>Update</button>
                                            <button className="delete-btn" onClick={() => deleteEmployee(index)}>Delete</button>
                                        </td>
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

export default ManageEmployees;
