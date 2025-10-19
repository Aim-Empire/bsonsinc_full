export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-zinc-400">We respond within 1–2 business days.</p>
      <div className="rounded-2xl border border-zinc-800 p-5">
        <h2 className="font-semibold text-brand mb-1">Support</h2>
        <p className="text-zinc-400 text-sm">Email: <a className="underline" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></p>
        <p className="text-zinc-400 text-sm">WhatsApp Business: <span className="text-zinc-300">+19056971979</span></p>
        <p className="text-zinc-400 text-sm">Hours: Mon–Fri, 9:00–17:00 (WAT)</p>
      </div>
      <div className="rounded-2xl border border-zinc-800 p-5">
        <h2 className="font-semibold text-brand mb-1">Head Office</h2>
        <p className="text-zinc-400 text-sm">Remote-first. Lagos, NG • Toronto, CA (partner).</p>
      </div>
    </div>
  );
}
