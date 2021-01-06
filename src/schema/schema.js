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
  DateTime,
  InputType,
  OutputType
} = graphql;


const IngredientType = new GraphQLObjectType({
  name: 'Ingredient',
  fields: () => ({
    id: { type: GraphQLID },
    amount: { type: GraphQLFloat },
    unit: { type: UnitEnumType },
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
    cup: {
      value: 'cup'
    },
    tsp: {
      value: 'tsp'
    },
    tbsp: {
      value: 'tbsp'
    },
    oz: {
      value: 'ounce'
    },
    lb: {
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
        return RecipeService.getAllRecipes(context.db, context.user_id)
      }
    }
  }
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    addRecipe: {
      type: RecipeType,
      args: {
        id: { type: OutputType },
        recipe_title: { type: OutputType }
      },
      resolve(parent, args, context) {
        const { id, recipe_title } = args;
        RecipeService.addRecipe(context.db, { id, recipe_title });
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});