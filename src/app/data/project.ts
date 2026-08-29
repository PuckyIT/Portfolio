export interface ProjectWorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  shortName: string;
  domain: string;
  category: "all" | "ai" | "hrm" | "agentic" | "edtech";
  role: string;
  company: string;
  period: string;
  purpose: string;
  workflow: ProjectWorkflowStep[];
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
  role: "Software Engineer",
  specialization: "Full-Stack Architecture & AI-Integrated Systems",
  tagline: "Software Engineer with 2+ years of experience designing, building, and deploying scalable web applications and AI-integrated systems across HRM, CRM, education, and import-export domains.",
  experienceYears: "2+",
  location: "Ho Chi Minh City, Vietnam",
  phone: "0968 295 944",
  phoneClean: "0968295944",
  email: "phat30102002@gmail.com",
  github: "https://github.com/PuckyIT",
  githubUsername: "PuckyIT",
  githubSecondary: "https://github.com/Lenal-P",
  githubSecondaryUsername: "Lenal-P",
  githubProfiles: [
    {
      username: "PuckyIT",
      name: "Thanh Phat",
      url: "https://github.com/PuckyIT",
      tag: "Main / PuckyIT"
    },
    {
      username: "Lenal-P",
      name: "Lenal",
      url: "https://github.com/Lenal-P",
      tag: "Active / Lenal-P"
    }
  ],
  cvUrl: "/Resume_Le_Thanh_Phat.pdf",
  status: "Available for High-Impact Roles",
  summary:
    "Results-driven Software Engineer with 2+ years of experience in designing, building, and deploying scalable web applications and AI-integrated systems. Strong foundation in full-stack architecture (React, Next.js, NestJS, FastAPI), relational and vector databases (PostgreSQL, Qdrant, Redis), and cloud/DevOps practices (Docker, CI/CD). Experienced in leveraging cutting-edge AI development workflows and Agentic frameworks to accelerate delivery while ensuring code quality, system reliability, and high performance.",
  stats: [
    { value: "2+", label: "Years of Experience", subtext: "Full-Stack & AI Systems" },
    { value: "4", label: "Selected Enterprise Platforms", subtext: "Logistics AI, HRM, Multi-Agent, EdTech" },
    { value: "Full-Stack", label: "End-to-End Delivery", subtext: "React/Next.js -> NestJS/FastAPI -> Docker" },
    { value: "AI-Augmented", label: "Engineering Velocity", subtext: "Kiro, Claude, Antigravity, Windsurf" }
  ]
};

