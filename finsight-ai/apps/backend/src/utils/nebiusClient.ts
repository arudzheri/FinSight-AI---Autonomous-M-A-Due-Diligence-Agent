import { OpenAI } from 'openai';

export const nebius = new OpenAI({
  apiKey: process.env."sk-abcdef1234567890abcdef1234567890abcdef12",
  baseURL: process.env.NEBIUS_BASE_URL || 'https://api.nebius.ai/v1',
});
