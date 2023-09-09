import React from 'react';
import { useAtomValue } from 'jotai';
import { Box, Center, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { activeCardDrawerAtom } from '@/lib/store/pantry.store';
import type { PantryItem } from '@/types';

import StockSlider from './StockSlider';
import { EditItemForm } from '@/components/forms';

const MotionBox = motion(Box);

type PantryDrawerProps = {
  show: boolean;
  item: PantryItem;
};

/** animation stuff, should be moved to styles eventually, will probably reuse */
const drawerVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  closed: { opacity: 0, y: '-100%' },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.2 } },
};

const PantryDrawer: React.FC<PantryDrawerProps> = (props) => {
  const show = props.show;
  const item = props.item;

  const activeCardDrawer = useAtomValue(activeCardDrawerAtom);
  return (
    <AnimatePresence>
      {show && (
        <MotionBox
          w="98.5%"
          mx="auto"
          bg="atomicTangerine"
          borderBottomRadius="lg"
          zIndex={0}
          mt="-3"
          initial="closed"
          animate={show ? 'open' : 'closed'}
          //exit="exit"
          variants={drawerVariants}
        >
          {activeCardDrawer?.content === 'SLIDER' ? (
            <StockSlider {...item} />
          ) : (
            <EditItemForm />
          )}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default PantryDrawer;
