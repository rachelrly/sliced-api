const IngredientsService = {

    getAllIngredients(db, recipe_id) {
        return db
            .select(
                'id',
                'title',
                'amount_str',
            )
            .from('recipe_ingredients')
            .where('recipe_id', recipe_id)
    },

}

module.exports = IngredientsService;