BEGIN;

TRUNCATE
    users,
    user_recipes,
    recipe_ingredients
    RESTART IDENTITY CASCADE;

INSERT INTO users 
(email, nickname, password) 
    VALUES
    ('r.a.reill18@gmail.com', 'Rachel', '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'),
    ('lucy@gmail.com', 'Lucy', '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'),
    ('joe@gmail.com', 'Joe', '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'),
    ('laura@gmail.com', 'Laura', '$2a$04$.8LxtFaIGB3M/qi4Z5rD.u1oOSH0uKZtGLzDpNJNm3nFEOhAMhC62');


INSERT INTO user_recipes 
(id, recipe_title, original_url, user_id) 
VALUES
    ('1','braised greens', 'https://www.countryliving.com/food-drinks/recipes/a45271/braised-greens-recipe/', 1),
    ('2','alfred sauce', 'https://www.allrecipes.com/recipe/22831/alfredo-sauce/', 1),
    ('5', 'pie crust', 'https://sallysbakingaddiction.com/all-butter-pie-crust/', 1),
    ('3','pork chops', 'https://www.inspiredtaste.net/37062/juicy-skillet-pork-chops/', 1),
    ('4','pizza sauce', 'https://www.budgetbytes.com/thick-rich-pizza-sauce/', 1);


INSERT INTO recipe_ingredients
(recipe_id, ingredient_name, amount, unit)
VALUES
    ('1', 'bacon slices', 6, null),
    ('1', 'sweet onion', 1, null),
    ('1', 'garlic cloves', 3, null),
    ('1', 'crushed red pepper', 1, 'TSP'),
    ('1', 'bunches turnip, mustard, or collard greens', '2', null),
    ('1', 'chicken stock', 8, 'CUPS'),
    ('1', 'salt', null, null),
    ('5', 'all purpose flour', 2.5, 'CUPS'),
    ('5', 'granulated sugar', 1, 'TSP'),
    ('5', 'salt', 1, 'TSP'),
    ('5', 'unsalted butter', 1, 'CUP'),
    ('5', 'ice water', 0.5, 'CUP');
    
COMMIT;
