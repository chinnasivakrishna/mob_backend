const { app, server } = require('./src/app');
const connectDB = require('./src/config/database');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
    origin: ['http://localhost:3000', 'https://your-frontend-domain.com'],
    credentials: true
}));

// Connect to MongoDB
connectDB();

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
