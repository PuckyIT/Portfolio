export interface Project {
  id: string;
  name: string;
  shortName: string;
  domain: string;
  category: "all" | "ai" | "hrm" | "agentic" | "edtech";
  role: string;
  company: string;
  period: string;
  description: string;
  summary: string;
  keyResponsibilities: string[];
  keyAchievements: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ai_devops?: string[];
    all: string[];
  };
  highlights: string[];
  featuredBadge?: string;
  iconType: "logistics" | "hrm" | "education" | "agentic";
  metrics?: { label: string; value: string }[];
}

export const personalInfo = {
  name: "Le Thanh Phat",
  role: "Full-Stack & DevOps Engineer",
  specialization: "Distributed Systems & AI Integrations",
  tagline: "Software Engineer with 2+ years of experience engineering, deploying, and maintaining scalable web applications across HRM, CRM, education, and logistics platforms.",
  experienceYears: "2+",
  location: "Ho Chi Minh City, Vietnam",
  phone: "0968 295 944",
  phoneClean: "0968295944",
  email: "phat30102002@gmail.com",
  github: "https://github.com/Lenal-P",
  githubUsername: "Lenal-P",
  cvUrl: "/CV_Le_Thanh_Phat.pdf",
  status: "Available for High-Impact Roles",
  summary:
    "Software Engineer with 2+ years of experience building, deploying, and maintaining production web applications for HRM, CRM, education, and import-export operations. Proven expertise across React, Next.js, TypeScript, NestJS, FastAPI, and PostgreSQL. Experienced in taking features from architectural design through containerized deployment, monitoring, and production reliability.",
  stats: [
    { value: "2+", label: "Years of Experience", subtext: "Full-Stack & DevOps Engineering" },
    { value: "4+", label: "Enterprise Platforms", subtext: "HRM, AI Logistics, Multi-Agent, EdTech" },
    { value: "End-to-End", label: "System Lifecycle", subtext: "Architecture -> CI/CD -> Production" },
    { value: "AI-Augmented", label: "Engineering Velocity", subtext: "FastAPI, LangGraph, Qdrant & AI Tooling" }
  ]
};