export const productionProjects: Project[] = [
  {
    id: "gexim-ai",
    name: "GEXIM – Import-Export AI Platform",
    shortName: "GEXIM Logistics AI",
    domain: "Digital Logistics & Customs Automation",
    category: "ai",
    role: "Software Engineer",
    company: "Innotech Vietnam",
    period: "2026",
    featuredBadge: "AI Logistics Platform",
    iconType: "logistics",
    purpose:
      "A digital logistics and import-export platform designed to build scalable, innovative solutions that shape the future of logistics by automating customs procedures.",
    metrics: [
      { label: "Document Processing", value: "Automated AI Parsing" },
      { label: "HS Code & Tax Search", value: "Semantic Sub-second" },
      { label: "Infrastructure", value: "Docker & Microservices" }
    ],
    summary:
      "A digital logistics and import-export platform designed to build scalable, innovative solutions that shape the future of logistics by automating customs procedures, shipment tracking, HS code search, and C/O certificate validation.",
    description:
      "GEXIM is a digital logistics and import-export platform designed to streamline cross-border trade operations and eliminate manual paperwork. The platform automates customs procedures, provides real-time shipment monitoring, semantic HS code & tariff lookup, C/O compliance checks, and AI-assisted document extraction.",
    workflow: [
      {
        stepNumber: 1,
        title: "Document Ingestion & Upload",
        description: "Importers/exporters upload shipping dossiers, invoices, packing lists, and Certificate of Origin (C/O) files to the platform."
      },
      {
        stepNumber: 2,
        title: "AI Extraction & Validation",
        description: "AI-assisted parsing pipelines extract critical customs data points and validate declarations against regulatory trade compliance rules."
      },
      {
        stepNumber: 3,
        title: "Semantic HS Code & Tariff Lookup",
        description: "Vector search powered by Qdrant and Redis indexes thousands of tariff schedules, allowing rapid sub-second semantic code matching."
      },
      {
        stepNumber: 4,
        title: "Customs Clearance & Shipment Tracking",
        description: "Automated customs dossiers are compiled, tracked in real-time across transit milestones, and updated for stakeholders."
      }
    ],
    keyResponsibilities: [
      "Developed scalable applications and tools that support customs procedures and operational processes, helping to transform the logistics industry.",
      "Worked closely with cross-functional teams on product logic to translate business requirements into technical solutions, including responsive sidebar navigation and precise GEXIM branding asset alignments.",
      "Used AI-assisted and agentic coding tools (Kiro, Claude) to explore solutions, accelerate development, and troubleshoot issues.",
      "Designed and optimized relational PostgreSQL schemas and Qdrant NoSQL vector storage for fast querying.",
      "Configured containerized application environments with Docker and Redis for caching."
    ],
    keyAchievements: [
      "Automated manual customs declaration workflows, reducing document preparation and verification cycle times.",
      "Built high-performance semantic search for tariff regulations and HS code lookups using Qdrant vector retrieval.",
      "Delivered responsive, brand-aligned UI and reliable backend services under tight product milestones."
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "MUI", "Responsive UI"],
      backend: ["FastAPI", "Python", "REST APIs"],
      database: ["PostgreSQL (Relational)", "Qdrant (NoSQL / Vector)", "Redis"],
      ai_devops: ["Docker", "Kiro", "Claude", "CI/CD"],
      all: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "Docker"]
    },
    highlights: [
      "Automated Customs Procedures & Clearance Support",
      "Semantic HS Code & Tariff Legal Search (Qdrant NoSQL)",
      "Real-time Cargo & Shipment Operational Workflow",
      "AI-Assisted Acceleration with Kiro and Claude"
    ]
  },
  {
    id: "kingwork-hrm",
    name: "KingWork HRM Platform",
    shortName: "KingWork HRM Platform",
    domain: "Enterprise HRM & Sales Operations",
    category: "hrm",
    role: "Software Engineer",
    company: "Innotech Vietnam",
    period: "2024 - Present",
    featuredBadge: "Enterprise Core Platform",
    iconType: "hrm",
    purpose:
      "A scalable software application supporting HR and sales operational processes across the enterprise.",
    metrics: [
      { label: "Core Workflows", value: "HRM, Attendance, Payroll" },
      { label: "Architecture", value: "NestJS + TypeORM" },
      { label: "Deployment", value: "Docker CI/CD" }
    ],
    summary:
      "A scalable enterprise software application supporting HR and sales operational processes, including attendance, leave/WFH, payroll, allowances, digital contracts, and task workflows.",
    description:
      "KingWork is an enterprise operations platform that unifies human resource management and sales operations. It enables organizations to streamline employee lifecycle management, attendance tracking, automated payroll calculations, digital contracts, e-sign approvals, and sales deal tracking.",
    workflow: [
      {
        stepNumber: 1,
        title: "Employee Profile & Shift Management",
        description: "Centralized employee directory, department structures, work shifts, and automated attendance clock-in/out logging."
      },
      {
        stepNumber: 2,
        title: "Leave, WFH & Contract Approval",
        description: "Employees submit leave/WFH requests and contract revisions, passing through multi-level approval workflows."
      },
      {
        stepNumber: 3,
        title: "Automated Payroll Engine",
        description: "Processes attendance logs, tax deductions, bonuses, and allowances to calculate monthly payroll accurately."
      },
      {
        stepNumber: 4,
        title: "Sales Pipeline & Operational Management",
        description: "Connects HR capacity with sales activities, quotations, client leads, and deal tracking in one unified interface."
      }
    ],
    keyResponsibilities: [
      "Developed and maintained software applications for HRM, translating business requirements into high-quality operational systems.",
      "Utilized Claude and Windsurf to generate tests, troubleshoot issues, and improve engineering productivity.",
      "Contributed to the continuous improvement of the technology stack and infrastructure using Docker and relational databases.",
      "Designed and optimized PostgreSQL relational database schemas using TypeORM for robust data integrity.",
      "Collaborated on frontend UI in React and Next.js with TypeScript and backend APIs in NestJS."
    ],
    keyAchievements: [
      "Maintained scalable HRM workflows for multi-department organizations with zero data inconsistency.",
      "Boosted engineering test coverage and delivery speed through Claude and Windsurf AI tools.",
      "Standardized deployment environments and continuous integration pipelines using Docker."
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI / Ant Design"],
      backend: ["NestJS", "Node.js", "REST APIs", "TypeORM"],
      database: ["PostgreSQL (Relational)", "TypeORM", "Redis"],
      ai_devops: ["Docker", "Claude", "Windsurf", "CI/CD"],
      all: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Docker"]
    },
    highlights: [
      "Comprehensive HRM Suite: Attendance, Leave/WFH & Payroll Calculations",
      "Digital Labor Contracts & Operational Workflow Management",
      "Claude & Windsurf AI-Assisted Test & Code Generation",
      "TypeORM Relational Schema Design & PostgreSQL Optimization"
    ]
  },
  {
    id: "spec2s-platform",
    name: "Spec2s Multi-Agent Software Engineering Platform",
    shortName: "Spec2s Multi-Agent Platform",
    domain: "AI-Assisted Engineering & System Generation",
    category: "agentic",
    role: "Software Engineer",
    company: "Innotech Vietnam",
    period: "2026",
    featuredBadge: "Multi-Agent & LLMs",
    iconType: "agentic",
    purpose:
      "An AI-assisted engineering platform using large language models as part of the software development lifecycle to generate system architecture and starter code.",
    metrics: [
      { label: "SDLC Acceleration", value: "Requirements to Architecture" },
      { label: "Multi-Agent Graph", value: "LangGraph + LLMs" },
      { label: "Frontend", value: "Module Federation" }
    ],
    summary:
      "An AI-assisted engineering platform using LLMs as part of the software development lifecycle to generate system architecture, SRS specifications, database schemas, and starter code repositories.",
    description:
      "Spec2s revolutionizes the software development lifecycle by orchestrating autonomous AI agents. Given raw business requirements, the platform coordinates specialized agents via LangGraph to generate SRS documents, system architectures, database designs, and clean starter code.",
    workflow: [
      {
        stepNumber: 1,
        title: "Requirement Ingestion & Prompting",
        description: "Users submit raw project requirements, which are structured and validated through prompt engineering pipelines."
      },
      {
        stepNumber: 2,
        title: "Multi-Agent Graph Orchestration",
        description: "LangGraph coordinates specialized LLM agents (SRS Agent, Architect Agent, DB Agent) to collaborate iteratively."
      },
      {
        stepNumber: 3,
        title: "Architecture & Schema Synthesis",
        description: "Agents synthesize system architectural blueprints, API contracts, and relational/NoSQL schemas verified with vector memory."
      },
      {
        stepNumber: 4,
        title: "Starter Code Generation & Gateway Billing",
        description: "Produces starter code repositories and handles multi-department access control and corporate payment gateway billing."
      }
    ],
    keyResponsibilities: [
      "Wrote clear requirements, technical instructions, and prompts that enable AI coding agents to produce reliable outputs for system architectures.",
      "Multi-tasked with different departments to integrate corporate payment gateways under tight deadlines.",
      "Architected micro-frontend modules using Webpack Module Federation for modular UI scalability.",
      "Engineered backend microservices using NestJS, FastAPI, LangGraph, Redis, and Qdrant vector retrieval.",
      "Maintained containerized deployment and automated workflows using Docker."
    ],
    keyAchievements: [
      "Engineered reliable prompt pipelines and agent tool definitions ensuring consistent system architecture outputs.",
      "Successfully integrated corporate payment gateways under stringent deadlines.",
      "Implemented modular Micro-Frontend architecture with Webpack Module Federation."
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Webpack Module Federation", "Tailwind CSS"],
      backend: ["NestJS", "FastAPI", "LangGraph", "Node.js", "REST APIs"],
      database: ["Redis", "Qdrant (Vector DB)", "PostgreSQL"],
      ai_devops: ["Docker", "LangGraph", "LLM Prompting", "CI/CD"],
      all: ["React", "TypeScript", "Webpack Module Federation", "NestJS", "FastAPI", "LangGraph", "Redis", "Qdrant", "Docker"]
    },
    highlights: [
      "Automated SRS & Architecture Generation from Business Requirements",
      "Multi-Agent Workflow Orchestration via LangGraph & LLMs",
      "Micro-Frontend Architecture using Webpack Module Federation",
      "Corporate Payment Gateway Integration under Tight Deadlines"
    ]
  },
  {
    id: "ellacy-education",
    name: "Ellacy Education and Scholarship Platform",
    shortName: "Ellacy Education Platform",
    domain: "Global Higher Education & Scholarships",
    category: "edtech",
    role: "Software Engineer",
    company: "Innotech Vietnam",
    period: "2025",
    featuredBadge: "EdTech & Real-Time",
    iconType: "education",
    purpose:
      "An operational system connecting students, universities, and education agents for international education and scholarship opportunities.",
    metrics: [
      { label: "User Roles", value: "Students, Universities, Agents" },
      { label: "Real-time", value: "Socket.IO Messaging" },
      { label: "AI Integration", value: "OpenAI Assistance" }
    ],
    summary:
      "An operational system connecting students, universities, and education agents to manage student profiles, scholarship applications, campaign workflows, questionnaires, and real-time communications.",
    description:
      "Ellacy connects prospective students with global universities and certified educational agents. The platform streamlines scholarship discovery, candidate portfolio evaluation, application tracking, institutional marketing campaigns, and real-time candidate advisory.",
    workflow: [
      {
        stepNumber: 1,
        title: "Student Profile & Application Submission",
        description: "Students build digital academic portfolios, discover scholarships, and submit direct applications."
      },
      {
        stepNumber: 2,
        title: "Agent Advisory & Institutional Evaluation",
        description: "Education agents and universities review candidate profiles, evaluate transcripts, and dispatch questionnaires."
      },
      {
        stepNumber: 3,
        title: "Real-time Notifications & Live Messaging",
        description: "Socket.IO delivers instant status updates, live notifications, and multi-party messaging across all user roles."
      },
      {
        stepNumber: 4,
        title: "AI-Assisted Guidance & Decision Support",
        description: "OpenAI-integrated chatbots provide instant academic guidance, requirement matching, and application support."
      }
    ],
    keyResponsibilities: [
      "Collaborated with Data and Business teams to translate product logic into efficient backend services and relational database schemas.",
      "Used AI-assisted tools to accelerate delivery and improve software quality.",
      "Review, validate, and refine AI-generated code to ensure correctness, security, maintainability, and alignment with engineering standards.",
      "Engineered real-time notifications and communication channels using Socket.IO.",
      "Built full-stack features with React, TypeScript, NestJS, PostgreSQL, and OpenAI integrations."
    ],
    keyAchievements: [
      "Translated complex multi-party product logic into clean, high-performing backend services.",
      "Ensured rigorous AI code review standards, validating correctness and security of generated code.",
      "Delivered real-time synchronization and communication across students, agents, and institutions."
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Ant Design", "Responsive UI"],
      backend: ["NestJS", "Node.js", "Socket.IO", "REST APIs"],
      database: ["PostgreSQL (Relational)", "Redis"],
      ai_devops: ["OpenAI", "Docker", "Git/GitLab CI/CD"],
      all: ["React", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO", "OpenAI", "Docker"]
    },
    highlights: [
      "Multi-Role Network: Connecting Students, Universities & Education Agents",
      "Real-Time Messaging & Status Updates via Socket.IO",
      "Rigorous AI-Generated Code Review & Validation Standards",
      "OpenAI Advisory Integration for Scholarship Matching"
    ]
  }
];

