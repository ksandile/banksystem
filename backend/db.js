// backend/db.js
const { Pool } = require('pg');

// Configure PostgreSQL database connection
const pool = new Pool({
  user: 'postgres',            // PostgreSQL username
  host: 'localhost',           // PostgreSQL server
  database: 'payroll_management', // Database name
  password: 'new_password',   // Password
  port: 5432,                  // Default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = pool;
