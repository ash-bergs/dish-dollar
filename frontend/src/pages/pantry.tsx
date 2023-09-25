import Layout from '@/components/layout/Layout';
import Pantry from '@/components/Pantry';
import { pantryItems } from '@/data';

//TODO: move Pantry to /page directory -> rename to PantryView
export default function Home() {
  return (
    <Layout>
      <Pantry pantryItems={pantryItems} />
    </Layout>
  );
}
