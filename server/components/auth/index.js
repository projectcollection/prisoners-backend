// Imports
const express = require('express');

// Router Declaration
const router = express.Router();


// Routes
router.use('/', (req, res) => res.send('Welcome to the AuthN & AuthZ'));

// Export
module.exports = router;
