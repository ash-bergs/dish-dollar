import { Box, Image } from '@chakra-ui/react';

import type { Recipe } from '@/types';

type Props = {
  recipe: Recipe;
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

export default RecipeImage;
