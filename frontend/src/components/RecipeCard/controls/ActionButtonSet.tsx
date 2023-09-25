import { Flex, IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { AddIcon, ExternalLinkIcon, QuestionIcon } from "@chakra-ui/icons";


const ActionButtonSet: React.FC = () => {
  const buttonBg = useColorModeValue('white', 'jet');

  const buttonStyles = {
    borderRadius: "full",
    bg: buttonBg,
    // TODO: investigate chakra's icon button styles 
    _hover: {
      bg: buttonBg,
    },
  };

  return (
    <Flex
      direction="column"
      position="absolute"
      top="20px"
      right="20px"
      gap={2}
      className="action-buttons"
    >
      <Tooltip placement="right" label="Add to your recipes">
        <IconButton {...buttonStyles} icon={<AddIcon />} aria-label="Add" />
      </Tooltip>
      <Tooltip placement="right" label="Share recipe">
        <IconButton
          {...buttonStyles}
          icon={<ExternalLinkIcon />}
          aria-label="Share"
        />
      </Tooltip>
      <Tooltip placement="right" label="More actions">
        <IconButton
          {...buttonStyles}
          icon={<QuestionIcon />}
          aria-label="More Actions"
        />
      </Tooltip>
    </Flex>
  );
};

export default ActionButtonSet;
