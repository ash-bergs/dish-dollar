import React, { useState } from 'react';
import { RECIPES } from '@/data';
import ExpandedRecipeCard from './RecipeCard';
import {
  Input,
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Heading,
} from '@chakra-ui/react';

const AllRecipesView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

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
    <Box>
      <Heading mb={4}>All Recipes</Heading>

      {/* Functionality UI */}
      <Box mb={6}>
        {/* Search Bar */}
        <Input
          mb={4}
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Radio Buttons */}
        <RadioGroup
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        >
          <Stack direction="row">
            <Radio value="Breakfast">Breakfast</Radio>
            <Radio value="Lunch">Lunch</Radio>
            <Radio value="Dinner">Dinner</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Flex gap={2} flexWrap={'wrap'}>
        {filteredRecipes.map((recipe, index) => (
          <ExpandedRecipeCard key={index} recipe={recipe} />
        ))}
      </Flex>
    </Box>
  );
};

export default AllRecipesView;
