const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./src/models/user'); // Import User model
const Favorite = require('./src/models/favorite'); // Import Favorite model
const authMiddleware = require('./src/middleware/authMiddleware'); // Import authentication middleware
const errorHandler = require('./src/middleware/errorHandler');
const notFoundHandler = require('./src/middleware/notFoundHandler');
const weatherRoutes = require('./src/routes/weatherRoutes');
const userRoutes = require('./src/routes/userRoutes');
const favoriteRoutes = require('./src/routes/favoriteRoutes');

dotenv.config();

// Initialize Express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root URL route
app.get('/', (req, res) => {
    res.send('Welcome to the WeatherSphere API');
});

// Routes
app.use('/api/weather', weatherRoutes);
app.use('/api/user', userRoutes);
app.use('/api/user/favorites', authMiddleware, favoriteRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error('Failed to connect to MongoDB:', error);
});

module.exports = app;
