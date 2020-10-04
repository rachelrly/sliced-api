const express = require('express')
const xss = require('xss')
const RecipesService = require('./recipes-service')


const recipesRouter = express.Router()
const jsonParser = express.json()

const serializeRecipe = rec => ({
    id: rec.id,
    title: xss(rec.title),
    original_url: rec.original_url,
    created: rec.date_created
})

recipesRouter
    .route('/')
    .get((req, res, next) => {
        RecipesService.getAllRecipes(req.app.get('db'), 1)
            .then(rec => {
                return res
                    .status(200)
                    .json(rec.map(serializeRecipe))
            })
            .catch(next)

    })

module.exports = recipesRouter;