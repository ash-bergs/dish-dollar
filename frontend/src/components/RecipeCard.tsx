import { Badge, Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import type { Recipe } from '@/types';

type Props = {
  recipe: Recipe;
};

type StarRatingProps = {
  rating: number;
};
type CardWrapperProps = {
  children: React.ReactNode;
};
// TODO: differentiate between cook and prep time in the data and type
const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <CardWrapper>
      <RecipeImage recipe={recipe} />

      <Box px={4} py={2}>
        <Heading size="md">{recipe.title}</Heading>
        <StarRating rating={recipe.rating} />
        <Text mt={2}>{recipe.description}</Text>

        <Text>
          <strong>Prep:</strong>{' '}
          <Badge colorScheme="red">{recipe.timeToPrepare} mins</Badge>
        </Text>
        <Text>
          <strong>Cook:</strong>{' '}
          <Badge colorScheme="green">{recipe.timeToPrepare} mins</Badge>
        </Text>
      </Box>
    </CardWrapper>
  );
};

export default RecipeCard;

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return (
    <Flex
      direction="column"
      justifyContent={'center'}
      bg="gray.100"
      borderRadius="md"
      cursor="pointer"
      boxShadow="base"
      w={{ base: '100%', md: '60%', xl: '40%' }}
      maxWidth="300px"
      minWidth="250px"
      _hover={{ shadow: 'md', transform: 'scale(1.01)' }}
      transition="all 0.2s"
    >
      {children}
    </Flex>
  );
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <Flex mt={2}>
      {Array(5)
        .fill('')
        .map((_, i) => (
          <StarIcon key={i} color={i < rating ? 'teal.500' : 'gray.300'} />
        ))}
    </Flex>
  );
};

const RecipeImage: React.FC<Props> = ({ recipe }) => {
  const recipeImage = recipe.image || '/stock-salad.avif';

  return (
    <Box
      className="recipe-card__image-container"
      w="90%" // width relative to the card's width
      h="0"
      paddingBottom="80%" // creates a square aspect ratio
      overflow="hidden"
      borderRadius="md"
      alignSelf="center"
      mt={4}
      position="relative"
    >
      <Image
        src={recipeImage}
        alt={recipe.title}
        objectFit="cover"
        objectPosition="center"
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
      />
    </Box>
  );
};
