const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const allowedOrigins = ['https://travelamigo-mgif.onrender.com', 'http://localhost:5173']

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// Sample packages
const travelPackages = require('./data/packages.json');

app.get('/api/packages', (req, res) => {
    let packages = travelPackages;

    // Filtering
    const { destination, minPrice, maxPrice, minRating, maxDuration } = req.query;

    if (destination) {
        packages = packages.filter(pkg => pkg.destination.toLowerCase() === destination.toLowerCase());
    }

    if (minPrice) {
        packages = packages.filter(pkg => pkg.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
        packages = packages.filter(pkg => pkg.price <= parseFloat(maxPrice));
    }

    if (minRating) {
        packages = packages.filter(pkg => pkg.rating >= parseFloat(minRating));
    }

    if (maxDuration) {
        packages = packages.filter(pkg => parseDuration(pkg.duration) <= parseDuration(maxDuration));
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultPackages = packages.slice(startIndex, endIndex);

    res.json({
        totalPackages: packages.length,
        page,
        limit,
        data: resultPackages
    });
});

// Parse duration (e.g., "7 days, 6 nights" -> 7)
const parseDuration = (duration) => {
    const days = parseInt(duration.split(' ')[0]);
    return days;
}

// Basic Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
