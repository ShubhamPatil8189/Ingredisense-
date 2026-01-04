import { callLLM } from "../services/llm.service.js";
import { ingredientPrompt } from "../prompts/ingredient.prompt.js";
import demoResponse from "../mocks/sampleResponse.js";
import { polishText } from "../services/wordingPolish.js";

// Apply wording polish safely across response
const polishResponse = (result) => {
  if (!result) return result;

  return {
    ...result,
    shouldICare: polishText(result.shouldICare),
    decision: polishText(result.decision),
    reasoning: polishText(result.reasoning),
    comparison: polishText(result.comparison),
    primaryConcern: {
      ...result.primaryConcern,
      whyItMatters: polishText(result.primaryConcern?.whyItMatters),
    },
    secondaryConcern: {
      ...result.secondaryConcern,
      whyItMatters: polishText(result.secondaryConcern?.whyItMatters),
    },
  };
};

export const analyzeIngredients = async (req, res) => {
  try {
    const { ingredients, source = "text" } = req.body;

    if (!ingredients || ingredients.trim().length === 0) {
      return res.status(400).json({ error: "Ingredients are required" });
    }

    const prompt = ingredientPrompt(ingredients);

    const llmResult = await callLLM(prompt);

    const finalResult = polishResponse(llmResult);

    return res.json(finalResult);
  } catch (error) {
    console.error("LLM Error:", error.message);

    // 🔥 Hackathon-safe fallback (also polished for consistency)
    return res.json(polishResponse(demoResponse));
  }
};
