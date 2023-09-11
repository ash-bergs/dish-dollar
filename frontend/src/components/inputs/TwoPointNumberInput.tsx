import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorMode,
} from '@chakra-ui/react';
import inputStyles from '@/components/inputs/styles';

/**
 * A reusable number input component tailored for two-point precision values.
 * Use cases include adding recipes, updating pantry items, and adding items to the shopping list.
 * For different precision needs in the future, consider refactoring or creating a variant.
 */
type TwoPointNumberInputProps = {
  defaultValue?: string; // if not passed, we assume the same as value
  onChange: (value: string) => void;
  value: string;
  format?: string; // prepend a format to the value - i.e. '$9.99'
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

  return (
    <NumberInput
      {...styles}
      defaultValue={initialAmount}
      onChange={(value) => onChange(value)}
      value={`${format} ${value}`}
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
