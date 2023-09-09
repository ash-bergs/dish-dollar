import React from 'react';
import { Box, Center, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

const MotionBox = motion(Box);

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

const PantryDrawer = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <MotionBox
          w="98%"
          mx="auto"
          bg="atomicTangerine"
          borderBottomRadius="lg"
          zIndex={0}
          mt="-3"
          initial="closed"
          animate={show ? 'open' : 'closed'}
          exit="exit"
          variants={drawerVariants}
        >
          <Center h="50px">
            <Text>This is the drawer</Text>
          </Center>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default PantryDrawer;
