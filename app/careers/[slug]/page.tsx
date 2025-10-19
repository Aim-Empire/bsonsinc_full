import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { ApplicationForm } from "@/components/ApplicationForm";
import ReactMarkdown from "react-markdown";

interface Props { params: { slug: string } }

export default async function JobDetail({ params }: Props) {
  const job = await prisma.job.findUnique({ where: { slug: params.slug } });
  if (!job || !job.isActive) return notFound();
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header>
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-zinc-400 mt-1">{job.department} • {job.location} • {job.level} • {job.type}</p>
      </header>
      <section className="prose prose-invert max-w-none">
        <h2>About the Role</h2>
        <ReactMarkdown>{job.description}</ReactMarkdown>
        <h3>Requirements</h3>
        <ReactMarkdown>{job.requirements}</ReactMarkdown>
        {job.benefits && (<><h3>Benefits</h3><ReactMarkdown>{job.benefits}</ReactMarkdown></>)}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
        <ApplicationForm jobId={job.id} jobTitle={job.title} />
      </section>
    </div>
  );
}
