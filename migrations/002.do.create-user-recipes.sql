CREATE TABLE user_recipes(
    id SERIAL PRIMARY KEY,
    title TEXT,
    user_id INTEGER 
        REFERENCES users(id) ON DELETE CASCADE NOT NULL

)