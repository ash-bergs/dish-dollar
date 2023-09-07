import {
  Circle,
  Grid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { PantryItem } from '@/types';

type PantryItemCardProps = {
  item: PantryItem;
  handleChange: (id: number, quantityInStock: number) => void;
};

const getStockStatusColor = (quantity: number) => {
  if (quantity > 0.75) return 'green';
  if (quantity > 0.25) return 'yellow';
  return 'red';
};

const PantryItemCard: React.FC<PantryItemCardProps> = ({
  item,
  handleChange,
}) => {
  return (
    <Grid
      key={item.id}
      alignContent="center"
      alignItems="center"
      gap={1}
      gridTemplateColumns="min-content 1fr 1fr"
    >
      <Circle
        size="8px"
        bg={getStockStatusColor(item.quantityInStock)}
        mr={2}
      />
      <Text>{item.item}</Text>
      <Slider
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
    </Grid>
  );
};

export default PantryItemCard;
