import React, { useState, useEffect } from 'react';
import Sidebar from '../side/Sidebar';
import '../../styles.css';
import './manageemployee.css';

const ManageEmployees = ({ isAuthenticated, onSignOut }) => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        job_title: '',
        salary: '',
        id_number: '',
        hire_date: '',
        account_number: ''
    });
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    // Fetch employees on initial load
    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/getEmployees');
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch employees');
            }
            const data = await response.json();
            console.log('Employees data:', data); // Log the data to verify structure

            // Ensure the data is an array before setting it to state
            setEmployees(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading employees:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentEditIndex !== null) {
            await updateEmployee();
        } else {
            await addEmployee();
        }
        resetForm();
    };

    const addEmployee = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/addEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const newEmployee = await response.json();
            setEmployees([...employees, newEmployee]);
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const updateEmployee = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/updateEmployee', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, id: employees[currentEditIndex].id }), // Pass the employee id to update
            });
            const updatedEmployee = await response.json();
            const updatedEmployees = employees.map((emp, index) =>
                index === currentEditIndex ? updatedEmployee : emp
            );
            setEmployees(updatedEmployees);
        } catch (error) {
            console.error('Error updating employee:', error);
        }
        setCurrentEditIndex(null);
    };

    const editEmployee = (index) => {
        setFormData(employees[index]);
        setCurrentEditIndex(index);
    };

    const deleteEmployee = async (index) => {
        try {
            const response = await fetch(`http://localhost:5001/api/deleteEmployee/${employees[index].id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const updatedEmployees = employees.filter((_, i) => i !== index);
                setEmployees(updatedEmployees);
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            job_title: '',
            salary: '',
            id_number: '',
            hire_date: '',
            account_number: ''
        });
    };

    return (
        <div className="manage-employees-container">
            <Sidebar isAuthenticated={isAuthenticated} onSignOut={onSignOut} />
            <main>
                <div className="manage-employees-wrapper">
                    <section className="employee-form-section">
                        <h2>{currentEditIndex !== null ? 'Edit Employee' : 'Add New Employee'}</h2>
                        <form id="employee-form" className="employee-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
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
                                name="job_title"
                                placeholder="Job Title"
                                value={formData.job_title}
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
                                name="id_number"
                                placeholder="ID Number"
                                value={formData.id_number}
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
                                {Array.isArray(employees) && employees.length > 0 ? (
                                    employees.map((employee, index) => (
                                        <tr key={employee.id}>
                                            <td>{employee.first_name} {employee.last_name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.job_title}</td>
                                            <td>{employee.salary}</td>
                                            <td>{employee.id_number}</td>
                                            <td>
                                                <button onClick={() => editEmployee(index)} className="edit-btn">Edit</button>
                                                <button onClick={() => deleteEmployee(index)} className="delete-btn">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No employees available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ManageEmployees;
