// Imports
const express = require('express');

// Router Declaration
const router = express.Router();
const db = require('./prisonersModel');
const skillDb = require('../skills/skillsModel');


// Routes
// *** === R - Read === *** //
// Read All 
router.get('/', async (req, res) => {
    try {
        let prisoners = await db.readPrisoners();

        console.log(prisoners)

        res
            .status(200)
            .json(prisoners)
    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston, we have a problem'
            })
    }
})

router.use('/', (req, res) => res.send('Welcome to the Prisoners API'));

// Export
module.exports = router;
