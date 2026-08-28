"use client";

import { useState } from "react";
import { personalInfo } from "../data/project";
import {
  ArrowRight,
  Download,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Github,
  Layers,
  Server,
  Database,
  Cpu
} from "lucide-react";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-warm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start animate-fade-up">
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1a] border border-[#2e2e2a] text-xs font-mono text-[#a0a09b]">
              <span className="w-2 h-2 rounded-full bg-[#c8a44e]" />
              <span>Full-Stack & DevOps Engineer</span>
              <span className="text-[#5c5c58]">|</span>
              <span className="text-[#7a7a75]">Ho Chi Minh City, Vietnam</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#eeeeec] leading-[1.08]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl text-[#c8a44e] font-semibold tracking-tight">
                {personalInfo.role}
              </p>
              <p className="text-sm sm:text-base text-[#8a8a85]">
                Specializing in {personalInfo.specialization} · Formerly at Innotech Vietnam
              </p>
            </div>

            {/* Overview Bio */}
            <p className="text-[#a0a09b] text-[15px] sm:text-base leading-relaxed max-w-2xl">
              Software Engineer with 2+ years of hands-on experience architecting, deploying, and maintaining high-throughput web applications for enterprise HRM, CRM, education, and international trade operations. Proven track record across modern React/Next.js interfaces, robust NestJS/FastAPI microservices, vector databases, and containerized CI/CD environments.
            </p>

            {/* Core Competencies Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: "Next.js & React", icon: Layers },
                { label: "NestJS & FastAPI", icon: Server },
                { label: "PostgreSQL, Redis & Qdrant", icon: Database },
                { label: "Docker & CI/CD Pipelines", icon: Cpu }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[#181816] text-[#a0a09b] border border-[#272724]"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#c8a44e]" />
                    {item.label}
                  </span>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate("projects")}
                className="px-5 py-2.5 rounded-lg bg-[#c8a44e] hover:bg-[#d4b35c] text-[#111110] font-semibold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={personalInfo.cvUrl}
                download="CV_Le_Thanh_Phat.pdf"
                className="px-5 py-2.5 rounded-lg text-[#eeeeec] bg-[#1a1a18] border border-[#2e2e2a] hover:border-[#444440] text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#c8a44e]" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Direct Contact Micro-Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#7a7a75] pt-2">
              <button
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                className="flex items-center gap-1.5 hover:text-[#eeeeec] transition-colors"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#c8a44e]" />
                <span className="font-mono text-xs text-[#a0a09b]">{personalInfo.email}</span>
                {copiedKey === "email" ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-40" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                className="flex items-center gap-1.5 hover:text-[#eeeeec] transition-colors"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#c8a44e]" />
                <span className="font-mono text-xs text-[#a0a09b]">{personalInfo.phone}</span>
                {copiedKey === "phone" ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-40" />
                )}
              </button>

              <span className="flex items-center gap-1.5 text-xs text-[#7a7a75]">
                <MapPin className="w-3.5 h-3.5 text-[#c8a44e]" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Overview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#171715] border border-[#272724] p-5 sm:p-6 space-y-5 shadow-lg text-left">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#232320]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8a8a85]">
                  Engineering Profile Spec
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#c8a44e]/10 text-[#c8a44e] border border-[#c8a44e]/20">
                  Open to Opportunities
                </span>
              </div>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d]"
                  >
                    <div className="text-xl font-bold font-mono text-[#c8a44e]">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-[#eeeeec] mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#6b6b66] mt-1 leading-tight">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Production Systems Snippet */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#7a7a75] flex items-center justify-between">
                  <span>Selected Production Systems</span>
                  <span className="text-[#c8a44e]">4 Platforms</span>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  {[
                    { name: "KingWork HRM", tech: "NestJS · TypeORM · Docker", tag: "HRM & Operations" },
                    { name: "GEXIM AI Logistics", tech: "FastAPI · Qdrant · Redis", tag: "AI Logistics" },
                    { name: "Spec2s Multi-Agent", tech: "LangGraph · Microfrontends", tag: "Agentic AI" },
                    { name: "Ellacy EdTech Network", tech: "Socket.IO · OpenAI · i18n", tag: "Global EdTech" },
                  ].map((p, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-2.5 rounded-lg bg-[#121211] border border-[#20201d] flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8a44e]" />
                        <span className="text-[#eeeeec] font-medium">{p.name}</span>
                      </div>
                      <span className="text-[11px] text-[#7a7a75] hidden sm:inline truncate">
                        {p.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#121211] border border-[#20201d] hover:border-[#333330] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#8a8a85] group-hover:text-[#c8a44e] transition-colors" />
                  <span className="text-xs font-mono text-[#a0a09b] group-hover:text-[#eeeeec] transition-colors">
                    github.com/Lenal-P
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#5c5c58] group-hover:text-[#c8a44e] group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
