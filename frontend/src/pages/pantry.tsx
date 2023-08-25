import AddItemForm from '@/components/forms/AddPantryItemForm';
import Header from '@/components/Header';
import Pantry from '@/components/Pantry';
type PantryItem = {
  item: string;
  type: 'dairy' | 'produce' | 'pantry' | 'staple' | 'frozen';
  avoid: boolean;
  cost: number;
  costUnit: string;
};

const pantryItems: PantryItem[] = [
  {
    item: 'Milk',
    type: 'dairy',
    avoid: false,
    cost: 1.5,
    costUnit: 'USD',
  },
  {
    item: 'Cheese',
    type: 'dairy',
    avoid: false,
    cost: 2.5,
    costUnit: 'USD',
  },
  {
    item: 'Tomatoes',
    type: 'produce',
    avoid: false,
    cost: 0.5,
    costUnit: 'USD',
  },
  {
    item: 'Spinach',
    type: 'produce',
    avoid: false,
    cost: 1,
    costUnit: 'USD',
  },
  {
    item: 'Rice',
    type: 'pantry',
    avoid: false,
    cost: 0.8,
    costUnit: 'USD',
  },
  {
    item: 'Pasta',
    type: 'pantry',
    avoid: false,
    cost: 1.2,
    costUnit: 'USD',
  },
  {
    item: 'Salt',
    type: 'staple',
    avoid: false,
    cost: 0.3,
    costUnit: 'USD',
  },
  {
    item: 'Sugar',
    type: 'staple',
    avoid: true,
    cost: 0.4,
    costUnit: 'USD',
  },
  {
    item: 'Frozen Peas',
    type: 'frozen',
    avoid: false,
    cost: 1.7,
    costUnit: 'USD',
  },
  {
    item: 'Frozen Berries',
    type: 'frozen',
    avoid: false,
    cost: 2.2,
    costUnit: 'USD',
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <AddItemForm />
      <Pantry pantryItems={pantryItems} />
    </main>
  );
}
