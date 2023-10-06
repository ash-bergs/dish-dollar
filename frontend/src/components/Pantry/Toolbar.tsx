import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import AddItemForm from '~/components/forms/AddItemForm.pantry';
import inputStyles from '~/components/inputs/styles';

function Toolbar() {
  const { colorMode } = useColorMode();
  const styles = inputStyles(colorMode);
  return (
    <Flex
      p={4}
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      //boxShadow="base"
      //bg="white"
    >
      {/* Filter dropdown */}
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Filter
        </MenuButton>
        <MenuList>
          {/* Placeholder menu items for filters, replace with select or radio components later */}
          <MenuItem>Filter Option 1</MenuItem>
          <MenuItem>Filter Option 2</MenuItem>
        </MenuList>
      </Menu>
      {/* Add item form */}
      <AddItemForm />
      {/* Search input */}
      <InputGroup>
        <Input {...styles} placeholder="Search by text..." />
        <InputRightElement>
          <Icon as={SearchIcon} />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default Toolbar;
