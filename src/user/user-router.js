const express = require('express')
const UserService = require('./user-service')


const userRouter = express.Router()
const jsonParser = express.json()

userRouter
    .route('/')
    .post(jsonParser, async (req, res, next) => {
try{        const { email, name, password } = req.body;
        const newUser = { email, nickname: name, password }
        const hashedPassword = await UserService.hashPassword(password);
        console.log('HASHED PASWORD', hashedPassword)
        newUser.password = hashedPassword;

        console.log('NEW USER', newUser)

        if(!hashedPassword){
            res.status(400)
        }

       await UserService.addUser(
            req.app.get('db'),
            newUser
        )
                return res
                    .status(201).end()

       }
       catch(error){
           console.log(error)
       }

    })


module.exports = userRouter;