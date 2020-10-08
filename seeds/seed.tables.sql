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
    ('r.a.reill18@gmail.com', 'Rachel', 'rac-password'),
    ('lucy@gmail.com', 'Lucy', 'luc-password'),
    ('joe@gmail.com', 'Joe', 'joe-password'),
    ('laura@gmail.com', 'Laura', 'lau-password'),
    ('sara@gmail.com', 'Sara', 'sar-password');


INSERT INTO user_recipes (
    title, 
    original_url, 
    user_id
) VALUES
    ('braised greens', 'https://www.countryliving.com/food-drinks/recipes/a45271/braised-greens-recipe/', 1),
    ('alfred sauce', 'https://www.allrecipes.com/recipe/22831/alfredo-sauce/', 1),
    ('pie crust', 'https://sallysbakingaddiction.com/all-butter-pie-crust/', 1),
    ('pork chops', 'https://www.inspiredtaste.net/37062/juicy-skillet-pork-chops/', 1),
    ('pizza sauce', 'https://www.budgetbytes.com/thick-rich-pizza-sauce/', 1);


INSERT INTO recipe_ingredients(
    recipe_id,
    title,
    amount_str
)
VALUES
    (1, 'bacon', '6 slices'),
    (1, 'sweet onion', '1 onion'),
    (1, 'garlic', '3 cloves'),
    (1, 'crushed red pepper', '1 tsp'),
    (1, 'turnip, mustard, or collard greens', '2 bunches'),
    (1, 'chicken stock', '8 cups'),
    (1, 'salt', null),
    (3, 'all purpose flour', '2 1/2 cups'),
    (3, 'granulated sugar', '2 teaspoons'),
    (3, 'salt', '1 teaspoon'),
    (3, 'unsalted butter', '1 cup'),
    (3, 'ice water', '1/2 cup');
    





COMMIT;
