const express = require('express');
const AuthService = require('./auth-service');

const authRouter = express.Router();
const jsonBodyParser = express.json();


authRouter
    .post('/login', jsonBodyParser, (req, res, next) => {
        const { email, password } = req.body
        const user = { email, password }
        for (const [key, value] of Object.entries(user))
            if (value == null) {
                return res
                    .status(400)
                    .json({ error: `Request is missing '${key}'` })
            }
        AuthService.getUserWithEmail(
            req.app.get('db'),
            user.email
        )
            .then(dbUser => {
                if (!dbUser) {
                    return res
                        .status(400)
                        .json({ error: 'Email or password is incorrect' })
                }
                return AuthService.comparePasswords(user.password, dbUser.password)
                    .then(compareMatch => {
                        if (!compareMatch)
                            if (!compareMatch)
                                return res
                                    .status(400)
                                    .json({ error: 'incorrect email or password' })
                        const sub = dbUser.email
                        const payload = { user_id: dbUser.id }
                        res.send({
                            authToken: AuthService.createJwt(sub, payload),
                            ...payload
                        })
                    })
            })
            .catch(next)
    })

module.exports = authRouter;