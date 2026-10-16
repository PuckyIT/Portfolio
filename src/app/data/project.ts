// Content source of truth: public/Resume_Le_Thanh_Phat.pdf
// Keep site copy short; full wording lives in the CV.

export interface Project {
  id: string;
  name: string;
  period: string;
  domain: string;
  /** One-line pitch shown on the card. */
  summary: string;
  /** 2–3 word chips floating on the card visual. */
  tags: string[];
  /** Tailwind gradient stops for the card visual. */
  gradient: string;
  /** "What I did" bullets shown in the detail dialog (from the CV). */
  bullets: string[];
  tech: string[];
}

export const personalInfo = {
  name: "Le Thanh Phat",
  role: "Software Engineer",
  /** Rotating hero phrases: "I build …" */
  builds: ["scalable web apps", "AI-powered products", "real-time systems", "multi-agent platforms"],
  location: "Ho Chi Minh City, Vietnam",
  phone: "0968 295 944",
  phoneClean: "0968295944",
  email: "phat30102002@gmail.com",
  githubProfiles: [
    { username: "Lenal-P", url: "https://github.com/Lenal-P" },
    { username: "PuckyIT", url: "https://github.com/PuckyIT" },
  ],
  cvUrl: "/Resume_Le_Thanh_Phat.pdf",
};

export const experience = {
  company: "Innotech Vietnam",
  role: "Software Engineer",
  period: "2024 — Present",
  highlights: [
    "Apps across HRM, CRM, EdTech & logistics",
    "Business requirements → production systems",
    "PostgreSQL, MySQL & NoSQL design",
    "AI-assisted delivery with agentic tools",
  ],
};

export const education = {
  institution: "HCMC University of Transport",
  degree: "B.Sc. Information Technology",
  period: "2020 — 2024",
};

export const projects: Project[] = [
  {
    id: "gexim",
    name: "GEXIM",
    period: "2026",
    domain: "Import-Export AI",
    summary: "Logistics platform that automates customs procedures.",
    tags: ["Customs automation", "Semantic search", "AI parsing"],
    gradient: "from-sky-500 via-cyan-400 to-teal-300",
    bullets: [
      "Developed applications and tools that support customs procedures and operational processes.",
      "Translated business requirements into technical solutions with cross-functional teams, including responsive navigation and GEXIM branding alignment.",
      "Used AI-assisted and agentic tools (Kiro, Claude) to explore solutions, accelerate development and troubleshoot issues.",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "Docker"],
  },
  {
    id: "kingwork",
    name: "KingWork HRM",
    period: "2024 — Present",
    domain: "HR & Sales",
    summary: "One platform for HR and sales operations.",
    tags: ["Payroll", "Attendance", "Sales pipeline"],
    gradient: "from-violet-600 via-fuchsia-500 to-pink-400",
    bullets: [
      "Developed and maintained HRM applications, turning business requirements into reliable operational systems.",
      "Used Claude and Windsurf to generate tests, troubleshoot issues and improve productivity.",
      "Improved the stack and infrastructure with Docker and relational databases.",
    ],
    tech: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
  },
  {
    id: "spec2s",
    name: "Spec2s",
    period: "2026",
    domain: "Multi-Agent AI",
    summary: "LLM agents that turn requirements into architecture and code.",
    tags: ["LangGraph agents", "Micro-frontends", "Payments"],
    gradient: "from-emerald-500 via-teal-400 to-sky-400",
    bullets: [
      "Wrote requirements, technical instructions and prompts that let AI coding agents produce reliable system architectures.",
      "Worked across departments to integrate corporate payment gateways under tight deadlines.",
    ],
    tech: ["React", "TypeScript", "Module Federation", "NestJS", "FastAPI", "LangGraph", "Redis", "Qdrant", "Docker"],
  },
  {
    id: "ellacy",
    name: "Ellacy",
    period: "2025",
    domain: "EdTech",
    summary: "Connects students, universities and education agents.",
    tags: ["Real-time chat", "Scholarships", "OpenAI"],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    bullets: [
      "Translated product logic into backend services and relational schemas with Data and Business teams.",
      "Used AI-assisted tools to accelerate delivery and improve software quality.",
      "Reviewed and refined AI-generated code for correctness, security and maintainability.",
    ],
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO", "OpenAI", "Docker"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "MUI", "Ant Design"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "FastAPI", "REST APIs", "Socket.IO", "JWT / SSO", "Multi-tenant"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant", "TypeORM"],
  },
  {
    title: "AI Tools",
    skills: ["Claude", "Kiro", "Antigravity", "Windsurf", "Prompt Engineering", "AI Code Review"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Linux", "Git / GitLab", "CI/CD", "Nginx"],
  },
];

/** Logos scrolling under the hero. */
export const marqueeTech = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS", "FastAPI", "Python", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "AWS", "Tailwind CSS", "Socket.IO", "OpenAI", "Claude",
  "LangGraph", "Nginx", "Linux", "Git / GitLab",
];

export const stats = [
  { value: 2, suffix: "+", label: "Years shipping" },
  { value: projects.length, suffix: "", label: "Production platforms" },
  {
    value: Math.floor(skillGroups.reduce((n, g) => n + g.skills.length, 0) / 10) * 10,
    suffix: "+",
    label: "Technologies",
  },
];
