import React from 'react';
import { Box, Divider, Flex, Icon, Heading, Text } from '@chakra-ui/react';
import GlassIcon from '~/components/GlassIcon';
import { InsetShadowBox } from '~/components/layout/containers';
import List from './List';
import { TbShoppingCart } from 'react-icons/tb';

const shoppingList = [
  'Eggs',
  'Milk',
  'Bread',
  'Sour Cream',
  'Butter',
  'Salt',
  'Pepper',
  'Olive Oil',
  'Chicken',
  'Beef',
];
const ShoppingList = () => {
  return (
    <Box flex="1" overflowY="auto" p={4}>
      <InsetShadowBox>
        <Flex py={2}>
          <GlassIcon
            icon={
              <Icon as={TbShoppingCart} boxSize={8} color="atomicTangerine" />
            }
          />
          <Box w="full">
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Heading size="lg">Shopping List</Heading>
              <Text
                fontFamily="heading"
                fontWeight="extrabold"
                fontSize={22}
                color="gray.300"
                sx={{
                  textShadow: 'inset 1px 1px 2px rgba(0, 0, 0, 0.95)',
                }}
                textShadow="inset 1px 1px 2px rgba(0, 0, 0, 0.95)"
              >
                0/10
              </Text>
            </Flex>
            <Divider borderColor="raisinBlack" opacity="30%" mt={3} />
          </Box>
        </Flex>

        <List list={shoppingList} />
      </InsetShadowBox>
    </Box>
  );
};

export default ShoppingList;
