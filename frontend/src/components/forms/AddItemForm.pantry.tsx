import React, { useState } from 'react';
import { Box, Button, Input, Checkbox, VStack } from '@chakra-ui/react';
import { TbPin, TbFridge, TbIceCream, TbApple, TbMilk } from 'react-icons/tb';

import { Select } from '@/components/inputs/';

const foodTypeOptions = [
  { value: 'dairy', label: 'Dairy', icon: <TbMilk /> },
  { value: 'produce', label: 'Produce', icon: <TbApple /> },
  { value: 'pantry', label: 'Pantry', icon: <TbFridge /> },
  { value: 'staple', label: 'Staple', icon: <TbPin /> },
  { value: 'frozen', label: 'Frozen', icon: <TbIceCream /> },
];

const currencyTypeOptions = [
  { value: 'dollars', label: 'Dollars' },
  { value: 'pounds', label: 'Pounds' },
];

const AddItemForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('category'); // default to 'dairy'
  const [cost, setCost] = useState('');
  const [unit, setUnit] = useState('dollars'); // default to 'dollars'

  const handleAddItem = () => {
    // Logic for adding an item (e.g., send data to server)
  };

  return (
    <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>Add an item</Button>
      {isOpen && (
        <VStack mt={4} spacing={4}>
          <Input
            placeholder="Item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <Select
            options={foodTypeOptions}
            value={itemType}
            onChange={(value) => setItemType(value)}
          />
          <Input
            placeholder="Cost"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <Select
            options={currencyTypeOptions}
            value={unit}
            onChange={(value) => setUnit(value)}
          />
          <Button onClick={handleAddItem}>Submit</Button>
        </VStack>
      )}
    </Box>
  );
};

export default AddItemForm;
