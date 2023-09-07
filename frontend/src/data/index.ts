const ingredients = [
  { id: 1, name: 'Spaghetti', substitutions: [] },
  { id: 2, name: 'Tomato Sauce', substitutions: [3] },
  { id: 3, name: 'Pesto', substitutions: [] },
  { id: 4, name: 'Bread', substitutions: [] },
  { id: 5, name: 'Cheddar Cheese', substitutions: [6] },
  { id: 6, name: 'Mozzarella Cheese', substitutions: [] },
  { id: 7, name: 'Salmon', substitutions: [] },
  { id: 8, name: 'Lettuce', substitutions: [] },
  { id: 9, name: 'Pancake Mix', substitutions: [] },
  { id: 10, name: 'Chicken Broth', substitutions: [] },
  { id: 11, name: 'Chicken Breast', substitutions: [] },
  { id: 12, name: 'Carrots', substitutions: [] },
  { id: 13, name: 'Celery', substitutions: [] },
  { id: 14, name: 'Onion', substitutions: [] },
];

export const RECIPES = [
  {
    title: 'Spaghetti',
    rating: 4,
    description: 'Delicious spaghetti.',
    timeToPrepare: 30,
    averageCostPerDish: 5,
    category: 'Dinner',
    ingredients: [
      { ...ingredients[0], quantity: 200, unit: 'grams' },
      { ...ingredients[1], quantity: 100, unit: 'grams' },
    ],
    instructions: [
      'Boil water in a pot.',
      'Add spaghetti and cook until al dente.',
      'In a separate pot, heat tomato sauce.',
      'Drain spaghetti and add to the pot with sauce. Stir well.',
    ],
  },
  {
    title: 'Grilled Cheese',
    rating: 5,
    description: 'Always a banger.',
    timeToPrepare: 10,
    averageCostPerDish: 2,
    category: 'Lunch',
    ingredients: [
      { ...ingredients[4], quantity: 2, unit: 'slices' },
      { ...ingredients[5], quantity: 2, unit: 'slices' },
      { ...ingredients[3], quantity: 2, unit: 'slices' },
    ],
    instructions: [
      'Butter one side of each slice of bread.',
      'Place one slice of bread butter-side down on a skillet.',
      'Add cheese slices.',
      'Top with second slice of bread, butter-side up.',
      'Cook until golden brown on each side.',
    ],
  },
  {
    title: 'Smoked Salmon Salad',
    rating: 3,
    description: 'Not as popular with children.',
    timeToPrepare: 15,
    averageCostPerDish: 8,
    category: 'Lunch',
    ingredients: [
      { ...ingredients[7], quantity: 100, unit: 'grams' },
      { ...ingredients[6], quantity: 100, unit: 'grams' },
      { ...ingredients[8], quantity: 100, unit: 'grams' },
      { ...ingredients[9], quantity: 50, unit: 'grams' },
      { ...ingredients[10], quantity: 100, unit: 'grams' },
    ],
    instructions: [
      'Wash and dry lettuce.',
      'Chop lettuce into bite-sized pieces.',
      'Slice salmon into thin strips.',
      'Peel and slice carrots into thin strips.',
      'Slice celery into thin strips.',
      'Slice onion into thin strips.',
      'Combine all ingredients in a bowl.',
      'Add pancake mix.',
      'Mix well.',
    ],
  },
  {
    title: 'Pancakes',
    rating: 5,
    description: 'A classic.',
    timeToPrepare: 20,
    averageCostPerDish: 4,
    category: 'Breakfast',
    ingredients: [
      { ...ingredients[9], quantity: 200, unit: 'grams' },
      { ...ingredients[11], quantity: 100, unit: 'grams' },
      { ...ingredients[12], quantity: 50, unit: 'grams' },
      { ...ingredients[13], quantity: 50, unit: 'grams' },
    ],
    instructions: [
      'Add pancake mix.',
      'Mix well.',
      'Heat a pan on medium heat.',
      'Add a small amount of oil to the pan.',
      'Pour a small amount of batter into the pan.',
      'Cook until golden brown on each side.',
    ],
  },
  {
    title: 'Chicken Noodle Soup',
    rating: 4,
    description: 'Perfect for a cold day.',
    timeToPrepare: 30,
    averageCostPerDish: 6,
    category: 'Dinner',
    image: '/stock-salad.avif', // You'll want to add an actual image path here
    ingredients: [
      { ...ingredients[10], quantity: 1, unit: 'liter' },
      { ...ingredients[11], quantity: 200, unit: 'grams' },
      { ...ingredients[12], quantity: 100, unit: 'grams' },
      { ...ingredients[13], quantity: 100, unit: 'grams' },
      { ...ingredients[14], quantity: 100, unit: 'grams' },
    ],
    instructions: [
      'Chop carrots, celery, and onion into bite-sized pieces.',
      'Add chicken broth to a pot.',
      'Add chicken and vegetables to the pot.',
      'Cook on medium heat until chicken is cooked through.',
      'Add noodles and cook until al dente.',
    ],
  },
];

type PantryItem = {
  id: number;
  pantryId: number;
  ingredientId: number;
  initialAmount: number;
  unit: string;
  quantityInStock: number;
  item: string;
  type: 'dairy' | 'produce' | 'pantry' | 'staple' | 'frozen';
  cost: number;
  costUnit: string;
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
export const pantryItems: PantryItem[] = [
  {
    id: 1,
    pantryId: 1,
    item: 'Milk',
    ingredientId: 10,
    type: 'dairy',
    initialAmount: 1,
    unit: 'gallon',
    quantityInStock: 0.2,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 2,
    pantryId: 1,
    item: 'Eggs',
    ingredientId: 11,
    type: 'dairy',
    initialAmount: 12,
    unit: 'count',
    quantityInStock: 0.5,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 3,
    pantryId: 1,
    item: 'Butter',
    ingredientId: 12,
    type: 'dairy',
    initialAmount: 1,
    unit: 'pound',
    quantityInStock: 0.5,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 4,
    pantryId: 1,
    item: 'Cheese',
    ingredientId: 13,
    type: 'dairy',
    initialAmount: 1,
    unit: 'pound',
    quantityInStock: 0.3,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 5,
    pantryId: 1,
    item: 'Apples',
    ingredientId: 20,
    type: 'produce',
    initialAmount: 6,
    unit: 'count',
    quantityInStock: 1,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 6,
    pantryId: 1,
    item: 'Bananas',
    ingredientId: 21,
    type: 'produce',
    initialAmount: 6,
    unit: 'count',
    quantityInStock: 0.5,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 7,
    pantryId: 1,
    item: 'Carrots',
    ingredientId: 22,
    type: 'produce',
    initialAmount: 1,
    unit: 'pound',
    quantityInStock: 1,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 8,
    pantryId: 1,
    item: 'Potatoes',
    ingredientId: 23,
    type: 'produce',
    initialAmount: 5,
    unit: 'pound',
    quantityInStock: 0.75,
    cost: 2.99,
    costUnit: 'dollars',
  },
  {
    id: 9,
    pantryId: 1,
    item: 'Onions',
    ingredientId: 24,
    type: 'produce',
    initialAmount: 3,
    unit: 'count',
    quantityInStock: 0.75,
    cost: 2.99,
    costUnit: 'dollars',
  },
];
