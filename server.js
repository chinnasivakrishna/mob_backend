const { app, server } = require('./src/app');
const connectDB = require('./src/config/database');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
    origin: [
        'http://localhost:3000',  // Local frontend
        'https://your-frontend-domain.com',  // Replace with your frontend domain
        // Add any other frontend URLs that need access
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to MongoDB
connectDB();

// Mount routes
app.use('/api/auth', authRoutes);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
