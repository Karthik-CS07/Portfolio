import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const { RESEND_API_KEY, NOTIFY_EMAIL } = process.env;

if (!RESEND_API_KEY || !NOTIFY_EMAIL) {
  console.error("Missing RESEND_API_KEY or NOTIFY_EMAIL in .env");
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

try {
  const { data, error } = await resend.emails.send({
    from: "Portfolio Inquiry <onboarding@resend.dev>",
    to: [NOTIFY_EMAIL],
    subject: "Test email from Portfolio (Resend)",
    html: "<p>This is a test email from the Portfolio inquiry system via Resend.</p>",
  });

  if (error) {
    console.error("Resend Email ERROR:", error);
  } else {
    console.log("Resend Email sent OK:", data);
  }
} catch (e) {
  console.error("Execution ERROR:", e.message);
}

