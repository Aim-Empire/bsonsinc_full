import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const fd = await req.formData();
  const email = String(fd.get('email') || '');
  const password = String(fd.get('password') || '');
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set('adm', 'ok', { httpOnly: true, path: '/', maxAge: 60*60*8 });
    return res;
  }
  return NextResponse.json({ ok: false }, { status: 401 });
}
