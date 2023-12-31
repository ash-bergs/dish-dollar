import { extendTheme } from '@chakra-ui/react';
import type { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';
import buttonVariants from './buttonVariants';
import colors from './colors';

// syntax: mode(light, dark)(props)
const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode(colors.raisinBlack, colors.seashell)(props),
      bg: mode(colors.seashell, colors.raisinBlack)(props),
    },
    h1: {
      color: mode(colors.jet, 'white')(props),
    },
    h2: {
      color: mode(colors.jet, 'white')(props),
    },
    h3: {
      color: mode(colors.jet, 'white')(props),
    },
    h4: {
      color: mode(colors.jet, 'white')(props),
    },
    h5: {
      color: mode(colors.jet, 'white')(props),
    },
    h6: {
      color: mode(colors.jet, 'white')(props),
    },
  }),
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  colors,
  config,
  components: {
    Button: {
      variants: buttonVariants,
    },
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Red Hat Display", sans-serif',
  },
  styles,
});

export default customTheme;
