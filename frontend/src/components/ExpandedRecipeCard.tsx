import { Badge, Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import type { Recipe } from '@/types';

type Props = {
  recipe: Recipe;
};
// TODO: truncate description text to one or two lines
// expand when tapped/clicked on
const ExpandedRecipeCard: React.FC<Props> = ({ recipe }) => {
  const recipeImage = recipe.image || '/stock-salad.avif';
  return (
    <Flex
      direction="column"
      justifyContent={'center'}
      bg="gray.100"
      borderRadius="md"
      cursor="pointer"
      w={{ base: '100px', sm: '200px', md: '300px', lg: '300px', xl: '400px' }}
      _hover={{ shadow: 'md', transform: 'scale(1.01)' }}
      transition="all 0.2s"
    >
      <Box
        className="recipe-card__image-container"
        w={{ base: '80px', sm: '180px', md: '200px', lg: '280px', xl: '380px' }}
        h={{ base: '80px', sm: '180px', md: '200px', lg: '280px', xl: '380px' }}
        overflow="hidden"
        borderRadius="md"
        alignSelf="center"
        mt={2}
      >
        <Image
          src={recipeImage}
          alt={recipe.title}
          objectFit="cover"
          objectPosition="center"
          w="100%"
          h="100%"
        />
      </Box>

      <Box px={4} pb={2}>
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

        <Badge colorScheme="red">{recipe.timeToPrepare}</Badge>
      </Box>
    </Flex>
  );
};

export default ExpandedRecipeCard;
