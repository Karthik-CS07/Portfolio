import { o as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as require_main } from "../_libs/dotenv.mjs";
import { n as ce } from "../_libs/neondatabase__serverless.mjs";
import { t as PrismaNeonAdapterFactory } from "../_libs/@prisma/adapter-neon+[...].mjs";
import { t as wrapper_default } from "../_libs/ws.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
import path from "path";
import prismaClientPkg from "@prisma/client";
//#region node_modules/.nitro/vite/services/ssr/assets/inquiry-Dr03MNjx.js
var import_main = /* @__PURE__ */ __toESM(require_main());
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var { PrismaClient } = prismaClientPkg;
var envPath = path.resolve(process.cwd(), ".env");
import_main.default.config({ path: envPath });
ce.webSocketConstructor = wrapper_default;
var globalForPrisma = globalThis;
function createPrismaClient() {
	const connectionString = process.env.DATABASE_URL;
	if (!connectionString) throw new Error("DATABASE_URL is not set. Please add it to your .env file.\nGet your connection string from https://console.neon.tech");
	return new PrismaClient({ adapter: new PrismaNeonAdapterFactory({ connectionString }) });
}
var prismaInstance;
function getPrisma() {
	if (!prismaInstance) prismaInstance = globalForPrisma.prisma ?? createPrismaClient();
	return prismaInstance;
}
var prisma = new Proxy({}, { get(target, prop, receiver) {
	const client = getPrisma();
	const value = Reflect.get(client, prop, receiver);
	if (typeof value === "function") return value.bind(client);
	return value;
} });
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var VALID_CURRENCIES = ["₹", "$"];
function validate(input) {
	if (!input.name || input.name.length > 100) return "Please enter a valid name (max 100 characters).";
	if (!EMAIL_RE.test(input.email)) return "Please enter a valid email address.";
	if (!input.title || input.title.length > 120) return "Please add a project title (max 120 characters).";
	if (!input.desc || input.desc.length > 2e3) return "Please describe the project (max 2000 characters).";
	if (!input.budget) return "Please enter an expected budget.";
	if (!VALID_CURRENCIES.includes(input.currency)) return "Invalid currency selection.";
	return null;
}
async function sendNotificationEmail(input) {
	const { RESEND_API_KEY, NOTIFY_EMAIL } = process.env;
	if (!RESEND_API_KEY || !NOTIFY_EMAIL) {
		console.warn("[inquiry] Resend env vars missing — skipping email notification.");
		return;
	}
	const resend = new Resend(RESEND_API_KEY);
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
	const { error } = await resend.emails.send({
		from: "Portfolio Inquiry <onboarding@resend.dev>",
		to: [NOTIFY_EMAIL],
		subject: `New inquiry — ${input.title}`,
		html
	});
	if (error) {
		console.error("[inquiry] Resend API error:", error);
		throw new Error(error.message);
	}
}
var submitInquiry_createServerFn_handler = createServerRpc({
	id: "e6ba7e0004e7dc7106d6f0c5a4d10c4f820a29232c7716f1e06463f241904f6e",
	name: "submitInquiry",
	filename: "src/lib/inquiry.ts"
}, (opts) => submitInquiry.__executeServer(opts));
var submitInquiry = createServerFn({ method: "POST" }).validator((data) => {
	const d = data;
	return {
		name: String(d.name ?? ""),
		email: String(d.email ?? ""),
		title: String(d.title ?? ""),
		desc: String(d.desc ?? ""),
		budget: String(d.budget ?? ""),
		currency: String(d.currency ?? "₹"),
		deadline: String(d.deadline ?? "")
	};
}).handler(submitInquiry_createServerFn_handler, async ({ data }) => {
	const validationError = validate(data);
	if (validationError) return {
		success: false,
		error: validationError
	};
	try {
		const twentyFourHoursAgo = /* @__PURE__ */ new Date(Date.now() - 1440 * 60 * 1e3);
		if (await prisma.inquiry.findFirst({ where: {
			email: data.email,
			projectTitle: data.title,
			createdAt: { gte: twentyFourHoursAgo }
		} })) return {
			success: false,
			error: "You've already submitted this inquiry recently. Please wait 24 hours before resubmitting."
		};
		await prisma.inquiry.create({ data: {
			fullName: data.name,
			email: data.email,
			projectTitle: data.title,
			projectDescription: data.desc,
			budget: data.budget,
			currency: data.currency,
			deadline: data.deadline || null
		} });
		try {
			await sendNotificationEmail(data);
		} catch (err) {
			console.error("[inquiry] Failed to send notification email:", err);
		}
		return { success: true };
	} catch (err) {
		console.error("[inquiry] Server error:", err);
		return {
			success: false,
			error: "Something went wrong. Please try again later."
		};
	}
});
//#endregion
export { submitInquiry_createServerFn_handler };
