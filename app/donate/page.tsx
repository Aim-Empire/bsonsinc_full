export default function DonatePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Donate</h1>
      <p className="text-zinc-400">Support our initiatives. Multi-currency and crypto supported.</p>
      <DonateForm />
      <p className="text-xs text-zinc-500">By proceeding you agree to our Privacy Policy.</p>
    </div>
  );
}

function DonateForm() {
  async function action(formData: FormData) {
    'use server';
    const amount = Number(formData.get('amount') || 0);
    const currency = String(formData.get('currency') || 'USD');
    const method = String(formData.get('method') || 'card');
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const interval = String(formData.get('interval') || 'One-time');
    const message = String(formData.get('message') || '');

    let endpoint = '/api/stripe/checkout';
    if (method === 'crypto') endpoint = '/api/coinbase/charge';
    if (currency === 'NGN') endpoint = '/api/paystack/initialize';

    const res = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ amount, currency, name, email, interval, message }) });
    if (!res.ok) throw new Error('Failed to init payment');
    const data = await res.json();
    // @ts-ignore
    return (globalThis as any).location = data.url || data.authorization_url || data.hosted_url;
  }

  return (
    <form action={action} className="grid gap-4">
      <input name="name" placeholder="Full name" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <input type="email" name="email" placeholder="Email" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <div className="grid grid-cols-4 gap-3">
        <input name="amount" placeholder="Amount" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 col-span-2" />
        <select name="currency" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
          <option>USD</option><option>CAD</option><option>AUD</option><option>EUR</option><option>GBP</option><option>NGN</option>
        </select>
        <select name="method" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
          <option value="card">Card/Wallet</option>
          <option value="crypto">Crypto</option>
        </select>
      </div>
      <select name="interval" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
        <option>One-time</option>
        <option>Monthly</option>
      </select>
      <textarea name="message" placeholder="Message (optional)" rows={4} className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <button className="button-brand">Proceed</button>
    </form>
  );
}
