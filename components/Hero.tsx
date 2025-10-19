export function Hero() {
  return (
    <section className="mx-auto max-w-6xl py-16">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
        Bsons Inc powers secure disbursements.
        <span className="block text-zinc-400">Operate funds with control, speed, and compliance.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        We design lean operations for payout workflows, reconciliation, and audit-ready reporting—so your team
        can move capital with confidence.
      </p>
      <div className="mt-8 flex gap-3">
        <a href="/careers" className="button-brand">See open roles</a>
        <a href="/contact" className="button-ghost">Talk to us</a>
      </div>
    </section>
  );
}
