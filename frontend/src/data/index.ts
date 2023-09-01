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
  // ... Add other ingredients as necessary
];

const recipes = [
  {
    title: 'Spaghetti',
    rating: 4,
    description: 'Delicious spaghetti with tomato sauce.',
    timeToPrepare: 30,
    averageCostPerDish: 5,
    category: 'Dinner',
    image: 'path_to_image.jpg', // You'll want to add an actual image path here
    ingredients: [
      { ...ingredients[0], quantity: 200, unit: 'grams' },
      { ...ingredients[1], quantity: 100, unit: 'grams' },
    ],
    instructions: {
      1: 'Boil water in a pot.',
      2: 'Add spaghetti and cook until al dente.',
      3: 'In a separate pot, heat tomato sauce.',
      4: 'Drain spaghetti and add to the pot with sauce. Stir well.',
    },
  },
  {
    title: 'Grilled Cheese',
    rating: 5,
    description: 'Always a banger.',
    timeToPrepare: 10,
    averageCostPerDish: 2,
    category: 'Lunch',
    image: 'path_to_image.jpg', // You'll want to add an actual image path here
    ingredients: [
      { ...ingredients[4], quantity: 2, unit: 'slices' },
      { ...ingredients[5], quantity: 2, unit: 'slices' },
      { ...ingredients[3], quantity: 2, unit: 'slices' },
    ],
    instructions: {
      1: 'Butter one side of each slice of bread.',
      2: 'Place one slice of bread butter-side down on a skillet.',
      3: 'Add cheese slices.',
      4: 'Top with second slice of bread, butter-side up.',
      5: 'Cook until golden brown on each side.',
    },
  },
  {
    title: 'Smoked Salmon Salad',
    rating: 3,
    description: 'Not as popular with children.',
    timeToPrepare: 15,
    averageCostPerDish: 8,
    category: 'Lunch',
    image: 'path_to_image.jpg', // You'll want to add an actual image path here
    ingredients: [
      { ...ingredients[7], quantity: 100, unit: 'grams' },
      { ...ingredients[6], quantity: 100, unit: 'grams' },
      { ...ingredients[8], quantity: 100, unit: 'grams' },
      { ...ingredients[9], quantity: 50, unit: 'grams' },
      { ...ingredients[10], quantity: 100, unit: 'grams' },
    ],
  },
  {
    title: 'Pancakes',
    rating: 5,
    description: 'A classic.',
    timeToPrepare: 20,
    averageCostPerDish: 4,
    category: 'Breakfast',
    image: 'path_to_image.jpg', // You'll want to add an actual image path here
    ingredients: [
      { ...ingredients[9], quantity: 200, unit: 'grams' },
      { ...ingredients[11], quantity: 100, unit: 'grams' },
      { ...ingredients[12], quantity: 50, unit: 'grams' },
      { ...ingredients[13], quantity: 50, unit: 'grams' },
    ],
  },
  {
    title: 'Chicken Noodle Soup',
    rating: 4,
    description: 'Perfect for a cold day.',
    timeToPrepare: 30,
    averageCostPerDish: 6,
    category: 'Dinner',
    image: 'path_to_image.jpg', // You'll want to add an actual image path here
    ingredients: [
      { ...ingredients[10], quantity: 1, unit: 'liter' },
      { ...ingredients[11], quantity: 200, unit: 'grams' },
      { ...ingredients[12], quantity: 100, unit: 'grams' },
      { ...ingredients[13], quantity: 100, unit: 'grams' },
      { ...ingredients[14], quantity: 100, unit: 'grams' },
    ],
  },
];
