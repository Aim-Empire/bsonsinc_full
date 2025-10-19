export function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bsons Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/legal/privacy">Privacy</a>
            <a href="/legal/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
