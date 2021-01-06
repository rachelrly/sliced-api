const IngredientsService = {

    getAllIngredients(db, recipe_id) {
        return db
            .select(
                'id',
                'ingredient_name',
                'amount',
                'unit'
            )
            .from('recipe_ingredients')
            .where('recipe_id', recipe_id)
    },
    addIngredients(db, ingredient) {
        return db
            .insert(ingredient)
            .into('recipe_ingredients')

    }

}

module.exports = IngredientsService;