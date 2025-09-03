import { Box, Text, Button, Stack } from "@chakra-ui/react";
import { formatDateTime } from "../utils/formatDate";

const NoteCard = ({ id, title, content, date, onDelete, onUpdate }) => {
  return (
    <Box
      w="300px"
      h="auto"
      shadow="md"
      borderRadius="xl"
      p={5}
      bg="cyan.100"
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
        <Button size="sm" colorScheme="blue" onClick={onUpdate}>
          Update
        </Button>
      </Stack>
    </Box>
  );
};

export default NoteCard;
