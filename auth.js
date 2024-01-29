// auth.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

function generateToken(user) {
    return jwt.sign({ id: user._id, username: user.username }, 'secret_key', { expiresIn: '1h' });
}

module.exports = { hashPassword, comparePassword, generateToken };
