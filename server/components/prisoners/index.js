// Imports
const express = require('express');

// Router Declaration
const router = express.Router();
const db = require('./prisonersModel');
const skillDb = require('../skills/skillsModel');
const {
    adminRoute
} = require('../auth/jwtModel');


// Routes
router.post('/', adminRoute, async (req, res) => {
    try {

    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston, we have a problem'
            });
    }
})

// *** === R - Read === *** //
// Read All 
router.get('/', async (req, res) => {
    try {
        console.log(req.decoded);

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
