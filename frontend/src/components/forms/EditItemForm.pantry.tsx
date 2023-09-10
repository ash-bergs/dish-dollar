import React from 'react';
import { Box, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { PantryItem, pantryItemUnits } from '@/types';

import { TwoPointNumberInput, Select } from '@/components/inputs';

/**
 * type SelectProps = {
  options: {
    value: string;
    label: string;
    icon?: any;
    isDisabled?: boolean;
  }[];
  value: string;
  onChange: (value: string) => void;
};
 */

const EditItemForm = (item: PantryItem): JSX.Element => {
  const {
    initialAmount: itemInitialAmount,
    unit: itemUnit,
    cost: itemCost,
  } = item;
  const [initialAmount, setInitialAmount] = React.useState(itemInitialAmount);
  const [cost, setCost] = React.useState(itemCost);
  const [unit, setUnit] = React.useState(itemUnit);

  const itemType = item.type;
  const unitTypeOptions = pantryItemUnits[itemType];
  // we've set up the units object, but we need to create actual options
  // we'll use a memo
  // and map current options to the right shape
  const unitOptions = React.useMemo(() => {
    return unitTypeOptions.map((unit) => ({
      value: unit,
      label: unit,
    }));
  }, [unitTypeOptions]);

  // I don't think I'll provide a way to change currency here
  // the user should set it as a profile option
  // i see little reason to track different currencies in the same pantry
  // const [currency, setCurrency] = React.useState('USD');
  // I do need to provide a way to change the unit
  // Because a user might have bought a 2L bottle of milk instead of a 1L bottle
  // but we can still prompt the user for some guidance on how to handle this
  // ask for metric or imperial at sign up

  const handleSubmit = (e) => {
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
      px={2}
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

/**
 *   const [currentArea, setCurrentArea] = useState(fixedInitialArea)
  const fixedInitialArea = area.toFixed(2)
// dynamic step for the number input
export const getStep = (area: string) => {
  // convert to number for comparisons
  const parsedArea = parseInt(area)
  if (parsedArea < 50) return 1.0
  if (parsedArea < 200) return 5.0
  return 10.0
}
  const fixedInitialArea = area.toFixed(2)


export const inputProps = {
  bg: "white",
  border: "3px dashed",
  borderRadius: "md",
  borderColor: "gray.300",
  color: "gray.400",
  fontSize: "md",
  fontFamily: "body",
  _hover: { borderColor: "gray.400" },
  _focusVisible: { borderColor: "gray.400" },
}
 * 
 * <NumberInput
            {...inputProps}
            onChange={value => setCurrentArea(value)}
            defaultValue={fixedInitialArea}
            value={currentArea}
            precision={2}
            step={getStep(currentArea)}
            min={0.0}
            focusBorderColor="transparent"
            size="sm"
          >
            <NumberInputField border="none" />
            <NumberInputStepper>
              <NumberIncrementStepper border="none" />
              <NumberDecrementStepper border="none" />
            </NumberInputStepper>
          </NumberInput>
 */
