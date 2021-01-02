const RecipeService = require('../recipes/recipes-service');
const IngredientService = require('../recipes/ingredients-service')
const graphql = require('graphql');
const IngredientsService = require('../recipes/ingredients-service');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  DateTime
} = graphql;

//removed unit for testing
const IngredientType = new GraphQLObjectType({
  name: 'Ingredient',
  fields: () => ({
    id: { type: GraphQLID },
    amount: { type: GraphQLFloat },
    ingredient_name: { type: GraphQLString },
    recipe_id: { type: GraphQLID }
  })
})

const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    id: { type: GraphQLID },
    recipe_title: { type: GraphQLString },
    date_created: { type: GraphQLString },
    user_id: { type: GraphQLID },
    ingredients: {
      type: new GraphQLList(IngredientType),
      resolve(parent, args, context) {
        return IngredientsService.getAllIngredients(context.db, parent.id)
      }
    }
  })
})

const UnitEnumType = new GraphQLEnumType({
  name: 'UnitStateEnum',
  values: {
    CUP: {
      value: 'cup'
    },
    TSP: {
      value: 'tsp'
    },
    TBSP: {
      value: 'tbsp'
    },
    OZ: {
      value: 'ounce'
    },
    LB: {
      value: 'pound'
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args, context) {
        return RecipeService.getRecipeById(context.db, args.id)
      }
    },
    recipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args, context) {
        return RecipeService.getAllRecipes(context.db, 1)
      }
    },
    ingredient: {
      type: IngredientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args, context) {
        return
      }
    },
    ingredients: {
      type: new GraphQLList(IngredientType),
      resolve(parent, args) {
        return
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
});