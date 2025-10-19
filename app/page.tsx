import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { CTA } from "@/components/CTA";
export default function Page() {
  return (<>
    <Hero />
    <Section title="What We Do" subtitle="Secure, compliant disbursements at scale">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard title="Funds Disbursement" text="Automated payouts, reconciliations, and treasury ops." />
        <FeatureCard title="Compliance Ops" text="KYC/KYB workflows, audit-ready controls, risk monitoring." />
        <FeatureCard title="Support Desk" text="Tiered support with SLAs and transparent reporting." />
      </div>
    </Section>
    <CTA />
  </>);
}
