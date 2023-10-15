import React from 'react';
import { Box, FormControl, FormLabel, Button, Modal } from '@chakra-ui/react';
import { PantryItem, pantryItemUnits } from '~/types';
import UnitSelectForm from './UnitSelectForm.pantry';
import { TwoPointNumberInput, Select } from '~/components/inputs';

const EditItemForm = (item: PantryItem): JSX.Element => {
  const {
    initialAmount: itemInitialAmount,
    unit: itemUnit,
    cost: itemCost,
  } = item;

  const [initialAmount, setInitialAmount] = React.useState(
    itemInitialAmount.toFixed(2)
  );
  const [cost, setCost] = React.useState(itemCost.toFixed(2));
  const [unit, setUnit] = React.useState(itemUnit);

  const itemType = item.type;
  const unitTypeOptions = pantryItemUnits[itemType];

  // map the unit type options to the format that the Select component expects
  const unitOptions = React.useMemo(() => {
    return unitTypeOptions.map((unit) => ({
      value: unit,
      label: unit,
    }));
  }, [unitTypeOptions]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Initial Amount:', initialAmount, 'Cost:', cost);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      maxWidth="400px"
      margin="0 auto"
      px={1}
      py={4}
    >
      <FormControl
        mb={4}
        display="grid"
        gridTemplateColumns={'1fr auto'}
        gap="2"
      >
        <TwoPointNumberInput
          value={initialAmount}
          onChange={(value) => setInitialAmount(value)}
        />
        <UnitSelectForm />
      </FormControl>

      <FormControl mb={4}>
        {/* <FormLabel>Cost</FormLabel> */}
        <TwoPointNumberInput
          //format="$"
          value={cost}
          onChange={(value) => setCost(value)}
        />
      </FormControl>

      <Button type="submit" variant="primary" w="full">
        Submit
      </Button>
    </Box>
  );
};

export default EditItemForm;
