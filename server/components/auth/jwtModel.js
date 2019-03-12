require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'You\'re my little secret';

const generateToken = prison => {
    const payload = {
        subject: prison.id,
        location: prison.location
    }

    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secret, options);
}


module.exports = {
    generateToken
}