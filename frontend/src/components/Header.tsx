import Link from 'next/link';
import {
  Center,
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { TbToolsKitchen2 } from 'react-icons/tb';

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
  const linkHover = useColorModeValue('gray.100', 'raisinBlack');
  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded="md"
      fontWeight="semibold"
      href={href}
      _hover={{
        textDecoration: 'none',
        bg: linkHover,
      }}
      transition={'all 0.2s'}
    >
      <Text>{name}</Text>
    </Box>
  );
};

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('gray.50', 'jet');
  const headerLogoColor = useColorModeValue('jet', 'gray.50');

  return (
    <Box bg={headerBg}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h={16}
        shadow="md"
        px={4}
        w="full"
      >
        <Flex>
          <Center pr={8}>
            <Icon
              as={TbToolsKitchen2}
              w={5}
              h={5}
              color={headerLogoColor}
              mr={1}
            />
            <Heading
              color={headerLogoColor}
              fontWeight="semibold"
              fontSize="24"
            >
              Dish Dollar
            </Heading>
          </Center>
          <HStack spacing={8} alignItems="center">
            {linkItems.map((link) => (
              <NavLink link={link} key={link.name} />
            ))}
          </HStack>
        </Flex>
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
