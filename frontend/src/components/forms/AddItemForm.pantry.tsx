import React, { useState } from 'react';
import {
  Button,
  Flex,
  Grid,
  Modal,
  Input,
  VStack,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { TbPin, TbFridge, TbIceCream, TbApple, TbMilk } from 'react-icons/tb';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Select } from '~/components/inputs/';

// TODO: add an option to add the item to shopping list upon creation
// TODO: close the active drawer when this form opens, to prevent any weird hits to the db
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

const unitOptions = [
  { value: 'kg', label: 'Kilogram' },
  { value: 'g', label: 'Gram' },
  { value: 'l', label: 'Liter' },
  { value: 'ml', label: 'Milliliter' },
];

const AddItemForm: React.FC = () => {
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('category'); // default to 'dairy'
  const [cost, setCost] = useState('');
  const [currency, setCurrency] = useState('dollars'); // default to 'dollars'
  const [initialAmount, setInitialAmount] = useState('');
  const [unit, setUnit] = useState('kg'); // default to 'kg'

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddItem = () => {
    // Logic for adding an item (e.g., send data to server)
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={onOpen}
        rightIcon={<ArrowForwardIcon />}
      >
        Add an item
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent px={4} py={8}>
          <VStack spacing={4}>
            <Input
              placeholder="Item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              maxW="400px"
            />
            <Select
              options={foodTypeOptions}
              value={itemType}
              onChange={(value) => setItemType(value)}
            />
            <Grid gridTemplateColumns="1fr 1fr" gap={4}>
              <Input
                placeholder="Initial amount"
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                maxW="400px"
              />
              <Select
                options={unitOptions}
                value={unit}
                onChange={(value) => setUnit(value)}
              />
            </Grid>
            <Grid gridTemplateColumns="1fr 1fr" gap={4}>
              <Input
                placeholder="Cost"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                maxW="400px"
              />
              <Select
                options={currencyTypeOptions}
                value={currency}
                onChange={(value) => setCurrency(value)}
              />
            </Grid>
            <Flex gap={4}>
              <Button variant="primary" onClick={handleAddItem}>
                Submit
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
            </Flex>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddItemForm;
