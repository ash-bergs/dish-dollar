import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import type { PropsWithChildren } from '~/types';

type CardContainerProps = PropsWithChildren<{}>;
const CardContainer = ({ children }: CardContainerProps) => {
  const bg = useColorModeValue('white', 'jet');
  return (
    <Box
      className="card__container"
      bg={bg}
      borderRadius="lg"
      boxShadow="md"
      p={5}
      w="full"
      _hover={{
        transform: 'scale(1.02)',
      }}
      position="relative"
      transition="all 0.2s ease-in-out"
    >
      {children}
    </Box>
  );
};

export default CardContainer;
