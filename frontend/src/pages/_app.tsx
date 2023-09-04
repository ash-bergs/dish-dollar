import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  fonts: {
    // todo: set the fonts
    //body: 'YourBodyFont, system-ui, sans-serif',
    //heading: 'YourHeadingFont, Arial, sans-serif',
    //mono: 'Menlo, monospace',
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
