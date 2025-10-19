import { prisma } from "../lib/db";

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Funds Disbursement Officer (FDO)",
        slug: "funds-disbursement-officer-fdo",
        department: "Operations",
        location: "Remote (Nigeria)",
        type: "Contract",
        level: "Entry",
        currency: "NGN",
        salaryMin: 200000,
        salaryMax: 300000,
        description: "**Role:** Execute payouts, reconcile ledgers, and liaise with banks.\n\n**Tools:** Zoho, Google Sheets, WhatsApp Business.",
        requirements: "- Detail-oriented\n- Internet savvy\n- Basic spreadsheets\n- Honesty & compliance mindset",
        benefits: "- Remote\n- Flexible hours\n- Growth path",
      },
      {
        title: "Reconciliation Analyst",
        slug: "reconciliation-analyst",
        department: "Operations",
        location: "Remote (Global)",
        type: "Full-time",
        level: "Junior",
        currency: "USD",
        salaryMin: 600,
        salaryMax: 1000,
        description: "**Role:** Ensure books tie every day; investigate deltas; publish variance reports.",
        requirements: "- Strong spreadsheet/SQL basics\n- Attention to detail\n- Clear documentation",
        benefits: "- Remote\n- Growth path",
      },
      {
        title: "Support Agent (Tier 1)",
        slug: "support-agent-tier-1",
        department: "Support",
        location: "Remote (Global)",
        type: "Contract",
        level: "Entry",
        currency: "USD",
        salaryMin: 300,
        salaryMax: 500,
        description: "**Role:** Frontline responder across WhatsApp Business and email. Resolve common issues; escalate cleanly.",
        requirements: "- Clear written English\n- Organized and responsive\n- Follows scripts/SOPs",
        benefits: "- Remote\n- Training support",
      }
    ],
    skipDuplicates: true,
  });
  console.log("Seeded jobs.");
}

main().finally(() => process.exit());
