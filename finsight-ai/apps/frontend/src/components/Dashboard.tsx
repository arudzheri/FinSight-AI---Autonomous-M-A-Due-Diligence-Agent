import React from 'react';
import { AnalysisResponse } from '../services/api';

interface DashboardProps {
  data: AnalysisResponse;
}

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const { report, sources } = data;

  // Определяне на цвят според оценката
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-emerald-400 border-emerald-500';
    if (score >= 50) return 'text-amber-400 border-amber-500';
    return 'text-rose-400 border-rose-500';
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-fadeIn">
      {/* Горен ред - Име и Финансов рейтинг */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs font-semibold tracking-wider text-emerald-500 uppercase font-mono">Target Overview</span>
            <h2 className="text-3xl font-bold text-white mt-1">{report.companyName}</h2>
          </div>
          <p className="text-slate-300 mt-4 leading-relaxed">{report.executiveSummary}</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-xl">
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4 font-mono">Financial Health Score</span>
          <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center ${getScoreColor(report.financialHealthScore)}`}>
            <span className="text-4xl font-extrabold tracking-tight text-white">{report.financialHealthScore}</span>
          </div>
          <span className="text-xs text-slate-500 mt-3 font-mono">Calculated by Nemotron-3-Ultra</span>
        </div>
      </div>

      {/* Среден ред - Рискове и Синергии */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> Top Strategic Risks
          </h3>
          <ul className="space-y-3">
            {report.topRisks.map((risk, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-850">
                <span className="text-rose-400 font-mono font-bold mr-3">{idx + 1}.</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> M&A Synergy Potential
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">{report.mnaSynergyPotential}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Regulatory & Compliance
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">{report.regulatoryCompliance}</p>
          </div>
        </div>
      </div>

      {/* Долен ред - Верификация на Източниците (Критично за Tavily Наградата) */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
        <h3 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-3 font-mono">Verified Intelligence Sources</h3>
        <div className="flex flex-wrap gap-2">
          {sources.map((url, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-slate-950 hover:bg-slate-800 border border-slate-800 text-emerald-400 px-3 py-1.5 rounded transition truncate max-w-xs font-mono"
            >
              🔗 {new URL(url).hostname}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
