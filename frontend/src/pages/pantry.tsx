import axios from 'axios';
import { useAtom } from 'jotai';
import Layout from '~/components/layout/Layout';
import Pantry from '~/components/Pantry';
import { pantryItems } from '~/data';
import { PantryItemsAtom } from '~/lib/store/pantry.store';
// working here
import { trpc } from '~/utils/trpc';

//TODO: move Pantry to /page directory -> rename to PantryView
export default function Home() {
  const test = fetch('/api/pantryItems').then((res) => res.json());

  const axiosTest = axios.get('/api/pantryItems').then((res) => res);
  console.log('axios test', axiosTest);
  console.log(test);
  return (
    <Layout>
      <Pantry pantryItems={pantryItems} />
    </Layout>
  );
}
