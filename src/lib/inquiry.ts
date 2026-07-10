import { createServerFn } from "@tanstack/react-start";
import { prisma } from "./db";
import nodemailer from "nodemailer";

// ─── Types ──────────────────────────────────────────────────────
interface InquiryInput {
  name: string;
  email: string;
  title: string;
  desc: string;
  budget: string;
  currency: string;
  deadline: string;
}

interface InquiryResult {
  success: boolean;
  error?: string;
}

// ─── Validation helpers ─────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_CURRENCIES = ["₹", "$"];

function validate(input: InquiryInput): string | null {
  if (!input.name || input.name.length > 100) return "Please enter a valid name (max 100 characters).";
  if (!EMAIL_RE.test(input.email)) return "Please enter a valid email address.";
  if (!input.title || input.title.length > 120) return "Please add a project title (max 120 characters).";
  if (!input.desc || input.desc.length > 2000) return "Please describe the project (max 2000 characters).";
  if (!input.budget) return "Please enter an expected budget.";
  if (!VALID_CURRENCIES.includes(input.currency)) return "Invalid currency selection.";
  return null;
}

// ─── Email sender ───────────────────────────────────────────────
async function sendNotificationEmail(input: InquiryInput): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
    console.warn("[inquiry] SMTP env vars missing — skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: (Number(SMTP_PORT) || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { rejectUnauthorized: false },
  });

  const currencyLabel = input.currency === "$" ? "USD" : "INR";

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #324f3b; border-bottom: 2px solid #e8e6e1; padding-bottom: 12px;">
        New Project Inquiry
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0;">${input.name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${input.email}">${input.email}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Project</td><td style="padding: 8px 0; font-weight: 600;">${input.title}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${input.currency}${input.budget} (${currencyLabel})</td></tr>
        ${input.deadline ? `<tr><td style="padding: 8px 0; color: #666;">Deadline</td><td style="padding: 8px 0;">${input.deadline}</td></tr>` : ""}
      </table>
      <div style="margin-top: 20px; padding: 16px; background: #f8f7f4; border-radius: 8px;">
        <p style="margin: 0 0 8px; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Project Description</p>
        <p style="margin: 0; white-space: pre-wrap;">${input.desc}</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Portfolio Inquiry" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    subject: `New inquiry — ${input.title}`,
    html,
  });
}

// ─── Server function ────────────────────────────────────────────
export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown): InquiryInput => {
    // Basic shape check — detailed validation happens in the handler
    const d = data as InquiryInput;
    return {
      name: String(d.name ?? ""),
      email: String(d.email ?? ""),
      title: String(d.title ?? ""),
      desc: String(d.desc ?? ""),
      budget: String(d.budget ?? ""),
      currency: String(d.currency ?? "₹"),
      deadline: String(d.deadline ?? ""),
    };
  })
  .handler(async ({ data }): Promise<InquiryResult> => {
    // 1. Validate
    const validationError = validate(data);
    if (validationError) {
      return { success: false, error: validationError };
    }

    try {
      // 2. Duplicate check — same email + title within 24h
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const duplicate = await prisma.inquiry.findFirst({
        where: {
          email: data.email,
          projectTitle: data.title,
          createdAt: { gte: twentyFourHoursAgo },
        },
      });

      if (duplicate) {
        return {
          success: false,
          error: "You've already submitted this inquiry recently. Please wait 24 hours before resubmitting.",
        };
      }

      // 3. Save to database
      await prisma.inquiry.create({
        data: {
          fullName: data.name,
          email: data.email,
          projectTitle: data.title,
          projectDescription: data.desc,
          budget: data.budget,
          currency: data.currency,
          deadline: data.deadline || null,
        },
      });

      // 4. Send notification email (non-blocking — don't fail the request if email fails)
      sendNotificationEmail(data).catch((err) => {
        console.error("[inquiry] Failed to send notification email:", err);
      });

      return { success: true };
    } catch (err) {
      console.error("[inquiry] Server error:", err);
      return { success: false, error: "Something went wrong. Please try again later." };
    }
  });
