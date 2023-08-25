import React from 'react';
import { Button } from '@chakra-ui/react';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import { signIn, signOut, useSession } from 'next-auth/react';

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
    <main>
      <Header />
      <Dashboard />
    </main>
  );
}
