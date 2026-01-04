import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use("/api", analyzeRoutes);

export default app;
