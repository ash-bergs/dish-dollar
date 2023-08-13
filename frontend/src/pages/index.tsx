import React from 'react';
import { Button } from '@chakra-ui/react';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <p>My next app</p>
      <Button colorScheme="blue">Button</Button>

      {!session ? (
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
    </main>
  );
}
