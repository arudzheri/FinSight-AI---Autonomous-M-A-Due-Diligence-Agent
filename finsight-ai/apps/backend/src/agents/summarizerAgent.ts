import { nebius } from '../utils/nebiusClient';

export const runSummarizerAgent = async (rawContext: string): Promise<string> => {
  try {
    // Използваме по-лек модел за бързо обработване на големи текстове
    const response = await nebius.chat.completions.create({
      model: 'nvidia/llama-3.1-nemotron-70b-instruct', 
      messages: [
        {
          role: 'system',
          content: 'You are an elite financial research assistant. Synthesize the raw web data into a dense, high-signal brief. Extract key facts, metrics, and events. Remove noise.'
        },
        {
          role: 'user',
          content: `Analyze and summarize this raw intelligence data:\n\n${rawContext}`
        }
      ],
      temperature: 0.2,
    });

    return response.choices[0].message.content || 'Summary generation failed.';
  } catch (error) {
    console.error('Error in Summarizer Agent (Nebius/Nemotron-70B):', error);
    throw new Error('Failed to summarize financial data.');
  }
};
