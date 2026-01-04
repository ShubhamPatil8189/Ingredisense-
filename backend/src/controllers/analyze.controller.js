import { callLLM } from "../services/llm.service.js";
import { ingredientPrompt } from "../prompts/ingredient.prompt.js";
import demoResponse from "../mocks/sampleResponse.js";

export const analyzeIngredients = async (req, res) => {
  try {
    const { ingredients, source = "text" } = req.body;

    if (!ingredients || ingredients.trim().length === 0) {
      return res.status(400).json({ error: "Ingredients are required" });
    }

    const prompt = ingredientPrompt(ingredients);

    const llmResult = await callLLM(prompt);

    return res.json(llmResult);
  } catch (error) {
    console.error("LLM Error:", error.message);

    // 🔥 Hackathon-safe fallback
    return res.json(demoResponse);
  }
};
