const UsersService = {
    addUser(db, user) {
        return db
            .insert(user)
            .into('users')
            .returning('*')
            .then(rows => rows[0])
    }
}

module.exports = UsersService;