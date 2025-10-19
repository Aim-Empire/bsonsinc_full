import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
});
export async function sendApplicantAck(to: string, jobTitle: string) {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL!,
    to,
    subject: `We received your application — ${jobTitle}`,
    html: `<p>Hi,</p><p>Thanks for applying for <strong>${jobTitle}</strong> at Bsons Inc. Our team is reviewing your application.</p><p>We’ll reach out if there’s a fit. — Bsons Inc Careers</p>`
  });
}
export async function sendInternalAlert(payload: Record<string, any>) {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL!,
    to: process.env.SMTP_USER!,
    subject: `New Application: ${payload.jobTitle}`,
    html: `<pre>${JSON.stringify(payload, null, 2)}</pre>`
  });
}
