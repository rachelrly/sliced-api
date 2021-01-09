CREATE TABLE recipe_ingredients (
    id SERIAL PRIMARY KEY,
    ingredient_name TEXT NOT NULL,
    amount DECIMAL(3,2),
    recipe_id INTEGER
        REFERENCES user_recipes(id) ON DELETE CASCADE NOT NULL
);