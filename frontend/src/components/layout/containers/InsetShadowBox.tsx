import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

// RESEARCH: Is this better as a variant of the box, or as it's own layout component as it is now?

//TODO: Types module - what's the best way? Research this
// Make children prop required
type PropsWithChildren<P = unknown> = P & { children: React.ReactNode };

// explicit way of saying the component should only have a children prop
type InsetShadowBoxProps = PropsWithChildren<{}>;

const InsetShadowBox = ({ children }: InsetShadowBoxProps) => {
  const bg = useColorModeValue('white', 'jet');
  return (
    <Box
      w="full"
      h="full"
      bg={bg}
      borderRadius="lg"
      px={8}
      py={6}
      boxShadow="inset .5px 2px 5px 0px rgba(0, 0, 0, 0.10)"
    >
      {children}
    </Box>
  );
};

export default InsetShadowBox;