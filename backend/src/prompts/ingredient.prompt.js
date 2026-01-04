export const ingredientPrompt = (ingredients) => `
Analyze the following food ingredients and help a user decide whether to consume the product.

Ingredients:
${ingredients}

Return your response in this exact JSON format:

{
  "decision": "",
  "keyConcerns": [],
  "reasoning": "",
  "whoShouldAvoid": [],
  "uncertainty": "",
  "confidence": "low | medium | high"
}

Rules:
- Be honest and non-alarmist
- Do NOT give medical advice
- Avoid scientific jargon
- Focus on decision-making, not listing data
`;
