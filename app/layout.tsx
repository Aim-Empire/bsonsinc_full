import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bsons Inc — Empowering Funds & Compliance Ops",
  description: "Bsons Inc: operations, disbursement, compliance, careers."
};
export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-zinc-100 antialiased">
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          <Navbar />
          <main className="px-4 sm:px-6 lg:px-8 py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
