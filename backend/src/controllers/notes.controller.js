import Note from "../../models/Note.js";
// Fetching all the notes 
export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    console.error("Error in get all notes Controller", err);
    res.status(500).json({ message: "Internal server Error" });
  }
}
// Fetching a single note by it's id ,
// Not used in frontend but can be tested via Postman
export async function getNotebyId(req, res) {
  try {
    const fetchNote = await Note.findById(req.params.id);
    if (!fetchNote) return res.status(404).json({ message: "Note not found" });
    return res.status(200).json(fetchNote);
  } catch (error) {
    console.log("Error in getNoteBy Id Controller ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// creating a note - POST request
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller ", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}

// Update Method - This is using the Id of note
// it search by id and then updates the title or content 
// whatever is passed, new true ensures updated note is returned
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note Updated Successfully", note: updatedNote });
  } catch (error) {
    console.error("Error in Updating Note", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}

// Delete note by its ID
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note Deleted Successfully", note: deletedNote });
  } catch (error) {
    console.error("Error in Deleting Note", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}   