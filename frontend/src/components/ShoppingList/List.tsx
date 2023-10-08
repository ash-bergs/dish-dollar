import React from 'react';
import {
  Box,
  Checkbox,
  Flex,
  Icon,
  List as ChakraList,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { CardContainer } from '~/components/layout/containers';
import { TbPencil, TbStar } from 'react-icons/tb';

const List = ({ list }: { list: string[] }) => {
  return (
    <ChakraList spacing={3}>
      {list.map((item, index) => (
        <ListItem key={index}>
          <CardContainer>
            <Box>
              <Flex alignItems="center">
                <Checkbox size="lg" />

                <Box ml={3}>
                  <Text fontSize="xs" fontStyle="italic">
                    Text
                  </Text>
                  <Text fontSize="24px">{item}</Text>
                </Box>
              </Flex>
            </Box>
            <Icon
              as={TbStar}
              position="absolute"
              top="12px"
              right="14px"
              boxSize="6"
              color="#FFA987"
              cursor="pointer"
            />
            <Flex position="absolute" bottom="12px" right="14px" gap={1}>
              <Icon as={TbPencil} boxSize="6" color="#FFA987" />
            </Flex>
          </CardContainer>
        </ListItem>
      ))}
    </ChakraList>
  );
};

export default List;
