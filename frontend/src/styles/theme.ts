import { extendTheme } from '@chakra-ui/react';
import type { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';

// syntax: mode(light, dark)(props)
const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode(colors.raisinBlack, colors.seashell)(props),
      bg: mode(colors.seashell, colors.raisinBlack)(props),
    },
  }),
};

// button variants - needs its own module
const buttonVariants = {
  primary: {
    bg: 'linear-gradient(to bottom, #FFA987, #E54B4B)',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white',
    _hover: {
      bg: 'linear-gradient(to bottom, #FFB387, #F75151)', // hue shift on tangerine, brightness increase on imperial red
      boxShadow: 'lg',
      transform: 'scale(1.02)',
    },
    px: '8',
    transition: 'all .3s',
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Onest, sans-serif',
  },
  components: {
    Button: {
      variants: buttonVariants,
    },
  },
  config,
  styles,
  colors,
});

export default customTheme;
