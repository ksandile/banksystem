const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Signup route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    
    // Hash password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Error hashing password' });

        // Insert user data into the database
        db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
        [name, email, hash], 
        (err) => {
            if (err) {
                return res.status(400).json({ error: 'User already exists' });
            }
            res.status(201).json({ message: 'User created successfully' });
        });
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        // Compare hashed passwords
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(400).json({ error: 'Invalid email or password' });
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
