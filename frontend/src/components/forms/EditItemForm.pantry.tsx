import React from 'react';
import { Box, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { PantryItem, pantryItemUnits } from '@/types';

import { TwoPointNumberInput, Select } from '@/components/inputs';

const EditItemForm = (item: PantryItem): JSX.Element => {
  console.log('item:', item);
  const {
    initialAmount: itemInitialAmount,
    unit: itemUnit,
    cost: itemCost,
  } = item;
  const floatInitialAmount = itemInitialAmount.toFixed(2);
  const [initialAmount, setInitialAmount] = React.useState(floatInitialAmount);

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
        gridTemplateColumns={'2fr 1fr'}
        gap="2"
      >
        {/* <FormLabel>Weight (volume)</FormLabel> */}
        <TwoPointNumberInput
          value={initialAmount}
          onChange={(value) => setInitialAmount(value)}
        />
        <Select
          options={unitOptions}
          value={unit}
          onChange={(value) => setUnit(value)}
        />
      </FormControl>

      <FormControl mb={4}>
        {/* <FormLabel>Cost</FormLabel> */}
        <TwoPointNumberInput
          //format="$"
          value={cost}
          onChange={(value) => setCost(value)}
        />
      </FormControl>

      <Button type="submit" bg="imperialRed" w="full">
        Submit
      </Button>
    </Box>
  );
};

export default EditItemForm;
