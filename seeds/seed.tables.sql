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
    ('test@gmail.com', 'test', '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem');


INSERT INTO user_recipes 
(id, recipe_title, original_url, user_id) 
VALUES
    ('100','braised greens', 'https://www.countryliving.com/food-drinks/recipes/a45271/braised-greens-recipe/', 1),
    ('200','alfred sauce', 'https://www.allrecipes.com/recipe/22831/alfredo-sauce/', 1),
    ('500', 'pie crust', 'https://sallysbakingaddiction.com/all-butter-pie-crust/', 1),
    ('300','pork chops', 'https://www.inspiredtaste.net/37062/juicy-skillet-pork-chops/', 1),
    ('400','pizza sauce', 'https://www.budgetbytes.com/thick-rich-pizza-sauce/', 1);


INSERT INTO recipe_ingredients
(recipe_id, ingredient_name, amount, unit)
VALUES
    ('100', 'bacon slices', 6, null),
    ('100', 'sweet onion', 1, null),
    ('100', 'garlic cloves', 3, null),
    ('100', 'crushed red pepper', 1, 'tsp'),
    ('100', 'bunches turnip, mustard, or collard greens', '2', 'cup'),
    ('100', 'chicken stock', 8, 'cup'),
    ('100', 'salt', null, null),
    ('500', 'all purpose flour', 2.5, 'cup'),
    ('500', 'granulated sugar', 1, 'tsp'),
    ('500', 'salt', 1, 'tsp'),
    ('500', 'unsalted butter', 1, 'cup'),
    ('500', 'ice water', 0.5, 'cup');
    
COMMIT;
