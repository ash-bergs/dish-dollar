import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
} from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <Center height="100vh" bgGradient="linear(to-bl, #EDF2F7, #A0AEC0)">
      <Box
        p={8}
        width="full"
        maxWidth={{ base: '380px', sm: '440px' }}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <Box textAlign="center">
          <Heading>Welcome to Dish-Dollar</Heading>
        </Box>
        <Box mt={4}>
          <form>
            <VStack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Button width="full" mt={6} colorScheme="teal" type="submit">
                Log In
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Center>
  );
}
