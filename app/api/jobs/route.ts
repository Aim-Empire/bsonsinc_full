import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
  const jobs = await prisma.job.findMany({ where: { isActive: true } });
  return NextResponse.json(jobs);
}
export async function POST(req: Request) {
  const body = await req.json();
  const job = await prisma.job.create({ data: body });
  return NextResponse.json(job);
}
