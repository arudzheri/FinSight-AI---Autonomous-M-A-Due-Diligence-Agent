import { OpenAI } from 'openai';

export const nebius = new OpenAI({
  apiKey: process.env."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",
  baseURL: process.env.NEBIUS_BASE_URL || 'https://api.nebius.ai/v1',
});
