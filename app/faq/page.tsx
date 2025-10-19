export default function FAQPage() {
  const faqs = [
    { q: 'Do you support multiple currencies?', a: 'Yes: NGN, USD, CAD, GBP, EUR, AUD, and Crypto via Coinbase Commerce.' },
    { q: 'How do applications work?', a: 'Apply on a role page; you get an email ack, and our team reviews.' },
    { q: 'Is data safe?', a: 'We collect minimal data, restrict access, and follow SOPs.' },
  ];
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-2xl border border-zinc-800 p-5">
            <p className="font-semibold text-brand">{f.q}</p>
            <p className="text-zinc-400 text-sm mt-1">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
