// all of the props here should also be in the Recipe type
// we just want to render more of them here, but both components are using the same type, the same data
// let's think about ingredients - this should be a type of its own
// an array of objects? with the id, name, quantity, unit, substitutions
// substitutions should be an array of ingredient ids - referencing the other ingredients in the database
// we'll probably wnat to create an ingredients table in the database to store this information

// Ingredient should just be id, name, and substitutions - these will exist on the actual table in the database
// but we need to 'enrich' the data we get from the database with the quantity and unit for the recipe
// should the substitution be an 'enriched' item as well?
// we'll no longer need a "numberOfIngredients" field, we can just count the number of ingredients in the array

// database model should look like this
export type Ingredient = {
  id: number;
  name: string;
  substitutions: number[];
};

// recipe needs quantity and unit:
export type IngredientWithQuantity = Ingredient & {
  quantity: number;
  unit: string;
};

export type Recipe = {
  category: string;
  title: string;
  rating: number;
  image: string;
  description: string;
  timeToPrepare: number;
  averageCostPerDish: number;
  ingredients: IngredientWithQuantity[];
  instructions: string[];
};
