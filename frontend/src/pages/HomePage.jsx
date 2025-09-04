import { useEffect, useState } from "react";
import { fetchNotes, deleteNote, updateNote } from "../api";
import { Box, Button, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  async function loadNotes() {
    const data = await fetchNotes();
    setNotes(data);
  }

  async function handleDelete(id) {
    await deleteNote(id);
    loadNotes(); // refresh list after delete
  }

  async function handleUpdate(id, note) {
    await updateNote(id, note);
    loadNotes();
  }

  return (
    <Box p={6}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {notes.map((note) => (
          <GridItem key={note._id}>
            <NoteCard
              id={note._id}
              title={note.title}
              content={note.content}
              date={note.createdAt}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </GridItem>
        ))}
      </Grid>

      {notes.length === 0 && (
        <VStack spacing={4} mt={10}>
          <Heading size="md">No Notes Found</Heading>
          <Button as={Link} to="/create" colorScheme="teal">
            Create New Note
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default HomePage;
