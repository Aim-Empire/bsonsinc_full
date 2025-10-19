import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
interface Ctx { params: { id: string } }
export async function POST(req: Request, { params }: Ctx) {
  const form = await req.formData();
  const status = String(form.get('status'));
  await prisma.application.update({ where: { id: params.id }, data: { status } });
  return NextResponse.redirect('/admin');
}
