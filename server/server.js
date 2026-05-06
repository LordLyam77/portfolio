require('dotenv').config();

const express = require('express');
const cors = require('cors');

const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Portfolio API Running');
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});