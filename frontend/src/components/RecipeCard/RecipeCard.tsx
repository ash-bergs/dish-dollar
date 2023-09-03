import { Badge, Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import {
  AddIcon,
  ExternalLinkIcon,
  StarIcon,
  QuestionIcon,
} from '@chakra-ui/icons';

import type { Recipe } from '@/types';

import RecipeImage from '@/components/RecipeCard/Image';
import StarRating from '@/components/RecipeCard/StarRating';

type Props = {
  recipe: Recipe;
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
      transition="all 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        '.action-buttons': {
          display: 'flex',
        },
      }}
      position="relative"
    >
      <ActionButtonSet />
      {children}
    </Flex>
  );
};

const buttonStyles = {
  borderRadius: 'full',
};

const ActionButtonSet: React.FC = () => {
  return (
    <Flex
      direction="column"
      position="absolute"
      top="20px"
      right="20px"
      gap={2}
      zIndex={3}
      display="none" // Initially hide
      className="action-buttons" // Used to show on hover of CardWrapper
    >
      <IconButton {...buttonStyles} icon={<AddIcon />} aria-label="Add" />
      <IconButton
        {...buttonStyles}
        icon={<ExternalLinkIcon />}
        aria-label="Share"
      />
      <IconButton
        {...buttonStyles}
        icon={<QuestionIcon />}
        aria-label="More Actions"
      />
    </Flex>
  );
};
