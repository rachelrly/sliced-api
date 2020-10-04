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
    description,
    amount_str,
    amount_in_metric,
    metric_unit
)
VALUES
    (1, 'bacon', 'sliced', '6 slices', 6, null),
    (1, 'sweet onion', 'chopped', '1 onion', 1, null),
    (1, 'garlic', 'chopped', '3 cloves', 3, null),
    (1, 'crushed red pepper', null, '1 tsp', 5, 'mL'),
    (1, 'turnip, mustard, or collard greens', 'thick stems discarded and leaves chopped', '2 bunches', 2, null),
    (1, 'chicken stock', null, '8 cups', 1.9, 'L'),
    (1, 'salt', null, 'to taste', 1, null),
    (3, 'all purpose flour', 'leveled', '2 1/2 cups', 560, 'mL'),
    (3, 'granulated sugar', null, '2 teaspoons', 10, 'mL'),
    (3, 'salt', null, '1 teaspoon', 5, 'mL'),
    (3, 'unsalted butter', 'chilled and cubed', '1 cup', 450, 'grams'),
    (3, 'ice water', null, '1/2 cup', 125, 'mL');
    





COMMIT;
