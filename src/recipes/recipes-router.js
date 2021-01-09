const express = require('express')
const xss = require('xss')
const IngredientsService = require('./ingredients-service')
const RecipesService = require('./recipes-service');
const requireAuth = require('../middleware/jwt-auth');


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
  .route('/')
  .post(requireAuth, jsonParser, async (req, res, next) => {
    const user_id = req.user.id;
    const { title, ingredients } = req.body;
    const newRecipe = { recipe_title: title, user_id };

    const [{ id }] = await RecipesService.addRecipe(
      req.app.get('db'),
      newRecipe
    )
    Promise.all(
      ingredients.map(async (ingredient) => {
        const amount = ingredient.amount ? IngredientsService.formatFractions(ingredient.amount) : null
        const i = { ...ingredient, amount, recipe_id: id }
        await IngredientsService.addIngredients(
          req.app.get('db'),
          i
        )
      }))
    return res
      .status(201)
      .json()

  })



recipesRouter
  .route('/:id')
  .delete((req, res, next) => {
    RecipesService.deleteRecipe(
      req.app.get('db'),
      req.params.id
    )
      .then(()=> {
        return res
          .status(204)
          .end()
      })
      .catch(next)
  })

module.exports = recipesRouter;