const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../cofig');


const AuthService = {
    getUserWithEmail(db, email) {
        return db('users')
            .where({ email })
            .first();
    },

    comparePasswords(password, hash) {
        return bcrypt
            .compare(password, hash);
    },

    signJwt(subject, payload) {
        return jwt
            .sign(payload, config.JWT_SECRET, {
                subject,
                algorithm: 'HS256',
            });
    },

    verifyJwt(token) {
        return jwt
            .verify(token, config.JWT_SECRET, {
                algorithms: ['HS256']
            });
    }
}


module.exports = AuthService;