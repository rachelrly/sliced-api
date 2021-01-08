
const RecipesService = {

    getAllRecipes(db, user_id) {
        console.log('USER ID FROM RECIPES', user_id)
        return db
            .select(
                'id',
                'recipe_title',
                'original_url',
                'date_created'
            )
            .from('user_recipes')
            .where('user_id', user_id)
            .orderBy('date_created', 'desc')
    },

    getRecipeById(db, id) {
        return db
            .from('user_recipes')
            .select(
                'id',
                'recipe_title',
                'original_url',
                'date_created'
            )
            .where('id', id)
            .first()
    },

    deleteRecipe(db, id) {
        return db
            .from('user_recipes')
            .where({ id })
            .delete()
    },

    addRecipe(db, recipe) {
        return db
            .insert(recipe)
            .into('user_recipes')
    }

}

module.exports = RecipesService;