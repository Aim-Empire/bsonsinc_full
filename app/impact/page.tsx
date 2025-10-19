export default function ImpactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <h1 className="text-3xl font-bold">Impact</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Case Study — On-time Payouts</h3><p className="text-zinc-400 text-sm">Achieved <span className="text-brand-600 font-semibold">95% on-time payouts</span> across a 3-month campaign by standardizing approval flows and adding daily reconciliation.</p></div>
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Case Study — Variance Control</h3><p className="text-zinc-400 text-sm">Reduced reconciliation variance to <span className="text-brand-600 font-semibold">&lt;1%</span> via exception queues and ledger hygiene SOPs.</p></div>
      </div>
      <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">What clients say</h3><p className="text-zinc-400 text-sm">“Clear processes, fast response, and reliable numbers. We finally sleep easy.”</p></div>
    </div>
  );
}
