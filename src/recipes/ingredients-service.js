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
    async addIngredients(db, ingredient) {
        console.log(ingredient)
        return db
            .insert(ingredient)
            .into('recipe_ingredients')

    },
    formatFractions(amount) {
        const match = amount.match(/\D/);
        if (match) {
            if (match[0] === '/') {
                if (match.index === 1) {
                    //if matched first character
                    return amount[0] / amount[2];
                }
            }
            const len = amount.length;
            const denominator = amount[len - 1]
            const numerator = amount[len - 3]

            const constant = Number(amount.slice(0, len - 3))

            const decimal = numerator / denominator;

            return constant + decimal
        }
        else {
            return Number(amount);
        }
    }

}

module.exports = IngredientsService;