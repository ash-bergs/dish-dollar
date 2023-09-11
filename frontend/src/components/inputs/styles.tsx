import { useColorModeValue, ColorModeContextType } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { ColorMode } from '@chakra-ui/react';

// Sometimes we build inputs that aren't using a traditional input
// so just adding this to the theme won't work in all cases (though we still need to do this)
// The snippets here are for use in these type of inputs - like the Select
// When building a component that does use a traditional input, we shouldn't have to worry about explicitly adding these
// const inputBg = useColorModeValue('gray.100', 'jet');
// const inputTextColor = useColorModeValue('jet', 'white');

const inputStyles = (colorMode: ColorMode) => ({
  bg: mode('gray.100', 'jet')({ colorMode }),
  color: mode('jet', 'white')({ colorMode }),
  borderRadius: 'md',
});

export default inputStyles;
