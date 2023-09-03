import { Flex, IconButton } from '@chakra-ui/react';
import { AddIcon, ExternalLinkIcon, QuestionIcon } from '@chakra-ui/icons';

const buttonStyles = {
  borderRadius: 'full',
};

const ActionButtonSet: React.FC = () => {
  return (
    <Flex
      direction="column"
      position="absolute"
      top="20px"
      right="20px"
      gap={2}
      zIndex={3}
      display="none" // Initially hide
      className="action-buttons" // Used to show on hover of CardWrapper
    >
      <IconButton {...buttonStyles} icon={<AddIcon />} aria-label="Add" />
      <IconButton
        {...buttonStyles}
        icon={<ExternalLinkIcon />}
        aria-label="Share"
      />
      <IconButton
        {...buttonStyles}
        icon={<QuestionIcon />}
        aria-label="More Actions"
      />
    </Flex>
  );
};

export default ActionButtonSet;
