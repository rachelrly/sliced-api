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

    getIngredientById(db, recipe_id, id) {
        return db
            .from('recipe_ingredients')
            .select(
                'id',
                'title',
                'amount_str'
            )
            .where('id', id)
            .where('recipe_id', recipe_id)
            .first()
    },

    deleteIngredient(db, recipe_id, id) {
        return db
            .from('recipe_ingredients')
            .where('recipe_id', recipe_id)
            .where({ id })
            .delete()
    },

    addIngredient(db, recipe_id, ingredient) {
        return db
            .insert(ingredient)
            .into('recipe_ingredients')
            .where('recipe_id', recipe_id)
            .returning('*')
            .then(rows => {
                return rows[0]
            })


    }
}

module.exports = IngredientsService;