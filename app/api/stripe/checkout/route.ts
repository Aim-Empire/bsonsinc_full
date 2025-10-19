import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function POST(req: Request) {
  const body = await req.json();
  const { amount, currency, name, email, interval, message } = body;
  if (!amount || !currency) return NextResponse.json({ error: 'Missing' }, { status: 400 });
  const cents = Math.round(Number(amount) * 100);
  const donation = await prisma.donation.create({ data: { amount: cents, currency, name, email, interval, message, provider: 'stripe', status: 'initialized' } });
  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` },
    body: new URLSearchParams({
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate/cancel`,
      'line_items[0][price_data][currency]': currency.toLowerCase(),
      'line_items[0][price_data][product_data][name]': 'Donation',
      'line_items[0][price_data][unit_amount]': String(cents),
      'line_items[0][quantity]': '1',
      client_reference_id: donation.id,
      customer_email: email || undefined,
    } as any),
  });
  const data = await res.json();
  if (!res.ok) return NextResponse.json(data, { status: 400 });
  return NextResponse.json({ url: data.url });
}
