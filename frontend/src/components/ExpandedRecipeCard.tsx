// this is going to be a lot like the RecipeCard
// but we'll want to expand on what a recipe will look like
// both in the database and in the frontend
// we'll want to be able to edit the recipe
import { useState } from 'react';
import { Box, Collapse, Flex, Heading, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// all of the props here should also be in the Recipe type
// we just want to render more of them here, but both components are using the same type, the same data
// let's think about ingredients - this should be a type of its own
// an array of objects? with the id, name, quantity, unit, substitutions
// substitutions should be an array of ingredient ids - referencing the other ingredients in the database
// we'll probably wnat to create an ingredients table in the database to store this information
// instructions should be an object with numbered keys?

// Ingredient should just be id, name, and substitutions - these will exist on the actual table in the database
// but we need to 'enrich' the data we get from the database with the quantity and unit for the recipe
// we'll no longer need a "numberOfIngredients" field, we can just count the number of ingredients in the array

type Instructions = {
  [key: number]: string;
};

// database model should look like this
type Ingredient = {
  id: number;
  name: string;
  substitutions: number[];
};

// recipe needs quantity and unit:
type IngredientWithQuantity = Ingredient & {
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
  numberOfIngredients: number;
  averageCostPerDish: number;
  ingredients: IngredientWithQuantity[];
  instructions: Instructions;
};

type Props = {
  recipe: Recipe;
};

const ExpandedRecipeCard: React.FC<Props> = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box
      p={4}
      bg="gray.100"
      marginBottom={4}
      borderRadius="md"
      cursor="pointer"
      _hover={{ shadow: 'md', transform: 'scale(1.01)' }}
      transition="all 0.2s"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <Heading size="md">{recipe.title}</Heading>
      <Flex mt={2}>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < recipe.rating ? 'teal.500' : 'gray.300'}
            />
          ))}
      </Flex>
      <Text mt={2}>{recipe.description}</Text>

      <Collapse in={showDetails} animateOpacity>
        <Flex mt={3} justifyContent={'space-between'}>
          <Text>
            <strong>Time to Prepare:</strong> {recipe.timeToPrepare} mins
          </Text>
          <Text>
            <strong>Number of Ingredients:</strong> {recipe.numberOfIngredients}
          </Text>
          <Text>
            <strong>Average Cost / Dish:</strong> ${recipe.averageCostPerDish}
          </Text>
        </Flex>
      </Collapse>
    </Box>
  );
};

export default ExpandedRecipeCard;
