import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';

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
};

const TwoPointNumberInput: React.FC<TwoPointNumberInputProps> = ({
  defaultValue,
  value,
  onChange,
}) => {
  // variable to determine default value
  const initialAmount = defaultValue ? defaultValue : value;

  return (
    <NumberInput
      defaultValue={initialAmount}
      onChange={(value) => onChange(value)}
      value={value}
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
