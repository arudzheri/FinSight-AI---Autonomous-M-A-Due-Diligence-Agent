import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (companyName: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('Gathering web intelligence...');

  useEffect(() => {
    if (!isLoading) return;
    
    const messages = [
      'Crawling financial data via Tavily API...',
      'Running text synthesis with Nemotron-70B...',
      'Performing multi-agent risk assessment...',
      'Generating deep M&A reasoning report...'
    ];

    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % messages.length;
      setLoadingMessage(messages[count]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
          placeholder="Enter company name (e.g., NVIDIA, Tesla, Arm)..."
          className="w-full px-6 py-4 bg-slate-900 border border-slate-700 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition disabled:opacity-50 text-lg shadow-2xl"
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="absolute right-3 top-2.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition disabled:opacity-50 disabled:hover:bg-emerald-600"
        >
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      
      {isLoading && (
        <div className="mt-4 flex items-center justify-center space-x-3 text-slate-400 animate-pulse">
          <svg className="animate-spin h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span className="text-sm tracking-wide font-mono">{loadingMessage}</span>
        </div>
      )}
    </div>
  );
};
