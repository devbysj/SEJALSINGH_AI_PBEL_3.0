import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRouter from "./routes/upload.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing Gateway
app.use("/api/v1/resumes", uploadRouter);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.use((err, req, res, next) => {
  console.error("❌ Critical Backend Pipeline Error:", err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal server framework execution failure."
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 HireSense Core Engine deployed on port: ${PORT}`);
});