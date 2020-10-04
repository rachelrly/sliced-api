const IngredientsService = {

    getAllIngredients(db, recipe_id) {
        return db
            .select(
                'id',
                'title',
                'description',
                'amount_str',
                'amount_in_metric',
                'metric_unit',
            )
            .from('recipe_ingredients')
            .where('recipe_id', recipe_id)
    },

    getIngredientById(db, recipe_id, id) {
        return db
            .from('recipe_ingredients')
            .select(
                'id',
                'title',
                'description',
                'amount_str',
                'amount_in_metric',
                'metric_unit',
            )
            .where('id', id)
            .where('recipe_id', recipe_id)
            .first()
    },

    deleteIngredient(db, id) {
        return db
            .from('recipe_ingredients')
            .where({ id })
            .delete()
    }
}

module.exports = IngredientsService;