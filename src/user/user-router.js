const express = require('express')
const UserService = require('./user-service')


const userRouter = express.Router()
const jsonParser = express.json()

userRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        const { email, nickname, password } = req.body;
        const newUser = { email, nickname, password }
        const hashedPassword = UserService.hashPassword(password);
        newUser.password = hashedPassword;

        UserService.addUser(
            req.app.get('db'),
            newUser
        )
            .then(user => {
                return res
                    .status(201);
            })
    })


module.exports = userRouter;