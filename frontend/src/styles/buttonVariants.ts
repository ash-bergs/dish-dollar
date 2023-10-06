// button variants - needs its own module
const buttonVariants = {
  primary: {
    bg: 'linear-gradient(to bottom, #FFA987, #E54B4B)',
    border: '1px solid',
    borderColor: 'burntTangerine',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white',
    _hover: {
      bg: 'linear-gradient(to bottom, #FFB387, #F75151)', // hue shift on tangerine, brightness increase on imperial red
      boxShadow: 'lg',
      transform: 'scale(1.02)',
    },
    px: '8',
    transition: 'all .3s',
  },
  secondary: {
    bg: 'linear-gradient(to bottom, white, #F9F9F9)',
    color: 'jet',
    boxShadow: 'md',
    border: '1px solid #E0E0E0',
    _hover: {
      boxShadow: 'lg',
      transform: 'scale(1.02)',
    },
    px: '8',
    transition: 'all .3s',
  },
};

export default buttonVariants;
