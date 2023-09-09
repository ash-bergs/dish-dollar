import React from 'react';
import { Box, Icon, useColorModeValue } from '@chakra-ui/react';
import { TbStar } from 'react-icons/tb';

import ItemDetail from './ItemDetail';
import ItemActions from './ItemActions';
import PantryDrawer from './PantryDrawer';
import { PantryItem } from '@/types';

type PantryCardProps = {
  item: PantryItem;
  //handleChange: (id: number, quantityInStock: number) => void; // will restore this when we have the slider
};

const PantryCard: React.FC<PantryCardProps> = ({ item }) => {
  const cardBg = useColorModeValue('gray.100', 'jet');
  const [show, setShow] = React.useState(false);

  return (
    <>
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
        onClick={() => setShow(!show)}
        zIndex={1}
      >
        <ItemDetail {...item} />
        <Icon
          as={TbStar}
          position="absolute"
          top="12px"
          right="14px"
          boxSize="6"
          color="#FFA987"
          cursor="pointer"
        />
        <ItemActions />
      </Box>
      <PantryDrawer show={show} />
    </>
  );
};

export default PantryCard;

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
