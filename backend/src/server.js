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

// API routes
app.use('/api/notes', notesRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  // Serve static files from React build
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  // Handle React routing - send all non-API requests to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
  });
} else {
  // Development mode - just show API info
  app.get("/", (req, res) => {
    res.json({ message: "API is running in development mode" });
  });
}

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      if (process.env.NODE_ENV !== "production") {
        console.log(`API available at: http://localhost:${PORT}`);
      }
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database: ", err);
    process.exit(1);
  });