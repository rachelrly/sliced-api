CREATE TABLE recipe_ingredients (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    amount_str TEXT,
    recipe_id TEXT 
        REFERENCES user_recipes(id) ON DELETE CASCADE NOT NULL
);