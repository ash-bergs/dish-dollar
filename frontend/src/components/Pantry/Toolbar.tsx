import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import AddItemForm from '~/components/forms/AddItemForm.pantry';

function Toolbar() {
  return (
    <Box
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
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
        <Input placeholder="Search by text..." />
        <InputRightElement>
          <Icon as={SearchIcon} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Toolbar;
