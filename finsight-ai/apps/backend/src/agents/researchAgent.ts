import axios from 'axios';

export interface ResearchResult {
  query: string;
  context: string;
  sources: string[];
}

export const runResearchAgent = async (companyName: string): Promise<ResearchResult> => {
  const tavilyApiKey = process.env.TAVILY_API_KEY;
  
  const searchPrompt = `${companyName} M&A activities, financial health, recent quarterly earnings, risks and regulatory compliance 2026`;

  try {
    // Използваме Tavily REST API за дълбоко търсене, оптимизирано за LLM контекст
    const response = await axios.post('https://tavily.com', {
      api_key: tavilyApiKey,
      query: searchPrompt,
      search_depth: 'advanced',
      include_answer: true,
      max_results: 5
    });

    const sources = response.data.results.map((r: any) => r.url);
    const context = response.data.results.map((r: any) => `${r.title}: ${r.content}`).join('\n\n');

    return {
      query: companyName,
      context: context || response.data.answer,
      sources: sources
    };
  } catch (error) {
    console.error('Error in Research Agent (Tavily):', error);
    throw new Error('Failed to gather real-time intelligence.');
  }
};
