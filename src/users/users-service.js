const UsersService = {
    getUserIdByEmail(db, email) {
        return db
            .select('id')
            .from('users')
            .where('email', email)
            .first()
    },
    getUsers(db) {
        return db
            .select('*')
            .from('users')
    },






    addUser(db, user) {
        return db
            .insert(user)
            .into('users')
            .returning('*')
            .then(rows => rows[0])
    }
}

module.exports = UsersService;