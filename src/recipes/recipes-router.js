const express = require('express')
const xss = require('xss')
const RecipesService = require('./recipes-service')


const recipesRouter = express.Router()
const jsonParser = express.json()

const serializeRecipe = recipe => ({

})

recipesRouter
    .route('/')

    .get((req, res, next) => {





    })