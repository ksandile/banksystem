// backend/server.js
const express = require('express');
const pool = require('./db'); // Database connection from db.js
const cors = require('cors'); // To handle cross-origin requests

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON bodies

// POST endpoint to add a new employee to the payroll
app.post('/api/employees', async (req, res) => {
  const { first_name, last_name, email, phone_number, hire_date, salary } = req.body;
  try {
    const newEmployee = await pool.query(
      `INSERT INTO employees (first_name, last_name, email, phone_number, id_number, jobTitle, hire_date, salary, account_number) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [first_name, last_name, email, phone_number, hire_date, salary]
    );
    res.json(newEmployee.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
