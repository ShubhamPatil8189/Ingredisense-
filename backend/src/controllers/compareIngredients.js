import { callLLM } from "../services/llm.service.js";
import { compareIngredientsPrompt } from "../prompts/compareIngredients.prompt.js";

export const compareIngredients = async (req, res) => {
  try {
    const { ingredientsA, ingredientsB } = req.body;

    if (!ingredientsA || !ingredientsB) {
      return res.status(400).json({
        error: "Both ingredient lists are required for comparison."
      });
    }

    const prompt = compareIngredientsPrompt(
      ingredientsA,
      ingredientsB
    );

    const result = await callLLM(prompt);

    return res.json(result);

  } catch (error) {
    console.error("Comparison LLM Error:", error.message);

    return res.status(500).json({
      error: "Unable to compare products right now."
    });
  }
};
