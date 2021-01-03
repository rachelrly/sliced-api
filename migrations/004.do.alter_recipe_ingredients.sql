CREATE TYPE UNITS AS ENUM (
  'cup',
  'tbsp',
  'tsp',
  'oz',
  'lb',
  'gallon',
  'gram',
  'liter',
  'pint',
  'quart'
);

ALTER TABLE recipe_ingredients
ADD COLUMN
unit UNITS;