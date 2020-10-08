
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

    addRecipe(db, recipe, ingredients) {

        return db
            .insert(recipe)
            .into('user_recipes')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
            .then(rec => {
                let recipe_id = rec.id

                ingredients.forEach((ing) => {
                    const fullIng = { ...ing, recipe_id }
                    return db
                        .insert({ ...fullIng })
                        .into('recipe_ingredients')
                        .returning('*')
                        .catch(err => console.log(err.message))

                })
                return rec;
            })
            .catch(err => console.log(err.message))

    }

}

module.exports = RecipesService;