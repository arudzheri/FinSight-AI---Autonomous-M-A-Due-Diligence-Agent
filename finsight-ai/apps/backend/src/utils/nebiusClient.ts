import OpenAI from 'openai';
import { dotenvConfig } from '../config/environment';

// Конфигуриране на Nebius клиента чрез техния OpenAI-compatible endpoint
export const nebius = new OpenAI({
  apiKey: process.env.NEBIUS_API_KEY,
  baseURL: 'https://nebius.ai', // Официалният base URL за Nebius Studio
});
