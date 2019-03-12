// Imports
const express = require('express');

// Router Declaration
const router = express.Router();
const db = require('./prisonsModel')


// Routes
// R - Read
// Read All
router.get('/', async (req, res) => {
    try {
        const prisons = await db.readAll();

        res
            .status(200)
            .json(prisons);

    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston, we hae a problem in PRISONS GET/'
            });
    }
});

// Read One
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        let prison = await db.readOne(id);

        if(!prison) {
            res
                .status(404)
                .json({
                    errorMessage: 'Prison does not exist in system'
                });
        } else {
            res
                .status(200)
                .json(prison);
        }
    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston, we hae a problem in PRISONS GET/'
            });
    }
});

router.use('/', (req, res) => res.send('Welcome to the Prisons API'));

// Export
module.exports = router;
