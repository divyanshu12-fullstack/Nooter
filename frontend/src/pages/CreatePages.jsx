import { useState } from "react";
import { createNote } from "../api";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePages = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await createNote({ title, content });
    navigate("/");
  }

  return (
    <Box p={6}>
      <Heading mb={4}>Create a New Note</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter note content"
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Save Note
        </Button>
      </form>
    </Box>
  );
};

export default CreatePages;
