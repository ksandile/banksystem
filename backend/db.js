// backend/db.js
const { Pool } = require('pg');

// Configure your PostgreSQL database connection
const pool = new Pool({
  user: 'postgres',            // Your PostgreSQL username
  host: 'localhost',           // Your PostgreSQL server
  database: 'payroll_management', // Replace with your database name
  password: 'new_password',   // Replace with your password
  port: 5432,                  // Default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = pool;
