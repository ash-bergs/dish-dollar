import React, { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  Icon,
  VStack,
  Heading,
  IconProps,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { TbPin, TbFridge, TbIceCream, TbApple, TbMilk } from 'react-icons/tb';
/** component imports */
import Toolbar from './Toolbar';
import PantryCard from '~/components/PantryCard';
import GlassIcon from '~/components/GlassIcon';
import { InsetShadowBox } from '~/components/layout/containers';

type PantryItem = {
  id: number;
  pantryId: number;
  ingredientId: number;
  initialAmount: number;
  unit: string;
  quantityInStock: number;
  name: string;
  type: 'dairy' | 'produce' | 'pantry' | 'staple' | 'frozen';
  cost: number;
  costUnit: string;
};

type PantryProps = {
  pantryItems: PantryItem[];
};

const iconProps: IconProps = {
  boxSize: '7',
  textShadow: 'lg',
  color: 'atomicTangerine',
};

// utility to map icons
const getIconForType = (type: PantryItem['type']) => {
  switch (type) {
    case 'dairy':
      return <Icon as={TbMilk} {...iconProps} />;
    case 'produce':
      return <Icon as={TbApple} {...iconProps} />;
    case 'pantry':
      return <Icon as={TbFridge} {...iconProps} />;
    case 'staple':
      return <Icon as={TbPin} {...iconProps} />;
    case 'frozen':
      return <Icon as={TbIceCream} {...iconProps} />;
    default:
      return null;
  }
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

  const bg = useColorModeValue('white', 'jet');

  return (
    <Box height="calc(100vh - 180px)" p={8}>
      <Heading>Pantry</Heading>
      <Toolbar />
      <Grid
        h="50vh"
        gridTemplateColumns={{
          sm: '1fr',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        {pantryOrder.map((type) => {
          // capitalize first letter of type
          const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
          return (
            <InsetShadowBox key={type}>
              <Flex
                alignContent={'center'}
                alignItems={'center'}
                position="sticky"
                top={0}
                zIndex={3}
                bg={bg}
              >
                <Flex w="full" px={8} pt={6} mb={1}>
                  <GlassIcon icon={getIconForType(type)} />
                  <Flex direction="column" w="full">
                    <Heading
                      as="h3"
                      fontSize="26"
                      textShadow="lg"
                      fontWeight="semibold"
                    >
                      {capitalizedType}
                    </Heading>
                    <Divider borderColor="raisinBlack" opacity="30%" pt={2} />
                  </Flex>
                </Flex>
              </Flex>
              <VStack align="start" spacing={2} px={8} pb={4}>
                {groupedItems[type]?.map((item) => (
                  <PantryCard
                    key={item.id}
                    item={item}
                    // handleChange={handleStockChange}
                  />
                ))}
              </VStack>
            </InsetShadowBox>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Pantry;
