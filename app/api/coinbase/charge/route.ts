import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function POST(req: Request) {
  const { amount, currency, name, email, interval, message } = await req.json();
  if (!amount) return NextResponse.json({ error: 'Amount required' }, { status: 400 });
  const cents = Math.round(Number(amount) * 100);
  const donation = await prisma.donation.create({ data: { amount: cents, currency: 'CRYPTO', name, email, interval, message, provider: 'coinbase', status: 'initialized' } });
  const res = await fetch('https://api.commerce.coinbase.com/charges', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CC-Api-Key': process.env.COINBASE_COMMERCE_API_KEY!,
      'X-CC-Version': '2018-03-22'
    },
    body: JSON.stringify({
      name: 'Donation',
      description: 'Bsons Inc Donation',
      local_price: { amount: (cents/100).toFixed(2), currency: 'USD' },
      pricing_type: 'fixed_price',
      metadata: { donationId: donation.id, email }
    })
  });
  const data = await res.json();
  if (!res.ok) return NextResponse.json(data, { status: 400 });
  return NextResponse.json({ hosted_url: data.data.hosted_url });
}
