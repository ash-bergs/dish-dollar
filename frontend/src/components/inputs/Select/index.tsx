import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import Option from '@/components/inputs/Select/Option';

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
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            overflow={'hidden'}
          >
            <Flex px={2} py={1}>
              <Text>{value}</Text>
              <Icon
                as={FiChevronDown}
                transform={isOpen ? 'rotate(0)' : 'rotate(180deg)'}
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
        </>
      )}
    </Menu>
  );
};

export default Select;
