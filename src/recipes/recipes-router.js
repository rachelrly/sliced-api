const express = require('express')
const xss = require('xss')
const RecipesService = require('./recipes-service')
const IngredientsService = require('./ingredients-service')


const recipesRouter = express.Router()
const jsonParser = express.json()

const serializeRecipe = rec => ({
    id: rec.id,
    title: xss(rec.title),
    original_url: xss(rec.original_url),
    created: rec.date_created
})

const serializeIngredient = ing => ({
    id: ing.id,
    title: xss(ing.title),
    amount_str: xss(ing.amount_str),
})


//Path to all recipes
recipesRouter
    .route('/:user')

    .get((req, res, next) => {
        const user_id = req.params.user;
        RecipesService.getAllRecipes(
            req.app.get('db'),
            user_id)
            .then(rec => {
                return res
                    .status(200)
                    .json(rec.map(serializeRecipe))
            })
            .catch(next)

    })
    .post(jsonParser, (req, res, next) => {
        const user_id = req.params.user;
        const { title, original_url, ingredients, id } = req.body;
        const newRecipe = { title, original_url, user_id, id };

        RecipesService.addRecipe(
            req.app.get('db'),
            newRecipe,
            ingredients
        )
            .then(rec => {
                console.log(rec)
                return res
                    .status(201)
                    .json(serializeRecipe)
            })

            .catch(next)
    })



recipesRouter
    .route('/:user/:id')

    .get((req, res, next) => {
        RecipesService.getRecipeById(
            req.app.get('db'),
            req.params.id,
            req.params.user
        )
            .then(rec => {
                return res
                    .status(200)
                    .json(serializeRecipe(rec))
            })
            .catch(next)
    })

    .delete((req, res, next) => {
        RecipesService.deleteRecipe(
            req.app.get('db'),
            req.params.id
        )
            .then(rec => {
                return res
                    .status(204)
                    .end()
            })
            .catch(next)
    })




recipesRouter
    .route('/:user/:id/ingredients')

    .get((req, res, next) => {
        IngredientsService.getAllIngredients(
            req.app.get('db'),
            req.params.id
        )
            .then(rec => {
                return res
                    .status(200)
                    .json(rec.map(serializeIngredient))
            })

            .catch(next)
    })

module.exports = recipesRouter;