import Link from "next/link";
import { prisma } from "@/lib/db";
export const dynamic = "force-dynamic";
export default async function CareersPage() {
  const jobs = await prisma.job.findMany({ where: { isActive: true }, orderBy: { createdAt: "desc" } });
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Careers at Bsons Inc</h1>
      <p className="text-zinc-400 mb-8">Join a lean, remote-friendly team building trustworthy money movement.</p>
      <div className="space-y-3">
        {jobs.map((job) => (
          <Link key={job.id} href={`/careers/${job.slug}`} className="block rounded-2xl border border-zinc-800 p-5 hover:bg-brand-contrast/40">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <span className="text-xs rounded-full border px-2 py-1 border-brand/40 text-brand-ink bg-brand/10">{job.type}</span>
            </div>
            <p className="text-zinc-400 text-sm mt-1">{job.department} • {job.location} • {job.level}</p>
          </Link>
        ))}
        {jobs.length === 0 && (<p className="text-zinc-500">No open roles right now. Send your CV to careers@bsonsinc.com</p>)}
      </div>
    </div>
  );
}
