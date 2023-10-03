import React from 'react';
import { useAtom } from 'jotai';
import { RECIPES } from '~/data';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import { searchAtom, categoryAtom } from '~/lib/store/recipes.store';
import ActionsBar from './ActionsBar';
import ExpandedRecipeCard from '../../RecipeCard/RecipeCard';
import Header from './Header';

const AllRecipesView = () => {
  const [searchTerm] = useAtom(searchAtom);
  const [selectedCategory] = useAtom(categoryAtom);

  // Filtering logic
  const filteredRecipes = RECIPES.filter((recipe) => {
    if (selectedCategory && recipe.category !== selectedCategory) {
      return false;
    }
    if (
      searchTerm &&
      !recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <Box px={8} py={4}>
      <Header />
      <Divider my={2} />
      <ActionsBar />
      <Flex gap={6} flexWrap={'wrap'}>
        {filteredRecipes.map((recipe, index) => (
          <ExpandedRecipeCard key={index} recipe={recipe} />
        ))}
      </Flex>
    </Box>
  );
};

export default AllRecipesView;
