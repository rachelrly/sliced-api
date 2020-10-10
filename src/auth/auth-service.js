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

    verifyJwt(token) {
        return jwt.verify(token, config.JWT_SECRET, {
            algorithms: ['HA2556'],
        })
    },

    parseBasicToken(token) {
        return Buffer
            .from(token, 'base64')
            .toString()
            .split(':')
    },
}

module.exports = AuthService
