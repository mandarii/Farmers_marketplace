const { User } = require('../models');
const bcrypt = require('bcryptjs');

// Register user
exports.register = async (req, res) => {
    console.log("Register endpoint hit");
    try {
        const { username, email, password } = req.body;

        // Check if all required fields are present
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword, // Save hashed password
        });

        return res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
