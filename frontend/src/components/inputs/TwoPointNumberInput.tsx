import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import inputStyles from '@/components/inputs/styles';

// created this as a component because I'll probably use this in a lot of places
// adding recipes
// updating pantry items
// adding items to shopping list
// etc.

// if for some reason I need to have a number input for a different precision
// then I'll update this to be 'FloatingPointNumberInput' or something
// and add precision to props

type TwoPointNumberInputProps = {
  defaultValue?: string; // if not passed, we assume the same as value
  onChange: (value: string) => void;
  value: string;
  format?: string;
};

const TwoPointNumberInput = ({
  defaultValue,
  value,
  onChange,
  format,
}: TwoPointNumberInputProps): JSX.Element => {
  const initialAmount = defaultValue ? defaultValue : value;
  const { colorMode } = useColorMode();
  const styles = inputStyles(colorMode);
  // If a format is passed it will be prepended to the value
  // Mostly for currency symbols
  const formatValue = (val: string) => format + val;
  const formatedValue = format ? formatValue(value) : value;

  return (
    <NumberInput
      {...styles}
      defaultValue={initialAmount}
      onChange={(value) => onChange(value)}
      value={formatedValue}
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
  );
};

export default TwoPointNumberInput;
