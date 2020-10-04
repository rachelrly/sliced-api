DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    email TEXT NOT NULL,
    nickname TEXT,
    password TEXT NOT NULL
);