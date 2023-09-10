import React from 'react';
import { Select } from '@/components/inputs';
import {
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';
import { PantryItem } from '@/types';

const EditItemForm = () => {
  const [initialAmount, setInitialAmount] = React.useState('0.00');
  const [cost, setCost] = React.useState(0);
  const [currency, setCurrency] = React.useState('USD');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(
      'Initial Amount:',
      initialAmount,
      'Cost:',
      cost,
      'Currency:',
      currency
    );
  };

  return (
    <Box as="form" onSubmit={handleSubmit} maxWidth="400px" margin="0 auto">
      <FormControl mb={4}>
        <FormLabel>Weight (volume)</FormLabel>
        <NumberInput
          defaultValue={initialAmount}
          onChange={(value) => setInitialAmount(value)}
          value={initialAmount}
          precision={2}
          step={1.0}
          min={0.0}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Cost</FormLabel>
        <NumberInput
          min={0}
          precision={2}
          step={0.01}
          value={cost}
          onChange={(valueString) => setCost(parseFloat(valueString))}
        >
          <NumberInputField placeholder="Enter cost" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Currency</FormLabel>
      </FormControl>

      <Button type="submit" colorScheme="teal">
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
