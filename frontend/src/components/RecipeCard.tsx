import { useState } from 'react';
import { Box, Collapse, Flex, Heading, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export type Recipe = {
  title: string;
  rating: number;
  description: string;
  timeToPrepare: number;
  numberOfIngredients: number;
  averageCostPerDish: number;
};

type Props = {
  recipe: Recipe;
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box
      p={4}
      bg="gray.100"
      marginBottom={4}
      borderRadius="md"
      cursor="pointer"
      _hover={{ shadow: 'md', transform: 'scale(1.02)' }}
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

export default RecipeCard;
