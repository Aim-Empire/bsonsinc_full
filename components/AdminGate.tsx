'use client';
import { useState } from 'react';
export function AdminGate({ children }:{ children: React.ReactNode }) {
  const [ok, setOk] = useState(false);
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/admin/login', { method: 'POST', body: fd });
    if (res.ok) setOk(true);
  }
  if (ok) return <>{children}</>;
  return (
    <form onSubmit={login} className="mx-auto max-w-sm grid gap-3 rounded-2xl border border-zinc-800 p-6">
      <h2 className="text-xl font-semibold">Admin Login</h2>
      <input name="email" placeholder="Email" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <input name="password" type="password" placeholder="Password" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3" />
      <button className="button-brand">Enter</button>
    </form>
  );
}
