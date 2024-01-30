// userController.js
const User = require('./userModel');
const { hashPassword, comparePassword, generateToken } = require('./auth');

async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = hashPassword(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !comparePassword(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome back ${username} 👋🏾`, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { registerUser, loginUser };
