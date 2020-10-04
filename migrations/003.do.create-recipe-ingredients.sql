CREATE TABLE recipe_ingredients (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    amount_str TEXT NOT NULL,
    amount_in_metric NUMERIC NOT NULL,
    metric_unit TEXT,
    recipe_id INTEGER  
        REFERENCES user_recipes(id) ON DELETE CASCADE NOT NULL
);