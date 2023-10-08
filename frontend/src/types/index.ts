// cheatsheets: https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
// all of the props here should also be in the Recipe type
// we just want to render more of them here, but both components are using the same type, the same data
// let's think about ingredients - this should be a type of its own
// an array of objects? with the id, name, quantity, unit, substitutions
// substitutions should be an array of ingredient ids - referencing the other ingredients in the database
// we'll probably wnat to create an ingredients table in the database to store this information

// Ingredient should just be id, name, and substitutions - these will exist on the actual table in the database
// but we need to 'enrich' the data we get from the database with the quantity and unit for the recipe
// we'll no longer need a "numberOfIngredients" field, we can just count the number of ingredients in the array

// database model should look like this
export type Ingredient = {
  id: number;
  name: string;
};

// recipe needs quantity and unit:
export type IngredientWithQuantity = Ingredient & {
  quantity: number;
  unit: string;
  substitutions: number[];
};

export type Recipe = {
  category: string;
  title: string;
  rating: number;
  image?: string;
  description: string;
  timeToPrepare: number;
  averageCostPerDish: number;
  ingredients: IngredientWithQuantity[];
  instructions: string[];
};

/**
 * model PantryIngredient {
  id            Int     @id @default(autoincrement())
  pantryId      Int     // This will be a foreign key to Pantry.id in the database
  ingredientId  Int     // This will be a foreign key to Ingredient.id in the database
  quantityInStock Float
  initialAmount Int? // Allow option to track initial amount of ingredient 
  unit          String?
  // TODO: type - everything below this line is a TODO
  type         String? // This will be a foreign key to Ingredient.type in the database? Or should it be an enum?
  cost        Float? // Allow option to track cost of ingredient
  costUnit    String?
}
 */

export type PantryItem = {
  id: number;
  pantryId: number;
  ingredientId: number;
  initialAmount: number;
  unit: string;
  quantityInStock: number;
  name: string;
  type: 'dairy' | 'produce' | 'pantry' | 'staple' | 'frozen';
  cost: number;
  costUnit: string;
};

/** Objects to support unit measurements - applies largely to Pantry items  */
// TODO: Identify if this should go here? It's note really a type
const commonUnits = ['pound', 'ounce', 'kilogram', 'gram', 'unit'];
const dairyUnits = [
  'gallon',
  'quart',
  'pint',
  'cup',
  'stick',
  'tablespoon',
  'teaspoon',
  'slice',
];

export const pantryItemUnits = {
  dairy: [...dairyUnits, ...commonUnits],
  produce: [...commonUnits],
  pantry: [...commonUnits],
  staple: [...commonUnits],
  frozen: [...commonUnits],
};

// 🏗️ Component types
//TODO: Types module - what's the best way? Research this
// Make children prop required
export type PropsWithChildren<P = unknown> = P & { children: React.ReactNode };
