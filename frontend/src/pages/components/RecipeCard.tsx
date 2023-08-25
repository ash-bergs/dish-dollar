import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export type Recipe = {
  title: string;
  rating: number;
  description: string;
};

type Props = {
  recipe: Recipe;
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Box p={4} bg="gray.100" marginBottom={4} borderRadius="md">
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
    </Box>
  );
};

export default RecipeCard;
