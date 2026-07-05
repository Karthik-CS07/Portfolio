import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Check,
  Sparkles,
} from "lucide-react";
import { toast, Toaster } from "sonner";

import projectAi from "@/assets/project-ai-assistant.jpg";
import projectEcom from "@/assets/project-ecommerce.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const EMAIL = "cskarthikcr7@gmail.com";
const GITHUB = "https://github.com/Karthik-CS07";
const LINKEDIN = "https://www.linkedin.com/in/karthik-cs-89b629327";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["HTML", "CSS", "React"] },
  { group: "Backend & Tools", items: ["Node.js", "Git & GitHub"] },
  { group: "AI & Data", items: ["Machine Learning", "Data Science"] },
];

const PROJECTS: {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}[] = [
  {
    title: "RecruiterMatch AI",
    desc: "An AI-powered hiring assistant that matches candidate resumes to job descriptions using semantic similarity. It removes hours of manual screening by ranking the most relevant profiles for a role, with an explainable score for each match.",
    tech: ["Python", "Machine Learning", "React", "Node.js"],
    image: projectAi,
    github: GITHUB,
  },
  {
    title: "AI Study Planner",
    desc: "A personalized study planner that turns a learner's goals, subjects, and available time into an adaptive weekly schedule. It helps students stay consistent by rebalancing tasks based on progress and upcoming deadlines.",
    tech: ["Python", "Machine Learning", "React"],
    image: projectAnalytics,
    github: GITHUB,
  },
  {
    title: "OTT Platform UI",
    desc: "A responsive front-end for a streaming platform with browsing, category rows, and detail views. It focuses on a clean visual hierarchy and smooth interactions so users can discover content without friction across devices.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    image: projectEcom,
    github: GITHUB,
  },
  {
    title: "Movie Genre Classification",
    desc: "A natural-language model that predicts a movie's genre from its plot summary. It solves the manual tagging problem for large catalogs by learning genre signals from text features and returning the top predicted labels.",
    tech: ["Python", "Machine Learning", "Data Science"],
    image: projectAi,
    github: GITHUB,
  },
  {
    title: "Customer Churn Prediction",
    desc: "An end-to-end machine-learning pipeline that predicts which customers are likely to churn from behavioral and account data. Its key feature is the ranked list of churn drivers, giving teams a clear starting point for retention.",
    tech: ["Python", "Machine Learning", "SQL"],
    image: projectAnalytics,
    github: GITHUB,
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "A classification model that flags fraudulent card transactions in a highly imbalanced dataset. It is tuned for high recall on the fraud class so genuinely suspicious activity is caught while keeping false alarms manageable.",
    tech: ["Python", "Machine Learning", "Data Science"],
    image: projectAi,
    github: GITHUB,
  },
  {
    title: "Personal Portfolio Website",
    desc: "This portfolio — a calm, editorial single-page site that showcases my work as an AI & Full Stack developer. It is fully responsive, keyboard-friendly, and built with a lightweight component setup for fast loads.",
    tech: ["React", "TypeScript", "HTML", "CSS"],
    image: projectEcom,
    github: GITHUB,
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" toastOptions={{ className: "font-sans" }} />
      <Nav />
      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          Karthik<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#inquiry"
          className="inline-flex items-center gap-1.5 rounded-full border border-foreground/80 bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Hire me <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative grid gap-10 pb-24 pt-20 sm:pt-28 md:grid-cols-12">
      <div className="md:col-span-8 fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Open to internships &amp; freelance projects
        </div>
        <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          Building thoughtful{" "}
          <span className="italic font-serif font-normal text-primary">software</span>
          <br />
          with a bias for craft.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I'm Karthik CS — an AI &amp; Full Stack Developer. I build practical
          machine-learning tools and clean, responsive web products, from data
          pipelines and models to the interfaces people actually use.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#inquiry"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Hire me for a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="text-sm text-foreground/80 underline decoration-primary decoration-2 underline-offset-4 hover:text-foreground"
          >
            or see recent work
          </a>
        </div>
      </div>

      <aside className="md:col-span-4 md:pt-8">
        <div className="paper-card p-6">
          <p className="font-serif text-sm italic text-muted-foreground">Currently</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">Focus</span>
              <span className="text-right font-medium">AI, ML &amp; full stack web</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">Studying</span>
              <span className="text-right font-medium">B.Tech AI &amp; Data Science</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-primary">Available</span>
            </li>
          </ul>
          <span className="hand-divider mt-6" />
          <p className="mt-4 font-serif italic text-sm leading-relaxed text-foreground/80">
            "Software should feel like a well-kept notebook — considered, quiet, and
            useful when you need it."
          </p>
        </div>
      </aside>
    </section>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-xs tracking-widest text-primary">{n}</span>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <SectionLabel n="01 / ABOUT">A short introduction</SectionLabel>
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm Karthik CS, an AI &amp; Full Stack Developer who enjoys turning
            ideas into working products. My interest sits at the meeting point of
            applied machine learning and clean web engineering — from training
            models on real-world data to shipping the interfaces around them.
          </p>
          <p>
            I'm currently pursuing a B.Tech in Artificial Intelligence and Data
            Science at KPR Institute of Engineering and Technology. Alongside
            coursework I build side projects across AI, data, and full stack web
            to sharpen both the craft and the fundamentals.
          </p>
        </div>
        <div className="md:col-span-5 space-y-6">
          <FactRow
            k="Education"
            v="B.Tech in Artificial Intelligence and Data Science — KPR Institute of Engineering and Technology"
          />
          <FactRow
            k="Focus"
            v="AI / ML, data science, and full stack web development"
          />
          <FactRow
            k="Objective"
            v="To grow as an engineer by building useful, well-crafted products and collaborating with teams that care about quality."
          />
        </div>
      </div>
    </section>
  );
}

function FactRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {k}
      </div>
      <div className="mt-1 text-base leading-snug">{v}</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24">
      <SectionLabel n="02 / SKILLS">Tools of the trade</SectionLabel>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((g) => (
          <div key={g.group} className="paper-card paper-card-hover p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <h3 className="font-display text-sm font-semibold tracking-wide">
                {g.group}
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/70" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-border/60 py-24">
      <SectionLabel n="03 / WORK">Selected projects</SectionLabel>
      <div className="space-y-16">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className={`grid gap-8 md:grid-cols-12 md:items-center ${
              i % 2 === 1 ? "md:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="md:col-span-7 overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={p.image}
                alt={p.title}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </figure>
            <div className="md:col-span-5">
              <div className="font-mono text-xs tracking-widest text-muted-foreground">
                Project
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 leading-relaxed text-foreground/80">{p.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/80 bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                ) : null}
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const items: { icon: typeof Mail; label: string; href?: string }[] = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Github, label: "github.com/Karthik-CS07", href: GITHUB },
    { icon: Linkedin, label: "linkedin.com/in/karthik-cs-89b629327", href: LINKEDIN },
    { icon: MapPin, label: "India" },
  ];
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <SectionLabel n="04 / CONTACT">Get in touch</SectionLabel>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, href }) => {
          const inner = (
            <div className="paper-card paper-card-hover flex items-center gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 truncate text-sm">{label}</span>
            </div>
          );
          return href ? (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {inner}
            </a>
          ) : (
            <div key={label}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}

function Inquiry() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const title = String(data.get("title") || "").trim();
    const desc = String(data.get("desc") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const deadline = String(data.get("deadline") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter a valid name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email address.");
    if (!title || title.length > 120) return toast.error("Please add a project title.");
    if (!desc || desc.length > 2000) return toast.error("Please describe the project.");
    if (!budget) return toast.error("Please pick an expected budget.");

    // Frontend-only handoff: open the user's email client addressed to Karthik.
    const subject = `New project inquiry — ${title}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Budget: ${budget}`,
      deadline ? `Deadline: ${deadline}` : null,
      "",
      "Project description:",
      desc,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    form.reset();
    toast.success("Thanks — I'll be in touch soon.");
  }

  return (
    <section id="inquiry" className="border-t border-border/60 py-24">
      <SectionLabel n="05 / INQUIRY">Start a project</SectionLabel>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <p className="font-serif text-xl italic leading-relaxed text-foreground/85">
            Tell me a little about what you're building. I read every message
            personally and reply as soon as I can.
          </p>
          <span className="hand-divider" />
          <p className="text-sm text-muted-foreground">
            Prefer email? Write to{" "}
            <a href={`mailto:${EMAIL}`} className="ink-underline text-foreground">
              {EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <div className="paper-card flex flex-col items-start gap-4 p-8">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" />
              </span>
              <h3 className="font-display text-2xl">Message ready to send.</h3>
              <p className="text-foreground/80">
                Your email client should have opened with the details filled in.
                If not, please email me directly at {EMAIL}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm underline decoration-primary decoration-2 underline-offset-4"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="paper-card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required maxLength={100} />
                <Field label="Email address" name="email" type="email" required maxLength={200} />
              </div>
              <Field label="Project title" name="title" required maxLength={120} />
              <div>
                <Label>Project description</Label>
                <textarea
                  name="desc"
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="What are you building? What does success look like?"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label>Expected budget</Label>
                  <select
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>Select a range</option>
                    <option>Under $500</option>
                    <option>$500 – $2k</option>
                    <option>$2k – $5k</option>
                    <option>$5k+</option>
                  </select>
                </div>
                <Field label="Deadline (optional)" name="deadline" type="date" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">
                  Your details are only used to reply to your inquiry.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Send inquiry
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-10">
        <p>© {new Date().getFullYear()} Karthik CS. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
