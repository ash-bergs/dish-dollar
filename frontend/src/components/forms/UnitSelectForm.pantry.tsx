import React, { useState } from 'react';
import {
  Button,
  Flex,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  Switch,
  Text,
  HStack,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const UnitSelectForm: React.FC = () => {
  const [unit, setUnit] = useState('kg'); // default to 'kg'
  const [isMetric, setIsMetric] = useState(true); // default to metric units

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpdateItemUnit = (selectedUnit: string) => {
    setUnit(selectedUnit);
    onClose();
    // Logic for updating the unit for the item (e.g., send data to server)
  };

  const unitsByCategory = {
    metric: ['kg', 'g', 'ml', 'L'],
    imperial: ['lb', 'oz', 'cup', 'gal'],
    counting: ['package', 'dozen', 'piece', 'slice', 'unit'],
  };

  return (
    <>
      <Button variant="secondary" onClick={onOpen}>
        {unit}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent px={4} py={8}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontFamily={'heading'} fontWeight="bold">
              Select Unit:
            </Text>
            <HStack spacing={4}>
              <Text>Imperial</Text>
              <Switch
                isChecked={isMetric}
                onChange={() => setIsMetric(!isMetric)}
              />
              <Text>Metric</Text>
            </HStack>
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {isMetric
              ? unitsByCategory.metric.map((unitOption) => (
                  <Button
                    key={unitOption}
                    onClick={() => handleUpdateItemUnit(unitOption)}
                  >
                    {unitOption}
                  </Button>
                ))
              : unitsByCategory.imperial.map((unitOption) => (
                  <Button
                    key={unitOption}
                    onClick={() => handleUpdateItemUnit(unitOption)}
                  >
                    {unitOption}
                  </Button>
                ))}
          </Grid>
          <Text fontFamily={'heading'} fontWeight="bold" py={4}>
            Non-Standard:
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {unitsByCategory.counting.map((unitOption) => (
              <Button
                key={unitOption}
                onClick={() => handleUpdateItemUnit(unitOption)}
              >
                {unitOption}
              </Button>
            ))}
          </Grid>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UnitSelectForm;
