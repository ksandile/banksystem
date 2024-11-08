// backend/db.js
const { Pool } = require('pg');

// Configure your PostgreSQL database connection
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

module.exports = pool;
