import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { Provider as AtomProvider } from 'jotai';
import { AppProps } from 'next/app';
import customTheme from '~/styles/theme';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AtomProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AtomProvider>
    </SessionProvider>
  );
}

export default MyApp;
