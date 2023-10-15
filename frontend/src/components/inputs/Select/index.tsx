import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

import Option from '~/components/inputs/Select/Option';
import inputStyles from '~/components/inputs/styles';

type SelectProps = {
  options: {
    value: string;
    label: string;
    icon?: any;
    isDisabled?: boolean;
  }[];
  value: string;
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const { colorMode } = useColorMode();
  const styles = inputStyles(colorMode);
  return (
    <Menu>
      {({ isOpen }) => (
        <Box zIndex={100} position="relative">
          <MenuButton {...styles} borderRadius="md" overflow={'hidden'}>
            <Flex
              px={2}
              py={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text>{value}</Text>
              <Icon
                as={FiChevronDown}
                // transform={isOpen ? 'rotate(0)' : 'rotate(180deg)'}
                transition="all .2s ease-in-out"
              />
            </Flex>
          </MenuButton>
          <MenuList>
            {options.map((option) => (
              <Option
                key={option.value}
                {...{ option }}
                onClick={() => onChange(option.value)}
              />
            ))}
          </MenuList>
        </Box>
      )}
    </Menu>
  );
};

export default Select;
