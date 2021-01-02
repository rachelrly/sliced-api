CREATE TABLE recipe_ingredients (
    id SERIAL PRIMARY KEY,
    ingredient_name TEXT NOT NULL,
    amount DECIMAL(3,2),
    unit TEXT,
    recipe_id TEXT 
        REFERENCES user_recipes(id) ON DELETE CASCADE NOT NULL
);