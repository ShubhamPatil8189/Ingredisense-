import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const callLLM = async (prompt) => {
  // Use 'gemini-1.5-flash' for speed/cost or 'gemini-1.5-pro' for complex reasoning
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "You are a food ingredient reasoning assistant. Explain tradeoffs clearly and acknowledge uncertainty.",
    generationConfig: {
        responseMimeType: "application/json", // Forces JSON output
        temperature: 0.4,
    }
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return JSON.parse(text);
};