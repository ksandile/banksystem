require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const pool = require('./db'); // Database connection from db.js
const bcrypt = require('bcryptjs'); // For password hashing (useful for authentication)
const jwt = require('jsonwebtoken'); // For generating JWT tokens
const cors = require('cors'); // To handle cross-origin requests

const app = express();
const PORT = process.env.PORT || 5001; // Use environment variable for port
const SECRET_KEY = process.env.JWT_SECRET; // Load the secret key from the .env file

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON bodies

// Get all employees
app.get('/api/getEmployees', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM employees');
        res.json(result.rows); // Send the employee data as a response
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ msg: 'Failed to fetch employees' });
    }
});

// Add a new employee
app.post('/api/addEmployee', async (req, res) => {
    const { first_name, last_name, email, job_title, salary, id_number, hire_date, account_number } = req.body;
    try {
        const newEmployee = await pool.query(
            `INSERT INTO employees (first_name, last_name, email, job_title, salary, id_number, hire_date, account_number)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [first_name, last_name, email, job_title, salary, id_number, hire_date, account_number]
        );
        res.json(newEmployee.rows[0]); // Return the newly added employee data
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).json({ msg: 'Error adding employee' });
    }
});

// Update an existing employee
app.put('/api/updateEmployee', async (req, res) => {
    const { id, first_name, last_name, email, jobTitle, salary, idNumber, hire_date, account_number } = req.body;
    try {
        const updatedEmployee = await pool.query(
            `UPDATE employees SET first_name = $1, last_name = $2, email = $3, job_title = $4, salary = $5, 
            id_number = $6, hire_date = $7, account_number = $8 WHERE id = $9 RETURNING *`,
            [first_name, last_name, email, jobTitle, salary, idNumber, hire_date, account_number, id]
        );
        res.json(updatedEmployee.rows[0]);
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ msg: 'Error updating employee' });
    }
});

// Delete an employee
app.delete('/api/deleteEmployee/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM employees WHERE id = $1', [id]);
        res.status(200).json({ msg: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ msg: 'Failed to delete employee' });
    }
});

// JWT Authentication Routes (optional, can be expanded)
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM employees WHERE email = $1', [email]);
        if (result.rows.length > 0) {
            const employee = result.rows[0];
            // Compare the provided password with the stored hashed password
            const match = await bcrypt.compare(password, employee.password); // Assuming passwords are hashed
            if (match) {
                const token = jwt.sign({ id: employee.id }, SECRET_KEY, { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ msg: 'Invalid credentials' });
            }
        } else {
            res.status(404).json({ msg: 'Employee not found' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ msg: 'Error during login' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
