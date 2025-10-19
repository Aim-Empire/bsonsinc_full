import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';
import { AdminGate } from '@/components/AdminGate';
export default async function AdminPage() {
  const auth = cookies().get('adm')?.value === 'ok';
  if (!auth) return (<div className="mx-auto max-w-5xl py-10"><AdminGate><div /></AdminGate></div>);
  const apps = await prisma.application.findMany({ orderBy: { createdAt: 'desc' }, take: 50, include: { job: true } });
  const dons = await prisma.donation.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  return (
    <div className="mx-auto max-w-6xl space-y-10 py-8">
      <h1 className="text-3xl font-bold">Admin</h1>
      <section>
        <h2 className="text-xl font-semibold text-brand mb-3">Applications</h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-950"><tr><th className="p-3 text-left">When</th><th className="p-3 text-left">Role</th><th className="p-3 text-left">Name</th><th className="p-3 text-left">Email</th><th className="p-3 text-left">Status</th><th className="p-3">Action</th></tr></thead>
            <tbody>
              {apps.map(a => (
                <tr key={a.id} className="border-t border-zinc-900">
                  <td className="p-3">{new Date(a.createdAt).toLocaleString()}</td>
                  <td className="p-3">{a.job.title}</td>
                  <td className="p-3">{a.fullName}</td>
                  <td className="p-3">{a.email}</td>
                  <td className="p-3">{a.status}</td>
                  <td className="p-3">
                    <form action={`/api/admin/applications/${a.id}/status`} method="post" className="flex gap-2">
                      <select name="status" className="bg-zinc-900 border border-zinc-800 rounded-xl px-2 py-1">
                        {['received','reviewing','shortlisted','rejected','hired'].map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <button className="button-ghost">Update</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-brand mb-3">Donations</h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-950"><tr><th className="p-3 text-left">When</th><th className="p-3 text-left">Amount</th><th className="p-3 text-left">Currency</th><th className="p-3 text-left">Status</th><th className="p-3 text-left">Provider</th><th className="p-3 text-left">Email</th></tr></thead>
            <tbody>
              {dons.map(d => (
                <tr key={d.id} className="border-t border-zinc-900">
                  <td className="p-3">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="p-3">{(d.amount/100).toFixed(2)}</td>
                  <td className="p-3">{d.currency}</td>
                  <td className="p-3">{d.status}</td>
                  <td className="p-3">{d.provider}</td>
                  <td className="p-3">{d.email || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
