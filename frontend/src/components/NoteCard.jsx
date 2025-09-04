import {
  Box,
  Text,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  ModalBody,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { formatDateTime } from "../utils/formatDate";

const NoteCard = ({ id, title, content, date, onDelete, onUpdate }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = () => {
    onUpdate(id, { title: newTitle, content: newContent });
    onClose();
  };
  return (
    <Box
      w="300px"
      h="auto"
      shadow="md"
      borderRadius="xl"
      p={5}
      bg="whiteAlpha.900"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      _hover={{ transform: "scale(1.03)" }}
      transition="all 0.2s ease-in-out"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2} color="teal.600">
        {title}
      </Text>

      <Text fontSize="md" color="gray.700" flex="1" mb={3} noOfLines={3}>
        {content}
      </Text>

      <Text fontSize="sm" color="gray.500" mb={3} alignSelf="flex-start">
        {formatDateTime(new Date(date))}
      </Text>

      <Stack direction="row" spacing={4} alignSelf={"flex-end"}>
        <Button size="sm" colorScheme="red" onClick={() => onDelete(id)}>
          Delete
        </Button>
        <Button size="sm" colorScheme="blue" onClick={onOpen}>
          Update
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Note</ModalHeader>
          <ModalBody>
            <Input
              mb={3}
              value={newTitle}
              placeholder={title}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Textarea
              value={newContent}
              placeholder={content}
              onChange={(e) => setNewContent(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NoteCard;
