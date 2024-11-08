const sqlite3 = require('sqlite3').verbose();

// Create and connect to the database
const db = new sqlite3.Database('./userDatabase.db', (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err);
    } else {
        console.log('Connected to SQLite database');
        createTables();
    }
});

// Function to create users table
function createTables() {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Error creating tables:', err);
        } else {
            console.log('Tables created');
        }
    });
}

module.exports = db;
