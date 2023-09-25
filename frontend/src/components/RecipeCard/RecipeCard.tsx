import {
  Badge,
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import type { Recipe } from "@/types";

import RecipeImage from "@/components/RecipeCard/Image";
import StarRating from "@/components/RecipeCard/StarRating";
import ActionButtonSet from "@/components/RecipeCard/controls/ActionButtonSet";

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
          <strong>Prep:</strong>{" "}
          <Badge colorScheme="red">{recipe.timeToPrepare} mins</Badge>
        </Text>
        <Text>
          <strong>Cook:</strong>{" "}
          <Badge colorScheme="green">{recipe.timeToPrepare} mins</Badge>
        </Text>
      </Box>
    </CardWrapper>
  );
};

export default RecipeCard;

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  const cardBg = useColorModeValue("white", "jet");

  return (
    <Flex
      bg={cardBg}
      borderRadius="md"
      boxShadow="base"
      cursor="pointer"
      direction="column"
      justifyContent={"center"}
      maxWidth="300px"
      minWidth="250px"
      position="relative"
      py="2"
      w={{ base: "100%", md: "60%", xl: "40%" }}
      transition="all 0.2s"
      _hover={{
        transform: "scale(1.05)",
        ".action-buttons": {
          display: "flex",
          zIndex: 1,
        },
      }}
    >
      <ActionButtonSet />
      {children}
    </Flex>
  );
};
