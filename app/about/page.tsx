export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-3xl font-bold">About Bsons Inc</h1>
      <p className="text-zinc-400">Bsons Inc builds operational rails for organizations that disburse funds at scale. Our mandate is simple: move money responsibly, document everything, and keep teams audit-ready.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 p-5">
          <h2 className="font-semibold mb-2 text-brand">Mission</h2>
          <p className="text-zinc-400">Enable high-trust money movement with clarity, controls, and speed.</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-5">
          <h2 className="font-semibold mb-2 text-brand">Values</h2>
          <ul className="list-disc pl-5 text-zinc-400 space-y-1">
            <li>Compliance by design</li>
            <li>Operational truth in data</li>
            <li>Simple &gt; complex</li>
            <li>Service with empathy</li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-800 p-5">
        <h2 className="font-semibold mb-2 text-brand">Partners & Tooling</h2>
        <p className="text-zinc-400">Zoho, Google Workspace, WhatsApp Business, bank APIs, spreadsheets, and custom automations.</p>
      </div>
    </div>
  );
}
