import { Box, Flex, Heading, List, ListItem, Checkbox } from '@chakra-ui/react';

import RecipeCard from './RecipeCard';

const recipes = [
  {
    title: 'Spaghetti',
    rating: 4,
    description: 'Delicious spaghetti with tomato sauce.',
    timeToPrepare: 30,
    numberOfIngredients: 6,
    averageCostPerDish: 5,
  },
  {
    title: 'Grilled Cheese',
    rating: 5,
    description: 'Always a banger.',
    timeToPrepare: 10,
    numberOfIngredients: 3,
    averageCostPerDish: 2,
  },
  {
    title: 'Smoked Salmon Salad',
    rating: 3,
    description: 'Not as popular with children.',
    timeToPrepare: 15,
    numberOfIngredients: 5,
    averageCostPerDish: 8,
  },
  {
    title: 'Pancakes',
    rating: 5,
    description: 'A classic.',
    timeToPrepare: 20,
    numberOfIngredients: 5,
    averageCostPerDish: 4,
  },
  {
    title: 'Chicken Noodle Soup',
    rating: 4,
    description: 'Perfect for a cold day.',
    timeToPrepare: 30,
    numberOfIngredients: 8,
    averageCostPerDish: 6,
  },
];

const shoppingList = [
  'Eggs',
  'Milk',
  'Bread',
  'Sour Cream',
  'Butter',
  'Salt',
  'Pepper',
  'Olive Oil',
  'Chicken',
  'Beef',
];

const Dashboard = () => {
  return (
    <Flex>
      {/* Content */}
      <Flex flexGrow={1} overflow="hidden" height="calc(100vh - 180px)">
        {/* Recipe Cards */}
        <Box flex="2" overflowY="auto" p={4} borderRightWidth="1px">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </Box>

        {/* Shopping List */}
        <Box flex="1" overflowY="auto" p={4}>
          <Heading size="lg" mb={4}>
            Shopping List
          </Heading>
          <List spacing={3}>
            {shoppingList.map((item, index) => (
              <ListItem key={index}>
                <Checkbox size="lg">{item}</Checkbox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
