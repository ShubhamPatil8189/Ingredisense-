import express from "express";
import { analyzeIngredients } from "../controllers/analyze.controller.js";

const router = express.Router();

router.post("/analyze", analyzeIngredients);

export default router;
