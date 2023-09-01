import { MenuItem } from '@chakra-ui/react';

type OptionProps = {
  option: {
    value: string;
    label: string;
    icon?: any;
    isDisabled?: boolean;
  };
  onClick: () => void;
};

const Option: React.FC<OptionProps> = ({ option, onClick }) => {
  return (
    <MenuItem
      value={option.value}
      isDisabled={option.isDisabled}
      style={{ display: 'flex', alignItems: 'center' }}
      onClick={onClick}
    >
      {option.icon}
      {option.label}
    </MenuItem>
  );
};

export default Option;
