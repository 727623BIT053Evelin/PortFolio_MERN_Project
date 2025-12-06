const express = require('express');
// Server entry point
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/achievements', require('./routes/achievementRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Portfolio API is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
