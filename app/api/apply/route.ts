import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { sendApplicantAck, sendInternalAlert } from "@/lib/mailer";
export async function POST(req: Request) {
  const form = await req.formData();
  const data = Object.fromEntries(form) as Record<string, string>;
  const { jobId, jobTitle, fullName, email, phone, location, linkedin, portfolio, coverLetter } = data;
  if (!jobId || !fullName || !email) return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  const app = await prisma.application.create({ data: { jobId, fullName, email, phone, location, linkedin, portfolio, coverLetter } });
  // fire-and-forget
  sendApplicantAck(email, jobTitle).catch(() => {});
  sendInternalAlert({ id: app.id, jobTitle, fullName, email, phone, location, linkedin, portfolio }).catch(() => {});
  return NextResponse.json({ ok: true, id: app.id });
}
