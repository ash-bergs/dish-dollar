import React from 'react';
import { useAtom } from 'jotai';
import { Flex, Icon } from '@chakra-ui/react';
import { TbGitCommit, TbPencil, TbShoppingCart } from 'react-icons/tb';

import { activeCardDrawerAtom } from '@/lib/store/pantry.store';
import type { PantryItem } from '@/types';

const IconProps = {
  boxSize: 6,
  color: '#FFA987',
  _hover: {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  },
  transition: 'all 0.2s ease-in-out',
};

const ItemActions: React.FC<PantryItem> = (item) => {
  const [activeCardDrawer, setActiveCardDrawer] = useAtom(activeCardDrawerAtom);

  const handleStockUpdateClick = () => {
    setActiveCardDrawer({ id: item.id, content: 'SLIDER' });
  };

  const handleItemUpdateClick = () => {
    setActiveCardDrawer({ id: item.id, content: 'FORM' });
  };

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
        onClick={handleStockUpdateClick}
      />
      <Icon as={TbPencil} onClick={handleItemUpdateClick} {...IconProps} />
      <Icon as={TbShoppingCart} {...IconProps} />
    </Flex>
  );
};

export default ItemActions;
