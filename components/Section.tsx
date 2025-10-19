export function Section({ children, title, subtitle }:{ children: React.ReactNode, title: string, subtitle?: string }) {
  return (
    <section className="mx-auto max-w-6xl py-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="text-zinc-400">{subtitle}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}
