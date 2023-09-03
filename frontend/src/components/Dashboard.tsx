import { Box, Flex, Heading, List, ListItem, Checkbox } from '@chakra-ui/react';

import SavedRecipeCard from './SavedRecipeCard';

import { RECIPES } from '@/data';

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
          <Heading size="lg" mb={4}>
            Your Recipes
          </Heading>
          {RECIPES.map((recipe, index) => (
            <SavedRecipeCard key={index} recipe={recipe} />
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
