import { extendTheme } from '@chakra-ui/react';
import type { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('blue.50', 'pink.900')(props),
    },
  }),
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  config,
  styles,
});

export default customTheme;
