require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const memoryRoutes = require('./routes/memoryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/memories', memoryRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
