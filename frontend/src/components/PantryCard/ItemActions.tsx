import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { TbGitCommit, TbPencil, TbShoppingCart } from 'react-icons/tb';

const IconProps = {
  boxSize: 6,
  color: '#FFA987',
  _hover: {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  },
  transition: 'all 0.2s ease-in-out',
};

const ItemActions = () => {
  return (
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
  );
};

export default ItemActions;
