import express from "express";
import { compareIngredients } from "../controllers/compareIngredients.js";

const router = express.Router();

router.post("/compare", compareIngredients);

export default router;
