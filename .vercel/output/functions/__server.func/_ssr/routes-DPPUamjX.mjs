import { o as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-fFcbw6nI.mjs";
import { a as Linkedin, c as ArrowUpRight, i as LoaderCircle, n as MapPin, o as Github, r as Mail, s as Check, t as Sparkles } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DPPUamjX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
}).handler(createSsrRpc("e6ba7e0004e7dc7106d6f0c5a4d10c4f820a29232c7716f1e06463f241904f6e"));
var EMAIL = "cskarthikcr7@gmail.com";
var GITHUB = "https://github.com/Karthik-CS07";
var LINKEDIN = "https://www.linkedin.com/in/karthik-cs-89b629327";
var NAV = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var SKILLS = [
	{
		group: "Languages",
		items: [
			"Python",
			"Java",
			"JavaScript",
			"SQL"
		]
	},
	{
		group: "Frontend",
		items: [
			"HTML",
			"CSS",
			"React"
		]
	},
	{
		group: "Backend & Tools",
		items: ["Node.js", "Git & GitHub"]
	},
	{
		group: "AI & Data",
		items: ["Machine Learning", "Data Science"]
	}
];
var PROJECTS = [
	{
		title: "RecruiterMatch AI",
		desc: "An AI-powered hiring assistant that matches candidate resumes to job descriptions using semantic similarity. It removes hours of manual screening by ranking the most relevant profiles for a role, with an explainable score for each match.",
		tech: [
			"Python",
			"Machine Learning",
			"React",
			"Node.js"
		],
		github: GITHUB
	},
	{
		title: "AI Study Planner",
		desc: "A personalized study planner that turns a learner's goals, subjects, and available time into an adaptive weekly schedule. It helps students stay consistent by rebalancing tasks based on progress and upcoming deadlines.",
		tech: [
			"Python",
			"Machine Learning",
			"React"
		],
		github: GITHUB
	},
	{
		title: "OTT Platform UI",
		desc: "A responsive front-end for a streaming platform with browsing, category rows, and detail views. It focuses on a clean visual hierarchy and smooth interactions so users can discover content without friction across devices.",
		tech: [
			"React",
			"HTML",
			"CSS",
			"JavaScript"
		],
		github: GITHUB
	},
	{
		title: "Movie Genre Classification",
		desc: "A natural-language model that predicts a movie's genre from its plot summary. It solves the manual tagging problem for large catalogs by learning genre signals from text features and returning the top predicted labels.",
		tech: [
			"Python",
			"Machine Learning",
			"Data Science"
		],
		github: GITHUB
	},
	{
		title: "Customer Churn Prediction",
		desc: "An end-to-end machine-learning pipeline that predicts which customers are likely to churn from behavioral and account data. Its key feature is the ranked list of churn drivers, giving teams a clear starting point for retention.",
		tech: [
			"Python",
			"Machine Learning",
			"SQL"
		],
		github: GITHUB
	},
	{
		title: "Credit Card Fraud Detection",
		desc: "A classification model that flags fraudulent card transactions in a highly imbalanced dataset. It is tuned for high recall on the fraud class so genuinely suspicious activity is caught while keeping false alarms manageable.",
		tech: [
			"Python",
			"Machine Learning",
			"Data Science"
		],
		github: GITHUB
	},
	{
		title: "Personal Portfolio Website",
		desc: "This portfolio — a calm, editorial single-page site that showcases my work as an AI & Full Stack developer. It is fully responsive, keyboard-friendly, and built with a lightweight component setup for fast loads.",
		tech: [
			"React",
			"TypeScript",
			"HTML",
			"CSS"
		],
		github: GITHUB
	}
];
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				toastOptions: { className: "font-sans" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-6 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inquiry, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-display text-base font-semibold tracking-tight",
					children: ["Karthik", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "transition-colors hover:text-foreground",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#inquiry",
					className: "inline-flex items-center gap-1.5 rounded-full border border-foreground/80 bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
					children: ["Hire me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative grid gap-10 pb-24 pt-20 sm:pt-28 md:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-8 fade-up",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "Open to internships & freelance projects"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl",
					children: [
						"Building thoughtful",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-serif font-normal text-primary",
							children: "software"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"with a bias for craft."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground",
					children: "I'm Karthik CS — an AI & Full Stack Developer. I build practical machine-learning tools and clean, responsive web products, from data pipelines and models to the interfaces people actually use."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#inquiry",
						className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: ["Hire me for a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#work",
						className: "text-sm text-foreground/80 underline decoration-primary decoration-2 underline-offset-4 hover:text-foreground",
						children: "or see recent work"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "md:col-span-4 md:pt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "paper-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-sm italic text-muted-foreground",
						children: "Currently"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Focus"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right font-medium",
									children: "AI, ML & full stack web"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Studying"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right font-medium",
									children: "B.Tech AI & Data Science"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-primary",
									children: "Available"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hand-divider mt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif italic text-sm leading-relaxed text-foreground/80",
						children: "\"Software should feel like a well-kept notebook — considered, quiet, and useful when you need it.\""
					})
				]
			})
		})]
	});
}
function SectionLabel({ n, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 flex items-baseline gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs tracking-widest text-primary",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-medium tracking-tight sm:text-4xl",
			children
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "border-t border-border/60 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
			n: "01 / ABOUT",
			children: "A short introduction"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm Karthik CS, an AI & Full Stack Developer who enjoys turning ideas into working products. My interest sits at the meeting point of applied machine learning and clean web engineering — from training models on real-world data to shipping the interfaces around them." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm currently pursuing a B.Tech in Artificial Intelligence and Data Science at KPR Institute of Engineering and Technology. Alongside coursework I build side projects across AI, data, and full stack web to sharpen both the craft and the fundamentals." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactRow, {
						k: "Education",
						v: "B.Tech in Artificial Intelligence and Data Science — KPR Institute of Engineering and Technology"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactRow, {
						k: "Focus",
						v: "AI / ML, data science, and full stack web development"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactRow, {
						k: "Objective",
						v: "To grow as an engineer by building useful, well-crafted products and collaborating with teams that care about quality."
					})
				]
			})]
		})]
	});
}
function FactRow({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-border pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-base leading-snug",
			children: v
		})]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "border-t border-border/60 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
			n: "02 / SKILLS",
			children: "Tools of the trade"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: SKILLS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "paper-card paper-card-hover p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-sm font-semibold tracking-wide",
						children: g.group
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm text-foreground/80",
					children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-primary/70" }), it]
					}, it))
				})]
			}, g.group))
		})]
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "border-t border-border/60 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
			n: "03 / WORK",
			children: "Selected projects"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-16",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `grid gap-8 md:grid-cols-2 md:items-start ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs tracking-widest text-muted-foreground",
						children: "Project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-foreground/80",
						children: p.desc
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: i % 2 === 1 ? "" : "md:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: `mt-3 flex flex-wrap gap-2 ${i % 2 === 1 ? "" : "md:justify-end"}`,
						children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground",
							children: t
						}, t))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `mt-5 flex flex-wrap items-center gap-3 ${i % 2 === 1 ? "" : "md:justify-end"}`,
						children: [p.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.github,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-full border border-foreground/80 bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }), "GitHub"]
						}) : null, p.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.demo,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5",
							children: ["Live Demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
						}) : null]
					})]
				})]
			}, p.title))
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "border-t border-border/60 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
			n: "04 / CONTACT",
			children: "Get in touch"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				{
					icon: Mail,
					label: EMAIL,
					href: `mailto:${EMAIL}`
				},
				{
					icon: Github,
					label: "github.com/Karthik-CS07",
					href: GITHUB
				},
				{
					icon: Linkedin,
					label: "linkedin.com/in/karthik-cs-89b629327",
					href: LINKEDIN
				},
				{
					icon: MapPin,
					label: "India"
				}
			].map(({ icon: Icon, label, href }) => {
				const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "paper-card paper-card-hover flex items-center gap-4 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-sm",
						children: label
					})]
				});
				return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: "_blank",
					rel: "noreferrer",
					children: inner
				}, label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: inner }, label);
			})
		})]
	});
}
function Inquiry() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") || "").trim();
		const email = String(data.get("email") || "").trim();
		const title = String(data.get("title") || "").trim();
		const desc = String(data.get("desc") || "").trim();
		const budget = String(data.get("budget") || "").trim();
		const currency = String(data.get("currency") || "₹").trim();
		const deadline = String(data.get("deadline") || "").trim();
		if (!name || name.length > 100) return toast.error("Please enter a valid name.");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email address.");
		if (!title || title.length > 120) return toast.error("Please add a project title.");
		if (!desc || desc.length > 2e3) return toast.error("Please describe the project.");
		if (!budget) return toast.error("Please enter an expected budget.");
		setSubmitting(true);
		try {
			const result = await submitInquiry({ data: {
				name,
				email,
				title,
				desc,
				budget,
				currency,
				deadline
			} });
			if (result.success) {
				setSubmitted(true);
				form.reset();
				toast.success("Thanks — I'll be in touch soon.");
			} else toast.error(result.error || "Something went wrong. Please try again.");
		} catch {
			toast.error("Network error. Please check your connection and try again.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inquiry",
		className: "border-t border-border/60 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
			n: "05 / INQUIRY",
			children: "Start a project"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl italic leading-relaxed text-foreground/85",
						children: "Tell me a little about what you're building. I read every message personally and reply as soon as I can."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hand-divider" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Prefer email? Write to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "text-foreground underline decoration-primary/60 decoration-1 underline-offset-4 hover:decoration-primary",
								children: EMAIL
							}),
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "paper-card flex flex-col items-start gap-4 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: "Inquiry sent successfully."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80",
							children: "Your message has been received. I'll review it and get back to you as soon as possible."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSubmitted(false),
							className: "text-sm underline decoration-primary decoration-2 underline-offset-4",
							children: "Send another"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "paper-card space-y-5 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								name: "name",
								required: true,
								maxLength: 100
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email address",
								name: "email",
								type: "email",
								required: true,
								maxLength: 200
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Project title",
							name: "title",
							required: true,
							maxLength: 120
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Project description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "desc",
							required: true,
							maxLength: 2e3,
							rows: 5,
							className: "w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary",
							placeholder: "What are you building? What does success look like?"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Expected budget" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "currency",
									defaultValue: "₹",
									className: "shrink-0 rounded-l-lg border border-r-0 border-input bg-background px-2.5 py-2.5 text-sm outline-none transition-colors focus:border-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "₹",
										children: "₹ INR"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "$",
										children: "$ USD"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "budget",
									type: "text",
									required: true,
									placeholder: "e.g. 50000",
									className: "w-full rounded-r-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Deadline (optional)",
								name: "deadline",
								type: "date"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Your details are only used to reply to your inquiry."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: submitting,
								className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none",
								children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Sending…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send inquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })] })
							})]
						})
					]
				})
			})]
		})]
	});
}
function Label({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
		children
	});
}
function Field({ label, name, type = "text", required, maxLength }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		maxLength,
		className: "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Karthik CS. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${EMAIL}`,
						className: "hover:text-foreground",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: GITHUB,
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-foreground",
						children: "GitHub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: LINKEDIN,
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-foreground",
						children: "LinkedIn"
					})
				]
			})]
		})
	});
}
//#endregion
export { Portfolio as component };
