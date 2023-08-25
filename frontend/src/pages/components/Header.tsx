import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="blue.500"
        p={4}
        shadow="md"
      >
        <IconButton aria-label="Menu" icon={<FaBars />} />
        <Heading color="white">Home</Heading>
        <Heading color="white" ml={4}>
          Recipes
        </Heading>
        <Heading color="white" ml={4}>
          Pantry
        </Heading>
      </Flex>
      <Box boxSize="40px" bg="white" borderRadius="full" />
    </>
  );
};

export default Header;
