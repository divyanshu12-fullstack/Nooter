import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use('/api/notes', notesRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/api/notes/`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database: ", err);
    process.exit(1);
  });


