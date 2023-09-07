import React, { useState } from 'react';
import {
  Box,
  Circle,
  Flex,
  Grid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { TbPin, TbFridge, TbIceCream, TbApple, TbMilk } from 'react-icons/tb';
/** component imports */
import Toolbar from './Toolbar';
//TODO: add types
type PantryItem = {
  id: number;
  pantryId: number;
  ingredientId: number;
  initialAmount: number;
  unit: string;
  quantityInStock: number;
  item: string;
  type: 'dairy' | 'produce' | 'pantry' | 'staple' | 'frozen';
  cost: number;
  costUnit: string;
};

type PantryProps = {
  pantryItems: PantryItem[];
};

// utility to map icons
const getIconForType = (type: PantryItem['type']) => {
  switch (type) {
    case 'dairy':
      return <TbMilk />;
    case 'produce':
      return <TbApple />;
    case 'pantry':
      return <TbFridge />;
    case 'staple':
      return <TbPin />;
    case 'frozen':
      return <TbIceCream />;
    default:
      return null;
  }
};

const getStockStatusColor = (quantity: number) => {
  if (quantity > 0.75) return 'green';
  if (quantity > 0.25) return 'yellow';
  return 'red';
};

// type for the accumulator - an object where the keys are the type of the item
// Typescripts record utlity more info here: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt
type GroupedPantryItems = Record<string, PantryItem[]>;

const Pantry: React.FC<PantryProps> = ({ pantryItems }) => {
  const [currentPantryItems, setPantryItems] = useState(pantryItems);
  const groupedItems = currentPantryItems.reduce<GroupedPantryItems>(
    (acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    },
    {}
  );

  const handleStockChange = (id: number, newValue: number) => {
    // Assuming you're using a local state to hold the data. If you're using a global state manager or API, adjust accordingly.
    setPantryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantityInStock: newValue } : item
      )
    );
  };

  // in the future I want users to be able to re-order the pantry type columns
  // look into react-beautiful-dnd for this
  // for now we'll use state
  const [pantryOrder, setPantryOrder] = useState([
    'dairy',
    'produce',
    'frozen',
    'pantry',
    'staple',
  ]);

  return (
    <Box height="calc(100vh - 180px)" p={8}>
      <Toolbar />
      <Grid h="50vh" gridTemplateColumns="1fr 1fr" gap={2}>
        {pantryOrder.map((type) => (
          <Box key={type} w="100%" cursor="pointer">
            <Flex mb={3}>
              {getIconForType(type)}
              <Heading size="md" ml={2}>
                {type}
              </Heading>
            </Flex>
            <VStack align="start" spacing={2}>
              {groupedItems[type]?.map((item) => (
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
                    onChangeEnd={(value) =>
                      handleStockChange(item.id, value / 100)
                    }
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Grid>
              ))}
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Pantry;
