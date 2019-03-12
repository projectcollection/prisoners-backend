const db = require('../../../db/dbConfig');

const readTable = () => db('prisons');
const clearTestTable = () => db('prisons').truncate();

const findBy = filter => db('prisons').where(filter);


const create = async prison => {
    const [id] = await db('prisons').insert(prison);

    return findBy({
        id
    }).first();
}

const readAll = () => db('prisons');

const readOne = id => db('prisons').select('id', 'location', 'population', 'zipcode').where({
    id
}).first();

const readOneUnsafe = id => db('prisons').where({
    id
}).first();

module.exports = {
    readTable,
    clearTestTable,
    findBy,
    create,
    readAll,
    readOne,
    readOneUnsafe
}