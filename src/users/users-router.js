const express = require('express')
const UsersService = require('./users-service')


const usersRouter = express.Router()
const jsonParser = express.json()

usersRouter
    .route('/')
    .get((req, res, next) => {
        UsersService.getUsers(req.app.get('db'))
            .then(users => {
                return res
                    .status(200)
                    .json(users)
            })
    })





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