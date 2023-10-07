import React, { ReactElement } from 'react';
import { Box, Center, IconProps, useColorMode } from '@chakra-ui/react';

type GlassIconProps = {
  icon: ReactElement<IconProps>;
};

const GlassIcon = ({ icon }: GlassIconProps) => {
  const { colorMode } = useColorMode();

  const boxShadow =
    colorMode === 'light'
      ? '0px 1px 10px .10px rgba(0, 0, 0, 0.10)'
      : '0px 1px 10px .10px rgba(255, 255, 255, 0.3)'; // Light shadow for dark mode

  const bg =
    colorMode === 'light'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(68, 65, 64, 0.6)'; // Based on 'jet'

  const gradient =
    colorMode === 'light'
      ? 'linear-gradient(rgba(255, 255, 255, 0.5), transparent)'
      : 'linear-gradient(rgba(30, 30, 36, 0.6), transparent)'; // Based on 'raisinBlack'

  return (
    <Box position="relative" mr="4">
      <Center boxShadow={boxShadow} borderRadius="full" p={4} bg={bg}>
        {icon}
        <Box
          position="absolute"
          top="10%"
          left="0"
          right="0"
          bottom="0"
          bg={gradient}
          borderRadius="full"
          pointerEvents="none"
        />
      </Center>
    </Box>
  );
};

export default GlassIcon;
