import Link from 'next/link';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const linkItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Recipes',
    href: '/recipes',
  },
  {
    name: 'Pantry',
    href: '/pantry',
  },
];

type NavLinkProps = {
  link: {
    name: string;
    href: string;
  };
};

const NavLink: React.FC<NavLinkProps> = ({ link: { name, href } }) => {
  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded="md"
      href={href}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
      }}
      transition={'all 0.2s'}
    >
      {name}
    </Box>
  );
};

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('gray.100', 'jet');

  return (
    <Box bg={headerBg}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h={16}
        shadow="md"
        px={4}
      >
        <HStack spacing={8} alignItems="center">
          {linkItems.map((link) => (
            <NavLink link={link} key={link.name} />
          ))}
        </HStack>
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />{' '}
      </Flex>
    </Box>
  );
};

export default Header;