export const productionProjects: Project[] = [
  {
    id: "gexim-ai",
    name: "GEXIM – Import-Export AI Platform",
    shortName: "GEXIM Logistics AI",
    domain: "Logistics & Customs Automation",
    category: "ai",
    role: "Full-Stack Software Engineer",
    company: "Innotech Vietnam",
    period: "2026",
    featuredBadge: "AI & Vector Search",
    iconType: "logistics",
    metrics: [
      { label: "Document Processing", value: "-70% Manual Time" },
      { label: "HS Code Search", value: "Semantic Sub-sec" },
      { label: "Architecture", value: "Microservices + Docker" }
    ],
    summary:
      "A digital import-export platform that helps businesses manage customs procedures and reduce manual document processing. Users can track shipments, prepare declarations, look up HS codes and taxes, verify C/O documents and check import-export records.",
    description:
      "GEXIM is a digital import-export platform designed to streamline cross-border trade operations and eliminate manual document overhead. The platform enables businesses to monitor cargo shipments in real-time, prepare automated customs declarations, perform semantic HS code and tax lookup, verify Certificate of Origin (C/O) compliance, and query regulatory records via an integrated AI retrieval assistant.",
    keyResponsibilities: [
      "Developed full-stack web features and backend API services using Next.js, TypeScript, and FastAPI.",
      "Integrated AI document extraction pipelines for automated parsing of shipment invoices, packing lists, and C/O certificates.",
      "Built semantic legal search and conversational assistant powered by Qdrant vector database and Redis caching.",
      "Engineered customs data validation logic in compliance with trade regulations and tax schedules.",
      "Configured Dockerized deployment environments and CI/CD pipelines for zero-downtime releases."
    ],
    keyAchievements: [
      "Drastically reduced manual paperwork processing time through AI document extraction and optical parsing.",
      "Delivered high-performance semantic search for thousands of HS codes and tariff regulations using Qdrant vector retrieval.",
      "Engineered containerized microservices ensuring continuous environment parity between staging and production."
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "MUI"],
      backend: ["FastAPI", "Python", "REST APIs", "Pydantic"],
      database: ["PostgreSQL (Relational)", "Qdrant (Vector DB)", "Redis (Cache)"],
      ai_devops: ["Docker", "AI Document Extraction", "Vector Embeddings", "CI/CD"],
      all: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "Docker", "MUI", "Tailwind CSS"]
    },
    highlights: [
      "Automated Customs Clearance & C/O Certificate Verification",
      "Semantic HS Code & Tariff Legal Search (Qdrant Vector DB)",
      "Real-Time Shipment & Trade Record Tracking",
      "AI-Powered Document Parsing & Conversational Agent"
    ]
  },
  {
    id: "kingwork-hrm",
    name: "KingWork HRM Platform",
    shortName: "KingWork Enterprise HRM",
    domain: "Enterprise Operations & HRM / CRM",
    category: "hrm",
    role: "Full-Stack Software Engineer",
    company: "Innotech Vietnam",
    period: "2024 - Present",
    featuredBadge: "Enterprise Core Platform",
    iconType: "hrm",
    metrics: [
      { label: "Core Workflows", value: "Attendance, Payroll, E-Sign" },
      { label: "Architecture", value: "Multi-Tenant & RBAC" },
      { label: "Deployment", value: "Docker CI/CD" }
    ],
    summary:
      "A business operations platform that helps companies manage employees and sales activities in one place. HR teams handle attendance, leave/WFH, payroll, allowances, contracts, approvals and tasks, while sales teams manage leads, deals, quotations, invoices and reports.",
    description:
      "KingWork is an all-in-one corporate operations platform supporting both HR and Sales divisions. HR teams manage employee profiles, automated attendance tracking, leave/WFH requests, dynamic payroll calculations, allowances, labor contracts, e-sign approvals, and task reminders. Sales teams manage end-to-end sales pipelines, leads, customer deals, quotations, and financial reports.",
    keyResponsibilities: [
      "Developed and maintain features across the HRM systems using React, Next.js, TypeScript, and NestJS.",
      "Implemented comprehensive HRM workflows for employee records, attendance, leave/WFH, payroll, allowances, contracts, and e-sign approvals.",
      "Designed and optimized relational PostgreSQL schemas using TypeORM, ensuring high performance, data consistency, and seamless migrations.",
      "Enforced granular Role-Based Access Control (RBAC) and multi-tenant security architecture.",
      "Maintained Docker-based environments, CI/CD workflows, configuration management, and production troubleshooting."
    ],
    keyAchievements: [
      "Unified HR and sales operations for multi-department organizations across web and mobile systems.",
      "Automated complex payroll calculation logic taking into account attendance logs, tax deductions, and customized allowances.",
      "Built resilient multi-tenant architecture with strict data isolation and enterprise-grade security."
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "MUI", "Ant Design", "Redux Toolkit"],
      backend: ["NestJS", "Node.js", "REST APIs", "JWT/SSO", "RBAC", "TypeORM"],
      database: ["PostgreSQL", "TypeORM", "Redis", "Schema Migrations"],
      ai_devops: ["Docker", "Docker Compose", "GitLab CI/CD", "Linux", "Nginx"],
      all: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "MUI", "Ant Design", "Docker", "Redis"]
    },
    highlights: [
      "End-to-End HRM Suite: Attendance, Leave/WFH, Payroll & Allowances",
      "Digital Labor Contracts with Automated E-Sign Approval Flows",
      "Sales Pipeline Integration: Leads, Deals, Quotes & Invoicing",
      "Multi-Tenant Architecture with Granular RBAC Permissions"
    ]
  },
  {
    id: "spec2s-platform",
    name: "Spec2s Multi-Agent Software Engineering Platform",
    shortName: "Spec2s Multi-Agent Platform",
    domain: "AI-Assisted Architecture & Agentic Code Generation",
    category: "agentic",
    role: "Full-Stack & Multi-Agent Engineer",
    company: "Innotech Vietnam",
    period: "2026",
    featuredBadge: "Multi-Agent & LLMs",
    iconType: "agentic",
    metrics: [
      { label: "SDLC Acceleration", value: "Requirements to Code" },
      { label: "Orchestration", value: "LangGraph Multi-Agent" },
      { label: "Frontend", value: "Webpack Module Federation" }
    ],
    summary:
      "An AI-assisted software engineering platform that turns business requirements into SRS documents, UI mockups, system architecture, database designs and starter code. Contributed administration, permissions, user/credit management, billing, reports and file-upload features.",
    description:
      "Spec2s revolutionizes the software development lifecycle by orchestrating autonomous AI engineering agents. Given raw business requirements, the platform autonomously generates software requirements specifications (SRS), interactive UI mockups, system architecture blueprints, database schemas, and starter code repositories.",
    keyResponsibilities: [
      "Contributed administration, permissions, user/credit management, corporate billing, reports, and file-upload features.",
      "Engineered micro-frontend modules using Webpack Module Federation for scalable team collaboration.",
      "Built resilient backend services with NestJS, FastAPI, LangGraph, Redis, and Qdrant vector retrieval.",
      "Authored prompt pipelines and agent tool definitions to enforce strict architectural rules and code quality.",
      "Maintained Docker container orchestration and CI/CD pipelines across the microservices ecosystem."
    ],
    keyAchievements: [
      "Delivered credit and enterprise billing quota system under tight deadlines to monetize AI token/credit usage.",
      "Built resilient multi-agent execution graphs with LangGraph, Redis state persistence, and Qdrant vector retrieval.",
      "Implemented modular Micro-Frontend architecture using Webpack Module Federation."
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Webpack Module Federation", "Tailwind CSS"],
      backend: ["NestJS", "FastAPI", "LangGraph", "REST APIs", "Node.js"],
      database: ["Qdrant (Vector DB)", "Redis (State Cache)", "PostgreSQL"],
      ai_devops: ["Docker", "LangGraph", "LLM Multi-Agent", "GitLab CI/CD", "Linux"],
      all: ["React", "TypeScript", "Webpack Module Federation", "NestJS", "FastAPI", "LangGraph", "Redis", "Qdrant", "Docker"]
    },
    highlights: [
      "Automated SRS & Architecture Generation from Business Requirements",
      "Multi-Agent Workflow Orchestration via LangGraph & LLMs",
      "Micro-Frontend Architecture via Webpack Module Federation",
      "User Credit Quotas, Corporate Billing & Multi-Department Administration"
    ]
  },
  {
    id: "ellacy-education",
    name: "Ellacy Education and Scholarship Platform",
    shortName: "Ellacy Global Education",
    domain: "Higher EdTech & International Scholarship Network",
    category: "edtech",
    role: "Full-Stack Software Engineer",
    company: "Innotech Vietnam",
    period: "2025",
    featuredBadge: "EdTech & Real-Time",
    iconType: "education",
    metrics: [
      { label: "User Roles", value: "Students, Universities, Agents" },
      { label: "Real-time", value: "Socket.IO Notifications" },
      { label: "Localization", value: "Full Bilingual (i18n)" }
    ],
    summary:
      "An education and scholarship platform connecting students, universities and education agents. Students can manage profiles and applications, while universities and agents manage applicants, staff, campaigns and questionnaires. Implemented workflows, bilingual interfaces, permissions, notifications and AI chat.",
    description:
      "Ellacy connects prospective international students with universities and certified educational agents. Students curate academic portfolios, apply for scholarships, and track application milestones. Universities and agencies leverage specialized CRM portals to manage applicant funnels, deploy marketing campaigns, assign advisors, and distribute questionnaires.",
    keyResponsibilities: [
      "Implemented student application workflows, candidate filtering pipelines, questionnaires, and campaign management.",
      "Engineered real-time notification and messaging system using Socket.IO for instant application status updates.",
      "Built full internationalization (i18n) and bilingual interfaces for global education accessibility.",
      "Integrated OpenAI and LangChain AI chat for automated student advisory and scholarship matching.",
      "Developed robust NestJS backend services and optimized PostgreSQL relational database schemas."
    ],
    keyAchievements: [
      "Seamlessly synchronized real-time application status and messaging across 3 user roles.",
      "Delivered full bilingual support (English/Vietnamese) with intuitive UI/UX using Ant Design.",
      "Streamlined scholarship evaluation lifecycle for academic institutions and scholarship donors."
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Ant Design", "i18n", "Responsive UI"],
      backend: ["NestJS", "Node.js", "Socket.IO", "REST APIs", "TypeORM"],
      database: ["PostgreSQL (Relational)", "TypeORM", "Redis"],
      ai_devops: ["OpenAI", "LangChain", "Docker", "Git/GitLab CI/CD"],
      all: ["React", "TypeScript", "Ant Design", "NestJS", "PostgreSQL", "TypeORM", "Socket.IO", "OpenAI", "LangChain", "Docker"]
    },
    highlights: [
      "Multi-Role Ecosystem: Students, Universities & Education Agents",
      "Real-Time Notifications & Messaging powered by Socket.IO",
      "Bilingual Multi-Language Support (i18n)",
      "AI-Powered Scholarship Matching & Advisory Chatbot"
    ]
  }
];

