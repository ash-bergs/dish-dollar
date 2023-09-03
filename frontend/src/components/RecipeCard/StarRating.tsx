import { Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

type StarRatingProps = {
  rating: number;
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

export default StarRating;
