import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface DueDiligenceReport {
  companyName: string;
  financialHealthScore: number;
  topRisks: string[];
  mnaSynergyPotential: string;
  regulatoryCompliance: string;
  executiveSummary: string;
}

export interface AnalysisResponse {
  report: DueDiligenceReport;
  sources: string[];
}

export const analyzeCompany = async (companyName: string): Promise<AnalysisResponse> => {
  const response = await axios.post<AnalysisResponse>(`${API_BASE_URL}/analyze`, { companyName });
  return response.data;
};
