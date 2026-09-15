import { OpenAI } from 'openai';

export const nebius = new OpenAI({
  apiKey: process.env.NEBIUS_API_KEY,
  baseURL: process.env.NEBIUS_BASE_URL || 'https://api.nebius.ai/v1',
});
