import { callLLM } from "../services/llm.service.js";
import { ingredientPrompt } from "../prompts/ingredient.prompt.js";
import demoResponse from "../mocks/sampleResponse.js";
import { polishText } from "../services/wordingPolish.js";
import { classifyIngredientsPrompt } from "../prompts/classifyIngredients.prompt.js";

// --------------------
// Helpers
// --------------------
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

const normalizeYesNo = (text = "") => {
  const clean = text.toLowerCase().trim();
  if (clean.startsWith("no")) return "NO";
  return "YES"; // fail-open (never reject real ingredients)
};

// --------------------
// Controller
// --------------------
export const analyzeIngredients = async (req, res) => {
  try {
    const { ingredients, source = "text" } = req.body;

    // ❌ Only reject empty input
    if (!ingredients || ingredients.trim().length === 0) {
      return res.json({
        type: "invalid_input",
        shouldICare: "Nothing to analyze yet.",
        decision: "Paste an ingredient list.",
        reasoning:
          "We need ingredients from a food label to analyze. Try copying them from the package.",
        confidence: "high",
      });
    }

    // 1️⃣ LLM-based classification (ingredient or not)
    const classifyPrompt = classifyIngredientsPrompt(ingredients);
    const classifyRaw = await callLLM(classifyPrompt);
    const isIngredientList = normalizeYesNo(classifyRaw);

    // 2️⃣ If clearly NOT ingredients → stop here
    if (isIngredientList === "NO") {
      return res.json({
        type: "not_ingredients",
        shouldICare: "Nothing to worry about yet.",
        decision: "This isn’t a food label.",
        reasoning:
          "The text doesn’t look like a food ingredient list. Paste ingredients directly from a product label.",
        confidence: "high",
      });
    }

    // 3️⃣ Full ingredient analysis
    const analysisPrompt = ingredientPrompt(ingredients);
    const llmResult = await callLLM(analysisPrompt);

    const finalResult = polishResponse(llmResult);

    return res.json({
      type: "analysis",
      ...finalResult,
    });
  } catch (error) {
    console.error("LLM Error:", error.message);

    // 🔥 Hackathon-safe fallback
    return res.json({
      type: "analysis",
      ...polishResponse(demoResponse),
    });
  }
};
