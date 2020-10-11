CREATE TABLE IF NOT EXISTS user_recipes(
    id TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    original_url TEXT,
    date_created TIMESTAMPTZ DEFAULT now() NOT NULL,
    user_id INTEGER 
        REFERENCES users(id) ON DELETE CASCADE NOT NULL
);
