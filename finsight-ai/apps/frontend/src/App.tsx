import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { Dashboard } from './components/Dashboard';
import { analyzeCompany, AnalysisResponse } from './services/api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (companyName: string) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await analyzeCompany(companyName);
      setData(result);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred during analysis.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12 selection:bg-emerald-500 selection:text-slate-950">
      <header className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 mb-3 shadow-inner">
          <span>Nebius AI Cloud × NVIDIA Llama-3.1</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          FinSight <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">AI</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Autonomous multi-agent architecture generating real-time M&A investment intelligence and compliance due diligence.
        </p>
      </header>

      <main className="container mx-auto">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {error && (
          <div className="max-w-2xl mx-auto p-4 bg-rose-950/30 border border-rose-900 text-rose-400 rounded-xl text-center text-sm font-mono shadow-lg">
            ⚠️ Error: {error}
          </div>
        )}

        {data && <Dashboard data={data} />}
      </main>

      <footer className="text-center mt-20 text-xs text-slate-600 font-mono">
        FinSight AI • Built for the Global AI Hackathon 2026
      </footer>
    </div>
  );
}

export default App;
