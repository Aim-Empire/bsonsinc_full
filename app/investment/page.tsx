export default function InvestmentPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-3xl font-bold">Investment Basics</h1>
      <p className="text-zinc-400">A practical primer across markets (US, CA, UK, AU, EU). Multi-currency understanding for global investors.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 p-5">
          <h2 className="font-semibold text-brand mb-2">Why Invest?</h2>
          <ul className="list-disc pl-5 text-zinc-400 text-sm space-y-1">
            <li>Beat inflation via real returns</li>
            <li>Compound growth over time</li>
            <li>Diversify beyond salary income</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-5">
          <h2 className="font-semibold text-brand mb-2">Core Principles</h2>
          <ul className="list-disc pl-5 text-zinc-400 text-sm space-y-1">
            <li>Diversification</li>
            <li>Time in market &gt; timing the market</li>
            <li>Automate contributions; rebalance</li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-800 p-5">
        <h2 className="font-semibold text-brand mb-2">Types of Investments</h2>
        <ul className="list-disc pl-5 text-zinc-400 text-sm space-y-1">
          <li><strong>Stocks/ETFs</strong> (SPY, TSX, FTSE, ASX, STOXX)</li>
          <li><strong>Bonds/T-Bills</strong></li>
          <li><strong>Real Estate/REITs</strong></li>
          <li><strong>Startups/Private</strong></li>
          <li><strong>Crypto</strong> (high volatility; risk-managed)</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-brand/30 p-5 bg-brand-contrast/40">
        <h2 className="font-semibold text-brand mb-2">Getting Started</h2>
        <ol className="list-decimal pl-5 text-zinc-400 text-sm space-y-1">
          <li>Define timeline & risk tolerance</li>
          <li>Choose allocation by goal & currency exposure</li>
          <li>Automate monthly contributions</li>
          <li>Quarterly rebalance; avoid emotional trades</li>
        </ol>
        <p className="text-xs text-zinc-500 mt-3">Educational only — not financial advice.</p>
      </div>
    </div>
  );
}
