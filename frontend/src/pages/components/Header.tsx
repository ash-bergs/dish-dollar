import { Box, Flex, HStack, IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

type NavLinkProps = {
  children: React.ReactNode;
};

const links = ['Home', 'Recipes', 'Pantry'];

const NavLink: React.FC<NavLinkProps> = ({ children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded="md"
      href={'#'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
      }}
      transition={'all 0.2s'}
    >
      {children}
    </Box>
  );
};

const Header = () => {
  return (
    <Box bg="gray.100">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h={16}
        shadow="md"
        px={4}
      >
        <HStack spacing={8} alignItems="center">
          {links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
        <IconButton aria-label="Menu" icon={<FaBars />} />
      </Flex>
    </Box>
  );
};

export default Header;
