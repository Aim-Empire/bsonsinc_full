import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function POST(req: Request) {
  const body = await req.json();
  const { amount, currency, name, email, interval, message } = body;
  if (!amount || !currency) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  const kobo = Math.round(Number(amount) * 100);
  const donation = await prisma.donation.create({ data: { amount: kobo, currency, name, email, interval, message, provider: 'paystack', status: 'initialized' } });
  const initRes = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    body: JSON.stringify({
      email: email || `anon-${donation.id}@bsonsinc.com`,
      amount: kobo,
      currency: 'NGN',
      reference: donation.id,
      callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate/success`
    }),
  });
  const data = await initRes.json();
  if (!initRes.ok) return NextResponse.json(data, { status: 400 });
  return NextResponse.json({ authorization_url: data.data.authorization_url });
}
