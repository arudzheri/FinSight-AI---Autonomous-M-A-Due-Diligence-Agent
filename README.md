# FinSight AI - Autonomous M&A Due Diligence Agent

[![License: MIT](https://shields.io)](https://opensource.org)

**FinSight AI** is an advanced, autonomous AI agent designed for financial analysts and M&A (Mergers and Acquisitions) teams to conduct instant, comprehensive due diligence on global companies. Built exclusively for the **Nebius x NVIDIA Global AI Hackathon**.

The application leverages **NVIDIA Nemotron** models running on **Nebius AI Cloud** and features deep integration with the **Tavily API** for real-time web intelligence and market synthesis.

## 🚀 Key Features

- **Real-Time Market Intelligence:** Uses Tavily API to fetch current news, legal filings, financial statements, and market sentiment.
- **Hierarchical Multi-Agent Architecture:**
  - **Research Agent:** Orchestrates live-web crawling and extracts high-signal financial data.
  - **Summarizer Agent (Nebius Serverless - Nano):** Handles cost-effective, high-speed document summaries.
  - **Analysis Agent (Nebius Endpoints - Nemotron 3 Ultra):** Performs deep logical reasoning, risk scoring, and synergy evaluation.
- **Beautiful UI Dashboard:** A modern, high-performance React dashboard showcasing compliance metrics, financial charts, and interactive AI insights.

## 🛠️ Tech Stack & Architecture

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **AI Infrastructure:** 
  - Nebius AI Cloud (Serverless Endpoints & Jobs)
  - NVIDIA Llama-3.1-Nemotron-70B-Reward & Nemotron-3-Ultra
  - Tavily Search API for LLMs

---

## 📂 Project Structure

```text
├── apps/
│   ├── backend/          # Node.js Express API & Multi-Agent orchestration
│   └── frontend/         # React TypeScript Interactive Dashboard
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- NPM / Yarn
- Nebius AI Cloud API Key
- Tavily API Key

### Environment Setup

Create a `.env` file in `apps/backend/` based on `.env.example`:

```env
PORT=5000
NEBIUS_API_KEY=your_nebius_api_key_here
TAVILY_API_KEY=your_tavily_api_key_here
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arudzheri/FinSight-AI-Autonomous-M-A-Due-Diligence-Agent
   cd finsight-ai
   ```

2. **Install Backend Dependencies & Start:**
   ```bash
   cd apps/backend
   npm install
   npm run dev
   ```

3. **Install Frontend Dependencies & Start:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 🤖 Nebius & NVIDIA Integration Detail

FinSight AI utilizes a hybrid model orchestration to optimize latency, cost, and intelligence:
1. **Nemotron-3-Ultra** handles complex context windows and cross-references financial risks.
2. **Nemotron Nano/Super** processes everyday lightweight completions via **Nebius Serverless Endpoints**, keeping the application incredibly responsive and cost-effective.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
