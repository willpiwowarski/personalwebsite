// ─────────────────────────────────────────────────────────────────────────────
// EDIT EVERYTHING HERE. This is the only file you need to touch to update the
// site's content. Search for TODO — those are placeholders you need to fill in.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Will Piwowarski",
  headline: "Data Science / SWE Intern",
  company: "Rhobot AI Solutions",
  schoolLine: "CS @ Liberty | Data Science & Software Engineering | May 2028",
  previously: [{ label: "i7 Consulting Group", tone: "blue" as const }],
  seeking: "Seeking SWE internships · Summer 2027",
  email: "williamtpiwo@gmail.com",
  github: "https://github.com/willpiwowarski",
  githubHandle: "/willpiwowarski",
  linkedin: "https://www.linkedin.com/in/will-piwowarski-900bb8323",
  linkedinHandle: "/in/will-piwowarski",
  resume: "/resume.pdf",
  transcript: "/transcript.pdf",
  // TODO: drop a headshot into /public (e.g. me.jpg) and set it here.
  // Leave as null and a placeholder tile shows instead.
  photo: null as string | null,
  metaDescription:
    "Will Piwowarski — software engineering and data science student at Liberty University. Full-stack, data, and AI systems work.",
};

export const nav = [
  { num: "01", label: "about", href: "#about" },
  { num: "02", label: "experience", href: "#experience" },
  { num: "03", label: "projects", href: "#projects" },
  { num: "04", label: "skills", href: "#skills" },
  { num: "05", label: "contact", href: "#contact" },
];

// Inline "chips" and colored names inside the about copy are written as
// {chip:Text} and {accent:Text} — see AboutText in page.tsx.
export const about = [
  "I'm a CS junior at {chip:Liberty University} in the {chip:Honors College}, with cognates in data science and software engineering. I like building things people actually depend on — so far that's residence-life software serving {chip:200+ weekly users}, a training pipeline behind 20+ regression models at {violet:Rhobot AI Solutions}, and a spoofing detector for aircraft broadcasts built out of a Raspberry Pi and a software-defined radio.",
];

export type Tone = "amber" | "cyan" | "rose" | "blue" | "violet";

export type Job = {
  period: string;
  org: string;
  role: string;
  location: string;
  icon: string;
  tone: Tone;
};

export const experience: Job[] = [
  {
    period: "May 2026 to Present",
    org: "Rhobot AI Solutions",
    role: "Data Science / Software Engineering Intern",
    location: "Remote",
    icon: "◆",
    tone: "violet",
  },
  {
    period: "Aug 2026 to Present",
    org: "AI Club × Xenith Solutions",
    role: "Technical Lead · SkyWatch AI Challenge",
    location: "Lynchburg, VA",
    icon: "▲",
    tone: "cyan",
  },
  {
    period: "Aug 2025 to Present",
    org: "Liberty University Residence Life",
    role: "Resident Advisor (Resident Shepherd)",
    location: "Lynchburg, VA",
    icon: "⬢",
    tone: "rose",
  },
  {
    period: "May 2025 to Aug 2025",
    org: "i7 Consulting Group",
    role: "Software Engineering Intern · Full Stack",
    location: "Woodbine, MD",
    icon: "▣",
    tone: "blue",
  },
];

export const education = {
  school: "Liberty University",
  detail:
    "BS: Computer Science · Cognates: Data Science & Software Engineering · Honors · GPA 3.91 · Aug 2024 – May 2028",
};

export type Project = {
  name: string;
  tone: Tone;
  badge?: string;
  blurb: string;
  stack: string[];
  link?: { label: string; href: string };
};

export const projectsIntro =
  "A few things I've built. The full archive lives on GitHub.";

export const projects: Project[] = [
  {
    name: "Flock",
    tone: "cyan",
    badge: "Live",
    blurb:
      "Shipped an installable, offline-capable PWA now serving 200+ weekly users, replacing the attendance and check-in tracking residence hall leadership had been doing by hand. Cross-hall access is structurally impossible: every read routes through a single data layer that filters on the signed-in user's hall, with server-only imports that fail the build if it's ever pulled into the browser.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "Supabase Postgres",
      "Tailwind",
      "PWA",
    ],
    link: { label: "getflock.cc", href: "https://getflock.cc" },
  },
  {
    name: "SkyWatch",
    tone: "violet",
    blurb:
      "Leading a student team building a spoofing detector for aircraft broadcasts — a protocol where any transmitter can claim to be any aircraft. Flags reports that contradict their own physics while designing around what breaks naive detectors: coverage handoffs, clock drift, holding patterns, and a neighbor check that separates GPS jamming from a single spoofed target. I own the live feed off a software-defined radio and Raspberry Pi.",
    stack: ["Python", "ADS-B / SDR", "Raspberry Pi", "Anomaly Detection"],
  },
  {
    name: "Cartograph",
    tone: "blue",
    blurb:
      "Built a CLI that maps every function call in a TypeScript project through the compiler's type checker, resolving overloaded methods, renamed imports, and inherited overrides that a text search gets wrong. The call graph is stored as adjacency maps in both directions, making caller lookups, change-impact analysis, and shortest path between two functions constant-time queries.",
    stack: ["TypeScript", "ts-morph", "Node.js", "GitHub Actions"],
    link: {
      label: "github.com/willpiwowarski",
      href: "https://github.com/willpiwowarski",
    },
  },
  {
    name: "Auralith",
    tone: "rose",
    badge: "Live",
    blurb:
      "Built an AI dataset-exploration app: upload a CSV, XLSX, or JSON file and Auralith profiles every column, surfaces KPIs and plain-English insights, generates charts from natural-language prompts, and lets you chat with your data. The chart endpoint asks Gemini for JSON only, validates it against a strict schema, retries once with the failure reason, and rejects any column the dataset doesn't have.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "AWS S3",
      "Gemini",
      "Recharts",
    ],
    link: { label: "auralith-delta.vercel.app", href: "https://auralith-delta.vercel.app" },
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "Java", "C++", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    group: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Vue 3",
      "Spring Boot",
      "FastAPI",
      "Prisma",
      "Pydantic",
      "Tailwind CSS",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "AWS (S3, IAM)", "Redis", "MongoDB", "Git", "GitHub Actions", "Vercel", "Neon"],
  },
  {
    group: "Data & ML",
    items: ["pandas", "NumPy", "SciPy", "scikit-learn", "XGBoost", "LightGBM", "CatBoost", "InfluxDB"],
  },
  {
    group: "AI",
    items: [
      "Agent instruction design",
      "Multi-agent workflows",
      "LLM output validation",
      "Prompt engineering",
    ],
  },
];
