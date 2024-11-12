// src/components/ManageEmployees.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './styles.css';

const ManageEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        jobTitle: '',
        salary: '',
        idNumber: ''
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
            surname: '',
            email: '',
            phone_number: '',
            hire_date: '',
            account_number: '',
            jobTitle: '',
            salary: '',
            idNumber: ''
        });
    };

    return (
        <div className="main">
            <Sidebar />
            <main>
                <div className="wrapper-main">
                    <section>
                        <h2>Add New Employee</h2>
                        <form id="employee-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Employee Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Job Title"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                name="salary"
                                placeholder="Salary"
                                value={formData.salary}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="idNumber"
                                placeholder="ID Number"
                                value={formData.idNumber}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="hire_date"
                                placeholder="date"
                                value={formData.idNumber}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="account_number"
                                placeholder="Acount Number"
                                value={formData.idNumber}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Add Employee</button>
                        </form>

                        <h2>Employee List</h2>
                        <table id="employee-list">
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
                                            <button onClick={() => editEmployee(index)}>Update</button>
                                            <button onClick={() => deleteEmployee(index)}>Delete</button>
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
