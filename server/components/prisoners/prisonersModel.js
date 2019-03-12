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

const readPrisoners = () => db('prisoners').join('prisons', 'prisoners.prison_id', '=', 'prisons.id').select('prisoners.*', 'prisons.location')


const readPrisoner = id => db('prisoners').where({
    id
}).first();

const readPrison = id => db('prisons').where({id}).first();

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
    readPrisoners,
    readPrisoner,
    readPrison,
    updatePrisoner,
    destroyPrisoner
}