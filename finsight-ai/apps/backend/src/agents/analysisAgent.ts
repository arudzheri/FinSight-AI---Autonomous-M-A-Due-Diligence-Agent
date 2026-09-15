import { nebius } from '../utils/nebiusClient';

export interface DueDiligenceReport {
  companyName: string;
  financialHealthScore: number;
  topRisks: string[];
  mnaSynergyPotential: string;
  regulatoryCompliance: string;
  executiveSummary: string;
}

export const runAnalysisAgent = async (companyName: string, summarizedBrief: string): Promise<DueDiligenceReport> => {
  try {
    // Използваме Nemotron 3 Ultra за сложен бизнес анализ и reasoning
    const response = await nebius.chat.completions.create({
      model: 'nvidia/nemotron-4-340b-instruct', // или специфичния за хакатона Nemotron-3-Ultra endpoint
      response_format: { type: 'json_object' }, // Изискваме чист JSON
      messages: [
        {
          role: 'system',
          content: `You are a Senior M&A Director. Analyze the provided summary and output a comprehensive due diligence report in JSON format.
          The JSON must strictly follow this structure:
          {
            "companyName": "string",
            "financialHealthScore": number (1-100),
            "topRisks": ["string", "string"],
            "mnaSynergyPotential": "string description",
            "regulatoryCompliance": "string status and risks",
            "executiveSummary": "string paragraph"
          }`
        },
        {
          role: 'user',
          content: `Company to analyze: ${companyName}\n\nSummarized Market Brief:\n${summarizedBrief}`
        }
      ],
      temperature: 0.3,
    });

    const rawJson = response.choices[0].message.content || '{}';
    return JSON.parse(rawJson) as DueDiligenceReport;
  } catch (error) {
    console.error('Error in Analysis Agent (Nemotron Ultra):', error);
    throw new Error('Failed to perform deep financial reasoning.');
  }
};
