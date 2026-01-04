import dotenv from "dotenv";

dotenv.config();

const requiredEnv = ["GEMINI_API_KEY"];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.warn(`⚠️  Warning: Missing environment variable ${key}`);
  }
});

const env = {
  PORT: process.env.PORT || 4000,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};

export default env;
