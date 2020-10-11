BEGIN;

TRUNCATE
    users,
    user_recipes,
    recipe_ingredients
    RESTART IDENTITY CASCADE;

INSERT INTO users (
    email, 
    nickname, 
    password
) VALUES
    ('r.a.reill18@gmail.com', 'Rachel', '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'
),
    ('lucy@gmail.com', 'Lucy', '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'
),
    ('joe@gmail.com', 'Joe', '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'
),
    ('laura@gmail.com', 'Laura', '$2a$04$.8LxtFaIGB3M/qi4Z5rD.u1oOSH0uKZtGLzDpNJNm3nFEOhAMhC62');


INSERT INTO user_recipes (
    id,
    title, 
    original_url, 
    user_id
) VALUES
    ('ckg5nmmqn000001mid4pd6z7f','braised greens', 'https://www.countryliving.com/food-drinks/recipes/a45271/braised-greens-recipe/', 1),
    ('2','alfred sauce', 'https://www.allrecipes.com/recipe/22831/alfredo-sauce/', 1),
    ('ckg5nnn4z000201mi7gp44ksz', 'pie crust', 'https://sallysbakingaddiction.com/all-butter-pie-crust/', 1),
    ('3','pork chops', 'https://www.inspiredtaste.net/37062/juicy-skillet-pork-chops/', 1),
    ('4','pizza sauce', 'https://www.budgetbytes.com/thick-rich-pizza-sauce/', 1);


INSERT INTO recipe_ingredients(
    recipe_id,
    title,
    amount_str
)
VALUES
    ('ckg5nmmqn000001mid4pd6z7f', 'bacon', '6 slices'),
    ('ckg5nmmqn000001mid4pd6z7f', 'sweet onion', '1 onion'),
    ('ckg5nmmqn000001mid4pd6z7f', 'garlic', '3 cloves'),
    ('ckg5nmmqn000001mid4pd6z7f', 'crushed red pepper', '1 tsp'),
    ('ckg5nmmqn000001mid4pd6z7f', 'turnip, mustard, or collard greens', '2 bunches'),
    ('ckg5nmmqn000001mid4pd6z7f', 'chicken stock', '8 cups'),
    ('ckg5nmmqn000001mid4pd6z7f', 'salt', null),
    ('ckg5nnn4z000201mi7gp44ksz', 'all purpose flour', '2 1/2 cups'),
    ('ckg5nnn4z000201mi7gp44ksz', 'granulated sugar', '2 teaspoons'),
    ('ckg5nnn4z000201mi7gp44ksz', 'salt', '1 teaspoon'),
    ('ckg5nnn4z000201mi7gp44ksz', 'unsalted butter', '1 cup'),
    ('ckg5nnn4z000201mi7gp44ksz', 'ice water', '1/2 cup');
    





COMMIT;
