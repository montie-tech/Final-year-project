// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { registerUser, loginUser } = require('./userController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://elyeesdev:Mombasa@cluster0.k3wksnj.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
