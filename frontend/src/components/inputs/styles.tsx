import { mode } from '@chakra-ui/theme-tools';
import { ColorMode } from '@chakra-ui/react';

/**
 * Utility for styling non-traditional inputs, such as Select components.
 * Traditional inputs should automatically get styles from the theme.
 * This utility provides styles for special cases where the theme doesn't apply.
 */
const inputStyles = (colorMode: ColorMode) => ({
  bg: mode('white', 'jet')({ colorMode }),
  color: mode('jet', 'white')({ colorMode }),
  borderRadius: 'md',
});

export default inputStyles;
