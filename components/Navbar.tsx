import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-zinc-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold tracking-tight text-brand">Bsons Inc</Link>
        <div className="flex items-center gap-5 text-sm text-zinc-300">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/investment">Investment</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/careers" className="rounded-full border border-brand/40 px-3 py-1 hover:bg-brand-contrast hover:text-brand-ink">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
