import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
interface Ctx { params: { slug: string } }
export async function GET(req: Request, { params }: Ctx) {
  const job = await prisma.job.findUnique({ where: { slug: params.slug } });
  if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(job);
}
