const xss = require('xss');
const bcrypt = require("bcryptjs");

const UserService = {
    addUser(db, user) {
        return db
            .insert(user)
            .into('users')
    },
    hashPassword(password) {
        return bcrypt.hash(password, 12)
    }
}

module.exports = UserService;