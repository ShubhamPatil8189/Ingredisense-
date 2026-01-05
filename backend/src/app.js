import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.routes.js";
import compareRoutes from "./routes/compare.js";

const app = express();

app.use(
  cors({
    origin: "*", // ✅ allow public access
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use("/api", analyzeRoutes);
app.use("/api", compareRoutes);

export default app;
