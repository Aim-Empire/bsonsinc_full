export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Funds Disbursement</h3><p className="text-zinc-400 text-sm">Automated payouts, treasury ops, ledgers, and bank liaison.</p></div>
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Reconciliation & Reporting</h3><p className="text-zinc-400 text-sm">Daily/weekly recon, exception handling, variance tracking, audit trails.</p></div>
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Compliance Ops</h3><p className="text-zinc-400 text-sm">KYC/KYB flows, approvals, documentation standards, risk monitoring.</p></div>
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Support Desk</h3><p className="text-zinc-400 text-sm">Tiered support with SLAs, WhatsApp & email workflows, escalation.</p></div>
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Data & Sheets Automation</h3><p className="text-zinc-400 text-sm">Operational dashboards, CSV/Sheet sync, notifications.</p></div>
        <div className="rounded-2xl border border-zinc-800 p-5"><h3 className="font-semibold text-brand mb-1">Advisory & Playbooks</h3><p className="text-zinc-400 text-sm">SOPs, templates, and training for lean ops teams.</p></div>
      </div>
      <div className="rounded-2xl border border-brand/30 p-6 bg-brand-contrast/40">
        <h2 className="text-xl font-semibold mb-2">Engagement Model</h2>
        <ul className="list-disc pl-5 text-zinc-400 space-y-1 text-sm">
          <li>Pilot (2–4 weeks) → playbooks & quick wins</li>
          <li>Retainer (3–6 months) → steady ops, SLAs</li>
          <li>Project-based → migrations or special initiatives</li>
        </ul>
      </div>
    </div>
  );
}
