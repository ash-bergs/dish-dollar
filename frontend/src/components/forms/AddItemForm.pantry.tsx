import React, { useState } from 'react';
import { Box, Button, Input, Select, Checkbox, VStack } from '@chakra-ui/react';

const AddItemForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('dairy'); // default to 'dairy'
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
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          >
            <option value="dairy">Dairy</option>
            <option value="produce">Produce</option>
            <option value="pantry">Pantry</option>
            <option value="staple">Staple</option>
            <option value="frozen">Frozen</option>
          </Select>
          <Input
            placeholder="Cost"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <Select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="dollars">Dollars</option>
            <option value="pounds">Pounds</option>
          </Select>
          <Button onClick={handleAddItem}>Submit</Button>
        </VStack>
      )}
    </Box>
  );
};

export default AddItemForm;
