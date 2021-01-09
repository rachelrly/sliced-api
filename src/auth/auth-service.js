const bcrypt = require('bcryptjs')
const config = require('../config')
const jwt = require('jsonwebtoken')

const AuthService = {

    getUserWithEmail(db, email) {
        return db('users')
            .where({ email })
            .first()
    },

    comparePasswords(password, hash) {
        return bcrypt
            .compare(password, hash)
    },

    createJwt(subject, payload) {
        return jwt
            .sign(payload, config.JWT_SECRET, {
                subject,
                algorithm: 'HS256',
            })
    },

    async verifyJwt(token) {
        const test = jwt.verify(token, config.JWT_SECRET, {
            algorithms: 'HS256'
        })
        return test;
    }
}

module.exports = AuthService
