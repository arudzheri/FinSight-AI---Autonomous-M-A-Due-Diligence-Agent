import { Request, Response } from 'express';
import { runResearchAgent } from '../agents/researchAgent';
import { runSummarizerAgent } from '../agents/summarizerAgent';
import { runAnalysisAgent } from '../agents/analysisAgent';

export const analyzeCompany = async (req: Request, res: Response): Promise<void> => {
  const { companyName } = req.body;

  if (!companyName) {
    res.status(400).json({ error: 'Company name is required.' });
    return;
  }

  try {
    // Стъпка 1: Live Web Research чрез Tavily
    const researchData = await runResearchAgent(companyName);

    // Стъпка 2: Бързо резюме чрез по-малкия модел на Nebius
    const summary = await runSummarizerAgent(researchData.context);

    // Стъпка 3: Дълбок M&A анализ и JSON генериране чрез Nemotron Ultra
    const finalReport = await runAnalysisAgent(companyName, summary);

    // Връщаме финалния резултат + източниците на информация за прозрачност
    res.status(200).json({
      report: finalReport,
      sources: researchData.sources
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'An error occurred during multi-agent analysis.' });
  }
};
