import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 465,
  secure: (Number(SMTP_PORT) || 465) === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  tls: { rejectUnauthorized: false },
});

try {
  const info = await transporter.sendMail({
    from: `"Portfolio Inquiry" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    subject: "Test email from Portfolio (fix test)",
    html: "<p>This is a test email from the Portfolio inquiry system.</p>",
  });
  console.log("Email sent OK:", info.messageId);
} catch (e) {
  console.error("Email ERROR:", e.message);
}
