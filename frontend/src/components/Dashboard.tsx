import { Box, Flex, Heading } from '@chakra-ui/react';
import SavedRecipeCard from './SavedRecipeCard';
import ShoppingList from './ShoppingList';

import { RECIPES } from '~/data';

const Dashboard = () => {
  return (
    <Flex>
      {/* Content */}
      <Flex flexGrow={1} overflow="hidden" height="calc(100vh - 80px)">
        {/* Recipe Cards */}
        <Box flex={2} overflowY="auto" p={4} borderRightWidth="1px">
          <Heading size="xl" mb={4}>
            Your Recipes
          </Heading>
          {RECIPES.map((recipe, index) => (
            <SavedRecipeCard key={index} recipe={recipe} />
          ))}
        </Box>

        <ShoppingList />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
