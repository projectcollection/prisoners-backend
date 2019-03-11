// Imports
const express = require('express');

// Main Router Declaration
const mainRouter = express.Router();


// Sub Routers


// Routes
mainRouter.use('/', (req, res) => res.send('Welcome to the Main API'));

// Export
module.exports = mainRouter;
