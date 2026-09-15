import { OpenAI } from 'openai';

export const nebius = new OpenAI({
  apiKey: process.env."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"
  baseURL: process.env.NEBIUS_BASE_URL || 'https://api.nebius.ai/v1',
});
