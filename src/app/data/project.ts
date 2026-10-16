// Content source of truth: public/Resume_Le_Thanh_Phat.pdf
// Keep site copy short; full wording lives in the CV.

export interface Project {
  id: string;
  name: string;
  period: string;
  domain: string;
  /** One-line pitch shown on the card. */
  summary: string;
  /** "What I did" bullets shown in the detail dialog (from the CV). */
  bullets: string[];
  tech: string[];
}

export const personalInfo = {
  name: "Le Thanh Phat",
  role: "Software Engineer",
  headline: "Full-stack & AI-integrated systems",
  intro:
    "I build scalable web apps and AI-powered products — from React/Next.js frontends to NestJS/FastAPI services, shipped with Docker and CI/CD.",
  location: "Ho Chi Minh City, Vietnam",
  phone: "0968 295 944",
  phoneClean: "0968295944",
  email: "phat30102002@gmail.com",
  githubProfiles: [
    { username: "Lenal-P", url: "https://github.com/Lenal-P" },
    { username: "PuckyIT", url: "https://github.com/PuckyIT" },
  ],
  cvUrl: "/Resume_Le_Thanh_Phat.pdf",
  stats: [
    { value: "2+", label: "years experience" },
    { value: "4", label: "production platforms" },
    { value: "Full-stack", label: "frontend → DevOps" },
  ],
};

export const experience = {
  company: "Innotech Vietnam",
  role: "Software Engineer",
  period: "2024 — Present",
  location: "Ho Chi Minh City",
  highlights: [
    "Build and maintain apps across HRM, CRM, education and import-export.",
    "Turn business requirements into solutions with Product, Data and Business teams.",
    "Design and optimize PostgreSQL, MySQL and NoSQL databases.",
    "Ship faster with AI and agentic tools — Kiro, Claude, Antigravity, Windsurf.",
  ],
};

export const education = {
  institution: "Ho Chi Minh City University of Transport",
  degree: "B.Sc. in Information Technology",
  period: "2020 — 2024",
};

export const projects: Project[] = [
  {
    id: "gexim",
    name: "GEXIM",
    period: "2026",
    domain: "Import-Export AI",
    summary: "Logistics platform that automates customs procedures.",
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
    summary: "Platform for HR and sales operations.",
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
    summary: "LLM agents that generate system architecture and starter code.",
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
    skills: ["Kiro", "Claude", "Antigravity", "Windsurf", "Prompt Engineering", "AI Code Review"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Linux", "Git / GitLab", "CI/CD", "Nginx"],
  },
];
