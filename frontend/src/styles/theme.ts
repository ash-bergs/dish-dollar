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

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  config,
  styles,
  colors,
});

export default customTheme;
