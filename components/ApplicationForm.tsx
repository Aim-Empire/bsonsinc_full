"use client";
import { useState } from "react";

export function ApplicationForm({ jobId, jobTitle }:{ jobId: string; jobTitle: string }) {
  const [status, setStatus] = useState<"idle"|"submitting"|"success"|"error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("submitting");
    const form = new FormData(e.currentTarget); form.append("jobId", jobId); form.append("jobTitle", jobTitle);
    try { const res = await fetch("/api/apply", { method: "POST", body: form }); if (!res.ok) throw 0; setStatus("success"); (e.target as HTMLFormElement).reset(); }
    catch { setStatus("error"); }
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
      <input name="fullName" placeholder="Full name" required className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <input type="email" name="email" placeholder="Email" required className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <input name="phone" placeholder="Phone (optional)" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <input name="location" placeholder="Location (City, Country)" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <input name="linkedin" placeholder="LinkedIn URL (optional)" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <input name="portfolio" placeholder="Portfolio URL (optional)" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <textarea name="coverLetter" placeholder="Cover letter (optional)" rows={5} className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <button disabled={status === "submitting"} className="rounded-2xl bg-white/10 hover:bg-white/20 px-5 py-3 font-medium">
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
      {status === "success" && <p className="text-green-400">Application received. We’ll email you shortly.</p>}
      {status === "error" && <p className="text-red-400">Something went wrong. Try again.</p>}
    </form>
  );
}
