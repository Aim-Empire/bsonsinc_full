import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/db';
export async function POST(req: Request) {
  const secret = process.env.COINBASE_COMMERCE_WEBHOOK_SECRET!;
  const raw = await req.text();
  const sig = req.headers.get('x-cc-webhook-signature') || '';
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(raw, 'utf8');
  const digest = hmac.digest('hex');
  if (digest !== sig) return NextResponse.json({ ok: false }, { status: 401 });
  const evt = JSON.parse(raw);
  const donationId = evt?.event?.data?.metadata?.donationId;
  if (evt?.event?.type === 'charge:confirmed' && donationId) {
    await prisma.donation.update({ where: { id: donationId }, data: { status: 'paid', providerRef: evt.event.data.code } });
  }
  return NextResponse.json({ ok: true });
}
