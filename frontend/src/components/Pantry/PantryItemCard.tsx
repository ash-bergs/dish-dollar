import {
  Box,
  Flex,
  Circle,
  Grid,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { PantryItem } from '@/types';
import { TbStar, TbGitCommit, TbPencil, TbShoppingCart } from 'react-icons/tb';

type PantryItemCardProps = {
  item: PantryItem;
  handleChange: (id: number, quantityInStock: number) => void;
};

const getStockStatusColor = (quantity: number) => {
  if (quantity > 0.75) return '#80D39B';
  if (quantity > 0.25) return '#FFA987';
  return '#E54B4B';
};

const IconProps = {
  boxSize: 6,
  color: '#FFA987',
  _hover: {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  },
  transition: 'all 0.2s ease-in-out',
};

const PantryItemCard: React.FC<PantryItemCardProps> = ({
  item,
  handleChange,
}) => {
  // we'll need a function to get the current amount in stock
  // based on initialAmount and quantityInStock and the unit of measurement
  // quantity in stock is a float between 0 and 1
  // initialAmount is the total amount of the item
  // so if initialAmount is 2 and quantityInStock is 0.5
  // we have 1 pound left
  const amountInStock = '2 pounds';

  const cardBg = useColorModeValue('gray.100', 'jet');

  return (
    <Box
      className="pantry-card__container"
      bg={cardBg}
      borderRadius="lg"
      boxShadow="md"
      p={5}
      w="full"
      key={item.id}
      position="relative"
      _hover={{
        transform: 'scale(1.02)',
      }}
      transition="all 0.2s ease-in-out"
    >
      <Box>
        <Flex alignItems="center">
          <Circle size="4" bg={getStockStatusColor(item.quantityInStock)} />

          <Box ml={3}>
            <Text fontSize="xs" fontStyle="italic">
              {amountInStock}
            </Text>
            <Text fontSize="24px">{item.item}</Text>
          </Box>
        </Flex>
      </Box>

      <Icon
        as={TbStar}
        position="absolute"
        top="12px"
        right="14px"
        boxSize="6"
        color="#FFA987"
        cursor="pointer"
      />

      <Flex position="absolute" bottom="12px" right="14px" gap={1}>
        <Icon
          as={TbGitCommit}
          transform="rotate(90deg)"
          boxSize="6"
          color="#FFA987"
          _hover={{
            transform: 'rotate(90deg) scale(1.2)',
            cursor: 'pointer',
          }}
          transition="all 0.2s ease-in-out"
        />
        <Icon as={TbPencil} {...IconProps} />
        <Icon as={TbShoppingCart} {...IconProps} />
      </Flex>
    </Box>
  );
};

export default PantryItemCard;

// TODO: When an item is favorited, used the filled star icon
// what happens to favorited items? do they get moved to the top of the list? Do they get alerts when they're low, out of stock?
/**
 * <Slider
        aria-label="stock-slider"
        colorScheme="teal"
        defaultValue={item.quantityInStock * 100}
        min={0}
        max={100}
        onChangeEnd={(value) => handleChange(item.id, value / 100)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
 */
