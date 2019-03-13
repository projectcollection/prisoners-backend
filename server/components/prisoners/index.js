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
    const newPrisoner = req.body;
    const prisonId = req.decoded.subject;
    try {
        // CHeck for Prisoner Name
        if(!newPrisoner.name || newPrisoner.name === ''){
            res
                .status(412)
                .json({
                    errorMessage: 'Please provide a new name for the prisoner'
                });
        }

        // Check for Prisoner ID Number
        if(!newPrisoner.id_number){
            res
                .status(412)
                .json({
                    errorMessage: 'Please provide an ID number associated with the prisoner'
                });
        }

        // Check Prisoner ID Number for Uniqueness
        let existingPrisoner = await db.findBy({id_number: newPrisoner.id_number}).first();

        if(existingPrisoner) {
            res
                .status(412)
                .json({
                    errorMessage: 'Please provide an Unique ID number associated with the prisoner'
                });
        }

        // Create Prisoner
        let newPrisonerRecord = await db.createPrisoner({
            name: newPrisoner.name,
            prison_id: prisonId,
            id_number: newPrisoner.id_number
        });

        if(newPrisoner.skills) {
            let skillsArray = await newPrisoner.skills.split(', ').map(async skill => {
                try {
                    // Capitalize skill name
                    let skillName = skill.substring(0, 1).toUpperCase() + skill.substring(1);
    
                    // Look for existing skill
                    let existingSkill = await skillDb.findBy({
                        name: skillName
                    }).first();
    
    
                    if (existingSkill) {
                        skill = existingSkill
                        return skill;
                    } else {
                        skill = await skillDb.createSkill({
                            name: skillName
                        });
    
                        return skill;
                    }

                } catch (err) {
                    console.log('problem with skills')
                }
            
            });

            skillsArray.forEach(skill => {
                skill.then(skill => db.addSkills(newPrisonerRecord.id, skill.id)).catch(err => console.log(err));
            });
        }
        
        res
            .status(201)
            .json(newPrisonerRecord);

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
});

// Read One
router.get('/:id', async (req, res) => {
    let {id} = req.params;

    try {
        let prisoner = await db.readPrisoner(id);
        // let prison = await db.readPrison(prisoner.prison_id)
        prisoner.prison = await db.readPrison(prisoner.prison_id);
        prisoner.skills = await db.readPrisonerSkills(id);

        console.log(prisoner);

        res
            .status(200)
            .json(prisoner);
    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston we have a problem'
            })
    }
})

router.use('/', (req, res) => res.send('Welcome to the Prisoners API'));

// Export
module.exports = router;
