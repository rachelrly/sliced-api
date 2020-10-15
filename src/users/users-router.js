const express = require('express')
const UsersService = require('./users-service')


const usersRouter = express.Router()
const jsonParser = express.json()

usersRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        const { email, nickname, password } = req.body;
        const newUser = { email, nickname, password }
        UsersService.addUser(
            req.app.get('db'),
            newUser
        )
            .then(user => {
                return res
                    .status(201)
                    .json(user)
            })
    })


module.exports = usersRouter;