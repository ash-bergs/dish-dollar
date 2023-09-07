import React, { useState } from 'react';
import { Box, Flex, Grid, Checkbox, VStack, Heading } from '@chakra-ui/react';
import { TbPin, TbFridge, TbIceCream, TbApple, TbMilk } from 'react-icons/tb';
/** component imports */
import Toolbar from './Toolbar';
//TODO: add types
type PantryItem = {
  item: string;
  type: 'dairy' | 'produce' | 'pantry' | 'staple' | 'frozen';
  avoid: boolean;
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

// type for the accumulator - an object where the keys are the type of the item
// Typescripts record utlity more info here: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt
type GroupedPantryItems = Record<string, PantryItem[]>;

const Pantry: React.FC<PantryProps> = ({ pantryItems }) => {
  const groupedItems = pantryItems.reduce<GroupedPantryItems>((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

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
          <Box key={type} w="100%">
            <Flex mb={3}>
              {getIconForType(type)}
              <Heading size="md" ml={2}>
                {type}
              </Heading>
            </Flex>
            {/** TODO: Build shopping list component - add toggle for hiding and viewing checked off items  */}
            <VStack align="start" spacing={2}>
              {groupedItems[type]?.map((item) => (
                <Checkbox key={item.item} isDisabled={item.avoid}>
                  {item.item}
                </Checkbox>
              ))}
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Pantry;
