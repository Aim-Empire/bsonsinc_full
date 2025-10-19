import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/db';
export async function POST(req: Request) {
  const secret = process.env.PAYSTACK_WEBHOOK_SECRET!;
  const raw = await req.text();
  const signature = crypto.createHmac('sha512', secret).update(raw).digest('hex');
  const sent = req.headers.get('x-paystack-signature');
  if (signature !== sent) return NextResponse.json({ ok: false }, { status: 401 });
  const evt = JSON.parse(raw);
  if (evt.event === 'charge.success') {
    const ref = evt.data.reference as string;
    await prisma.donation.update({ where: { id: ref }, data: { status: 'paid', providerRef: ref } });
  }
  return NextResponse.json({ ok: true });
}
