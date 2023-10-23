import React from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import Layout from '~/components/layout/Layout';
import Pantry from '~/components/Pantry';
import { pantryItems } from '~/data';
import { PantryItemsAtom } from '~/lib/store/pantry.store';
import type { PantryItem } from '~/types';
import { trpc } from '~/utils/trpc';

//TODO: move Pantry to /page directory -> rename to PantryView
export default function Home({ pantryItems }: { pantryItems: PantryItem[] }) {
  const [pantryItemsAtom, setPantryItemsAtom] = useAtom(PantryItemsAtom);

  React.useEffect(() => {
    // testing
    const fetchData = async () => {
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      await sleep(1000);
      return 'Hello World';
    };

    const result = fetchData().catch(console.error);

    console.log('result', result);
  }, []);
  console.log('pantryItemsAtom', pantryItemsAtom);
  return <Layout>{/* <Pantry pantryItems={pantryItems} /> */}</Layout>;
}
