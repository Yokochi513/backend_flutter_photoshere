import http from 'http';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';
import app from './app.js';

dotenv.config({ path: path.resolve('../.env') });

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in .env");
  process.exit(1);
}

// MongoDB 接続
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