export const workExperience = [
  {
    company: "Innotech Vietnam",
    role: "Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    period: "2024 - Present",
    type: "Full-time",
    summary:
      "Develop and maintain scalable software applications and tools across HRM, CRM, education, and import-export domains to support operational processes and drive growth.",
    bullets: [
      "Develop and maintain scalable software applications and tools across HRM, CRM, education, and import-export domains to support operational processes and drive growth.",
      "Use AI-assisted and agentic coding tools (Kiro, Claude, Antigravity, Windsurf) to accelerate development, explore solutions, generate tests, and troubleshoot issues.",
      "Work with Product, Data, and Business teams on product logic to translate business requirements into high-quality technical solutions.",
      "Design and optimize relational databases (PostgreSQL, MySQL) and NoSQL solutions for optimal application performance.",
      "Contribute to the continuous improvement of the technology stack and infrastructure, staying up-to-date with cutting-edge tools."
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "NestJS",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "Qdrant",
      "MongoDB",
      "Redis",
      "TypeORM",
      "Docker",
      "Git/GitLab",
      "CI/CD",
      "Nginx",
      "Linux",
      "Kiro",
      "Claude",
      "Antigravity",
      "Windsurf"
    ]
  }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "code",
    color: "from-cyan-500 to-blue-500",
    accent: "#06b6d4",
    description: "Building responsive, modern, and high-performance user interfaces.",
    skills: [
      { name: "React", level: "Production", highlight: true },
      { name: "Next.js", level: "Production", highlight: true },
      { name: "TypeScript", level: "Production", highlight: true },
      { name: "JavaScript", level: "Production", highlight: true },
      { name: "MUI (Material UI)", level: "Production" },
      { name: "Ant Design", level: "Production" },
      { name: "Tailwind CSS", level: "Production", highlight: true },
      { name: "Responsive UI", level: "Production", highlight: true }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "server",
    color: "from-blue-500 to-indigo-500",
    accent: "#6366f1",
    description: "Designing robust server architectures, RESTful APIs, and real-time services.",
    skills: [
      { name: "NestJS", level: "Production", highlight: true },
      { name: "Node.js", level: "Production", highlight: true },
      { name: "FastAPI", level: "Production", highlight: true },
      { name: "REST APIs", level: "Production", highlight: true },
      { name: "Socket.IO", level: "Production" },
      { name: "JWT / SSO", level: "Production" },
      { name: "Multi-tenant Architecture", level: "Production" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    color: "from-emerald-500 to-teal-500",
    accent: "#10b981",
    description: "Relational schema design, ORMs, vector storage, and NoSQL solutions.",
    skills: [
      { name: "PostgreSQL (Relational)", level: "Production", highlight: true },
      { name: "MySQL (Relational)", level: "Production" },
      { name: "MongoDB (NoSQL)", level: "Production" },
      { name: "Redis (NoSQL / Cache)", level: "Production", highlight: true },
      { name: "Qdrant (Vector / NoSQL)", level: "Production", highlight: true },
      { name: "TypeORM", level: "Production", highlight: true }
    ]
  },
  {
    id: "ai_tools",
    title: "AI Tools & Workflows",
    icon: "brain",
    color: "from-purple-500 to-pink-500",
    accent: "#a855f7",
    description: "Leveraging cutting-edge agentic workflows, prompt engineering, and validation.",
    skills: [
      { name: "Kiro", level: "Production", highlight: true },
      { name: "Claude", level: "Production", highlight: true },
      { name: "Antigravity", level: "Production", highlight: true },
      { name: "Windsurf", level: "Production", highlight: true },
      { name: "Prompt Engineering", level: "Production", highlight: true },
      { name: "AI Code Review & Validation", level: "Production", highlight: true },
      { name: "LangGraph", level: "Production" },
      { name: "OpenAI API", level: "Production" }
    ]
  },
  {
    id: "devops_cloud",
    title: "DevOps & Cloud",
    icon: "docker",
    color: "from-amber-500 to-orange-500",
    accent: "#f59e0b",
    description: "Containerization, Linux system administration, and CI/CD pipelines.",
    skills: [
      { name: "Docker", level: "Production", highlight: true },
      { name: "Linux", level: "Production", highlight: true },
      { name: "Git / GitLab", level: "Production", highlight: true },
      { name: "CI/CD", level: "Production", highlight: true },
      { name: "Nginx", level: "Production" },
      { name: "Deployment Support", level: "Production" },
      { name: "AWS Familiarity", level: "Familiarity" },
      { name: "GCP Familiarity", level: "Familiarity" }
    ]
  }
];

export const educationInfo = {
  institution: "Ho Chi Minh City University of Transport",
  faculty: "Faculty of Information Technology",
  degree: "Bachelor of Science in Information Technology",
  period: "2020 – 2024",
  major: "Information Technology",
  location: "Ho Chi Minh City, Vietnam",
  highlights: [
    "Comprehensive foundation in Information Technology, Software Engineering, Algorithms, and System Architecture.",
    "Graduated with Bachelor of Science in Information Technology (2020 – 2024)."
  ]
};

export const projects = productionProjects;