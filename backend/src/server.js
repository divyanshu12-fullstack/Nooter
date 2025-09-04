import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import path from "path";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: 'http://localhost:5173'
  }));
}

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


