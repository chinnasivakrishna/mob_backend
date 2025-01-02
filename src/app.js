const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://your-frontend-domain.com'] 
        : ['http://localhost:3000'],
    credentials: true
}));

// Test route to verify API is working
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working' });
});

// Routes with /api prefix
app.use('/api/auth', require('./routes/auth'));
app.use('/api/rooms', require('./routes/rooms'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = { app, server }; 