const RecipesService = {

    getAllRecipes(db, user_id) {
        return db
            .select(
                'id',
                'title',
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
                'title',
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

    getFullRecipe(db, id) {
        return db
            .from()
    }



}

module.exports = RecipesService;