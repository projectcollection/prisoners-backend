const db = require('../../../db/dbConfig');

const readTable = () => db('prisoners');
const clearTestTable = () => db('prisoners').truncate();

const findBy = filter => db('prisoners').where(filter);


const createPrisoner = async prisoner => {
    const [id] = await db('prisoners').insert(prisoner);

    return findBy({
        id
    }).first();
}

const addSkills = (prisoner_id, skill_id) => db('prisonerSkills').insert({
    prisoner_id,
    skill_id
});

const readPrisoners = () => db('prisoners').join('prisons', 'prisoners.prison_id', '=', 'prisons.id').select('prisoners.*', 'prisons.location');

const readPrisoner = id => db('prisoners').where({id}).first();

const readPrisonerSkills = id => db('prisonerSkills')
    .join('prisoners', 'prisoners.id', '=', 'prisonerSkills.prisoner_id')
    .join('skills', 'skills.id', '=', 'prisonerSkills.skill_id')
    .where({
        prisoner_id: id
    })
    .select('skills.name');

const readPrison = id => db('prisons').select('location', 'population', 'zipcode').where({id}).first();

const updatePrisoner = async (id, updates) => {
    await db('prisoners').where({
        id
    }).update(updates);

    return findBy({
        id
    }).first();
};


const destroyPrisoner = id => db('prisoners').where({
    id
}).del();

module.exports = {
    readTable,
    clearTestTable,
    findBy,
    createPrisoner,
    addSkills,
    readPrisoners,
    readPrisoner,
    readPrisonerSkills,
    readPrison,
    updatePrisoner,
    destroyPrisoner
}