export const workExperience = [
  {
    company: "Innotech Vietnam",
    role: "Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    period: "2024 - 2026",
    type: "Full-time",
    summary: "Deliver enterprise products across HRM, CRM, education and import-export, contributing to frontend, backend, databases, deployment and production operations.",
    bullets: [
      "Deliver enterprise products across HRM, CRM, education and import-export, contributing to frontend, backend, databases, deployment and production operations.",
      "Build React/Next.js interfaces and NestJS/FastAPI services with REST APIs, PostgreSQL/MySQL, TypeORM/SQLAlchemy, JWT/SSO, RBAC, multi-tenancy, i18n and real-time communication.",
      "Leverage advanced AI tools to automate debugging, optimize code generation, and significantly accelerate the software development lifecycle and overall engineering productivity.",
      "Implement HRM workflows for employee records, attendance, leave/WFH, payroll, allowances, contracts, e-sign approvals, tasks and reminders across connected web and mobile systems.",
      "Maintain Docker-based environments and CI/CD workflows, manage configuration and database migrations, support releases, and troubleshoot deployment and production issues.",
      "Mentor interns through onboarding, task planning, technical guidance and code reviews; participate in intern interviews, evaluate technical fundamentals and provide hiring feedback."
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Redis",
      "Qdrant",
      "LangGraph",
      "CI/CD",
      "Nginx",
      "Linux"
    ]
  }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "code",
    color: "from-cyan-500 to-blue-500",
    accent: "#06b6d4",
    description: "Building responsive, accessible, high-performance web applications and design systems.",
    skills: [
      { name: "React", level: "Production", highlight: true },
      { name: "Next.js", level: "Production", highlight: true },
      { name: "TypeScript", level: "Production", highlight: true },
      { name: "JavaScript (ES6+)", level: "Production" },
      { name: "MUI (Material UI)", level: "Production" },
      { name: "Ant Design", level: "Production" },
      { name: "Tailwind CSS", level: "Production", highlight: true },
      { name: "Redux Toolkit", level: "Production" },
      { name: "Responsive UI & i18n", level: "Production" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Microservices",
    icon: "server",
    color: "from-blue-500 to-indigo-500",
    accent: "#6366f1",
    description: "Designing resilient RESTful APIs, real-time messaging engines, and multi-tenant security.",
    skills: [
      { name: "NestJS", level: "Production", highlight: true },
      { name: "Node.js & Express", level: "Production", highlight: true },
      { name: "FastAPI (Python)", level: "Production", highlight: true },
      { name: "REST APIs", level: "Production" },
      { name: "Socket.IO (Real-time)", level: "Production" },
      { name: "JWT / SSO Auth", level: "Production" },
      { name: "RBAC Access Control", level: "Production" },
      { name: "Multi-tenant Architecture", level: "Production" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "database",
    color: "from-emerald-500 to-teal-500",
    accent: "#10b981",
    description: "Architecting relational schemas, caching systems, and vector database indexing.",
    skills: [
      { name: "PostgreSQL", level: "Production", highlight: true },
      { name: "MySQL", level: "Production" },
      { name: "MongoDB", level: "Production" },
      { name: "Redis (Cache & Queues)", level: "Production", highlight: true },
      { name: "TypeORM", level: "Production", highlight: true },
      { name: "Qdrant (Vector DB)", level: "Production", highlight: true },
      { name: "Schema Design & Migrations", level: "Production" }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    icon: "docker",
    color: "from-amber-500 to-orange-500",
    accent: "#f59e0b",
    description: "Containerization, CI/CD pipelines, Linux system administration, and release operations.",
    skills: [
      { name: "Docker & Docker Compose", level: "Production", highlight: true },
      { name: "Linux Server Admin", level: "Production" },
      { name: "Git / GitLab CI/CD", level: "Production", highlight: true },
      { name: "Nginx Reverse Proxy", level: "Production" },
      { name: "Environment Config", level: "Production" },
      { name: "Deployment & Production Support", level: "Production" }
    ]
  },
  {
    id: "ai_engineering",
    title: "AI-Assisted & Multi-Agent SDLC",
    icon: "brain",
    color: "from-purple-500 to-pink-500",
    accent: "#a855f7",
    description: "Leveraging cutting-edge LLMs, multi-agent frameworks, and AI coding tools for 10x engineering velocity.",
    skills: [
      { name: "LangGraph Multi-Agent", level: "Production", highlight: true },
      { name: "LangChain & OpenAI API", level: "Production" },
      { name: "Vector Search & Embeddings", level: "Production", highlight: true },
      { name: "AI Code Generation & Debugging", level: "Expert" },
      { name: "AI Test Suite Generation", level: "Expert" },
      { name: "Kiro / Claude / Antigravity / Windsurf", level: "Expert" }
    ]
  }
];

export const educationInfo = {
  institution: "Ho Chi Minh City University of Transport (UTH)",
  faculty: "Faculty of Information Technology",
  degree: "Bachelor of Engineering in Information Technology",
  major: "Information Technology",
  location: "Ho Chi Minh City, Vietnam",
  highlights: [
    "Comprehensive foundation in Data Structures, Algorithms, Software Architecture, and Database Systems.",
    "Specialized in Modern Distributed Web Systems, Backend Microservices, and DevOps Engineering practices."
  ]
};

export const projects = productionProjects;