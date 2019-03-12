const db = require('../../../db/dbConfig');

const readTable = () => db('skills');
const clearTestTable = () => db('skills').truncate();

const findBy = filter => db('skills').where(filter);


const createSkill = async skill => {
    const [id] = await db('skills').insert(skill);

    return findBy({
        id
    }).first();
}

const readSkills = () => db('skills');


const readSkill = id => db('skills').where({
    id
}).first();

const updateSkill = async (id, updates) => {
    await db('skills').where({
        id
    }).update(updates);

    return findBy({
        id
    }).first();
};


const destroySkill = id => db('skills').where({
    id
}).del();

module.exports = {
    readTable,
    clearTestTable,
    findBy,
    createSkill,
    readSkills,
    readSkill,
    updateSkill,
    destroySkill
}