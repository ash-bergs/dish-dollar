import React from 'react';
import { Box, Flex, Circle, Text } from '@chakra-ui/react';
import { PantryItem } from '@/types';

const getStockStatusColor = (quantity: number) => {
  if (quantity > 0.75) return '#80D39B';
  if (quantity > 0.25) return '#FFA987';
  return '#E54B4B';
};

const ItemDetail: React.FC<PantryItem> = ({ name, quantityInStock }) => {
  const amountInStock = '2 pounds';
  return (
    <Box>
      <Flex alignItems="center">
        <Circle size="4" bg={getStockStatusColor(quantityInStock)} />

        <Box ml={3}>
          <Text fontSize="xs" fontStyle="italic">
            {amountInStock}
          </Text>
          <Text fontSize="24px">{name}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemDetail;
