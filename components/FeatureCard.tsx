export function FeatureCard({ title, text }:{ title: string, text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-5">
      <h3 className="font-semibold text-brand mb-1">{title}</h3>
      <p className="text-zinc-400 text-sm">{text}</p>
    </div>
  );
}
