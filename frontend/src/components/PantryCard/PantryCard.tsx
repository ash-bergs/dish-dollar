import React from 'react';
import { Icon } from '@chakra-ui/react';
import { TbStar } from 'react-icons/tb';
import { useAtomValue } from 'jotai';
import { activeCardDrawerAtom } from '~/lib/store/pantry.store';

import { CardContainer } from '~/components/layout/containers';
import ItemDetail from './ItemDetail';
import ItemActions from './ItemActions';
import PantryDrawer from './PantryDrawer';
import { PantryItem } from '~/types';

type PantryCardProps = {
  item: PantryItem;
  //handleChange: (id: number, quantityInStock: number) => void ; // will restore this when we have the slider
};

const PantryCard = ({ item }: PantryCardProps) => {
  const activeCardDrawer = useAtomValue(activeCardDrawerAtom);
  const isActiveCard = activeCardDrawer?.id === item.id;

  return (
    <>
      <CardContainer>
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
        <ItemActions {...item} />
      </CardContainer>
      <PantryDrawer show={isActiveCard} item={item} />
    </>
  );
};

export default PantryCard;

// TODO: When an item is favorited, used the filled star icon
// what happens to favorited items? do they get moved to the top of the list? Do they get alerts when they're low, out of stock?
