export const classifyIngredientsPrompt = (text) => `
You are checking whether the following text is likely an ingredient list from a food label.

Text:
"""
${text}
"""

Rules:
- Answer ONLY one word
- Answer YES if this could reasonably be ingredients (even partial or messy)
- Answer NO only if it is clearly unrelated (random text, conversation, nonsense)

Answer:
`;
