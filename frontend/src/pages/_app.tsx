import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { Provider as AtomProvider } from 'jotai';
import { AppProps } from 'next/app';
import customTheme from '~/styles/theme';
import { trpc } from '~/utils/trpc';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AtomProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </AtomProvider>
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
