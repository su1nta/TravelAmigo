const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Sample packages
const travelPackages = require('./data/packages.json');

app.use(cors());


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

    // Calculate total number of packages after filtering
    const totalPackages = packages.length;

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultPackages = packages.slice(startIndex, endIndex);

    res.json({
        totalPackages,  // Return the total number of filtered packages
        page,
        limit,
        data: resultPackages
    });
});

app.get('/api/destinations', (req, res) => {
    const destinations = travelPackages.map(pkg => pkg.destination);
    const uniqueDestinations = [...new Set(destinations)];
    res.json(uniqueDestinations);
})

app.get('api/lost', (req, res) => {
    res.send('You lost your way, traveller!');
})

// const parentDir = path.join(__dirname, '/..');
const frontendPath = path.join('frontend', 'dist');
app.use(express.static(frontendPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
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
