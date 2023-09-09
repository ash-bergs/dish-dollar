import React from 'react';
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useColorModeValue,
} from '@chakra-ui/react';
// TODO: Need a better icon - just a placeholder for now
import { TbSparkles } from 'react-icons/tb';

import type { PantryItem } from '@/types';

const SliderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box px={7} pt={6} pb={3}>
      {children}
    </Box>
  );
};

const StockSlider: React.FC<PantryItem> = (item) => {
  const thumbColor = () => {
    const value = item.quantityInStock * 100;

    if (value <= 33) return '#E54B4B'; // imperialRed
    if (value <= 66) return '#F06A35'; // burntTangerine
    return '#80D39B'; // seafoamGreen
  };
  const thumbBg = useColorModeValue('white', 'jet');

  return (
    <SliderContainer>
      <Slider
        aria-label="stock-slider"
        defaultValue={item.quantityInStock * 100}
        min={0}
        max={100}
        //onChangeEnd={(value) => handleChange(item.id, value / 100)}
      >
        <SliderTrack
          h=".45rem"
          bgGradient="linear(to-r, #E54B4B, #F06A35, #80D39B)"
          borderRadius="full"
        >
          <SliderFilledTrack bg="transparent" />
        </SliderTrack>
        <SliderThumb bg={thumbBg} boxSize={7}>
          <Box color={thumbColor()} as={TbSparkles} />
        </SliderThumb>
      </Slider>
    </SliderContainer>
  );
};

export default StockSlider;
