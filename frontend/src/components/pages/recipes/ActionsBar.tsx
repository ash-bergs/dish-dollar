import React from "react";
import { useAtom } from "jotai";
import {
  Input,
  Box,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { searchAtom, categoryAtom } from "@/lib/store/recipes.store";

export const ActionsBar = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchAtom);
  const [selectedCategory, setSelectedCategory] = useAtom(categoryAtom);
  const inputBg = useColorModeValue("white", "jet");

  return (
    <Box mb={6} py="2">
      {/* Search Bar */}
      <Input
        bg={inputBg}
        mb={4}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a recipe..."
        type="text"
        value={searchTerm}
      />

      {/* Category Radio Buttons */}
      <RadioGroup
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
      >
        <Stack direction="row">
          <Radio value="Breakfast">Breakfast</Radio>
          <Radio value="Lunch">Lunch</Radio>
          <Radio value="Dinner">Dinner</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default ActionsBar;
