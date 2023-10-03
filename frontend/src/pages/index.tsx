import React from 'react';
import Layout from '~/components/layout/Layout';
import Dashboard from '../components/Dashboard';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

/**
 * const { data: session } = useSession();
 * {!session ? (
        <Button onClick={() => signIn('github')} colorScheme="teal">
          Sign in with GitHub
        </Button>
      ) : (
        <>
          <p>Signed in as {session.user.email}</p>
          <Button onClick={() => signOut()} colorScheme="red">
            Sign out
          </Button>
        </>
      )}
 */

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
