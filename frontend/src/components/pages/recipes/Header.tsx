import React from "react";
import { Button, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";

//TODO: how to present user's recipes? Create a recipe box icon, animate it flipping open, and then show the recipes in a grid?
// Draft this in figma before building
// TODO: New recipes button has a ! icon when there are new recipes to view
export const Header = () => {
  return (
    <Grid gridTemplateColumns={"1fr auto"}>
      <Heading>Recipes</Heading>
      <Center>
        <Flex gap={2} alignItems={"center"}>
        <Text fontSize="xs">Your Recipes</Text>
        <Text fontSize="xs">New Recipes</Text>
        <Button>Add Recipe</Button>
        </Flex>
      </Center> 
    </Grid>
  );
};

export default Header;
