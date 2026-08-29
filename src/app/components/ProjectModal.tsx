"use client";

import { useEffect, useState } from "react";
import { Project } from "../data/project";
import {
  X,
  Layers,
  Server,
  Database,
  Cpu,
  Calendar,
  Zap,
  CheckCircle2,
  GitBranch,
  Target,
  ArrowRight
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "workflow" | "tech">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setActiveTab("overview");
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl bg-[#171715] border border-[#272724] shadow-2xl p-5 sm:p-8 text-left space-y-6 z-10 animate-scaleUp">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#232320]">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#c8a44e]/10 text-[#c8a44e] border border-[#c8a44e]/30">
                {project.featuredBadge || project.domain}
              </span>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#121211] text-[#8a8a85] border border-[#20201d]">
                {project.company}
              </span>
              <span className="text-xs font-mono text-[#7a7a75] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.period}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#eeeeec] tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-[#8a8a85]">
              Role: <span className="text-[#eeeeec] font-semibold">{project.role}</span> · Domain: <span className="text-[#c8a44e] font-medium">{project.domain}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#121211] border border-[#20201d] text-[#8a8a85] hover:text-[#eeeeec] hover:border-[#383833] transition-all focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#232320] pb-3">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === "overview"
                ? "bg-[#c8a44e] text-[#111110] font-bold"
                : "text-[#8a8a85] hover:text-[#eeeeec] hover:bg-[#1f1f1c]"
            }`}
          >
            Overview & Purpose
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTab === "workflow"
                ? "bg-[#c8a44e] text-[#111110] font-bold"
                : "text-[#8a8a85] hover:text-[#eeeeec] hover:bg-[#1f1f1c]"
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            System Workflow ({project.workflow ? project.workflow.length : 0})
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === "tech"
                ? "bg-[#c8a44e] text-[#111110] font-bold"
                : "text-[#8a8a85] hover:text-[#eeeeec] hover:bg-[#1f1f1c]"
            }`}
          >
            Tech Stack & Specs
          </button>
        </div>

        {/* TAB 1: OVERVIEW & PURPOSE */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Purpose Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#121211] border border-[#c8a44e]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#c8a44e]">
                <Target className="w-4 h-4" />
                <span>PROJECT PURPOSE & OBJECTIVE</span>
              </div>
              <p className="text-sm sm:text-base text-[#eeeeec] font-medium leading-relaxed">
                {project.purpose}
              </p>
            </div>

            {/* Metrics Row */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d]"
                  >
                    <div className="text-xs font-mono text-[#7a7a75]">{m.label}</div>
                    <div className="text-sm sm:text-base font-bold font-mono text-[#c8a44e] mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7a7a75] font-semibold">
                Architecture & System Description
              </h4>
              <p className="text-[#a0a09b] text-sm sm:text-base leading-relaxed bg-[#121211] p-4 rounded-lg border border-[#20201d]">
                {project.description}
              </p>
            </div>

            {/* Engineering Responsibilities */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7a7a75] font-semibold">
                Key Engineering Responsibilities
              </h4>
              <div className="space-y-2.5">
                {project.keyResponsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#121211] border border-[#20201d] flex items-start gap-3"
                  >
                    <div className="mt-0.5 p-1 rounded bg-[#c8a44e]/10 text-[#c8a44e] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a09b] leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Achievements */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7a7a75] font-semibold">
                Achievements & Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyAchievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d] flex items-start gap-2.5"
                  >
                    <Zap className="w-4 h-4 text-[#c8a44e] mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#a0a09b] leading-relaxed">
                      {ach}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEM WORKFLOW */}
        {activeTab === "workflow" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 rounded-lg bg-[#121211] border border-[#20201d] flex items-start gap-3">
              <GitBranch className="w-5 h-5 text-[#c8a44e] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#eeeeec] font-mono">
                  End-to-End Operational & Data Workflow
                </h4>
                <p className="text-xs text-[#8a8a85] mt-1">
                  How users, background services, APIs, and databases interact step-by-step in {project.shortName}.
                </p>
              </div>
            </div>

            <div className="relative space-y-4 before:absolute before:inset-0 before:left-4 sm:before:left-5 before:w-0.5 before:bg-[#272724] before:z-0">
              {project.workflow.map((step) => (
                <div
                  key={step.stepNumber}
                  className="relative z-10 flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-[#121211] border border-[#22221f] hover:border-[#383833] transition-all ml-1 sm:ml-2"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8a44e] text-[#111110] font-mono font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {step.stepNumber}
                  </div>
                  <div className="space-y-1 text-left min-w-0">
                    <h5 className="text-sm sm:text-base font-bold text-[#eeeeec] flex items-center gap-2">
                      <span>{step.title}</span>
                    </h5>
                    <p className="text-xs sm:text-sm text-[#a0a09b] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Flow Summary */}
            <div className="p-4 rounded-xl bg-[#151513] border border-[#242421] text-xs font-mono text-[#8a8a85] flex flex-wrap items-center gap-2">
              <span className="text-[#c8a44e] font-semibold">Flow Path:</span>
              {project.workflow.map((step, idx) => (
                <span key={idx} className="inline-flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#1c1c1a] text-[#eeeeec] border border-[#2a2a26]">
                    {step.title}
                  </span>
                  {idx < project.workflow.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#5c5c58]" />
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TECH STACK */}
        {activeTab === "tech" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Categorized Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7a7a75] font-semibold">
                Architectural Tech Stack
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.technologies.frontend && (
                  <div className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#c8a44e] font-semibold">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.frontend.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1a1a18] text-[#a0a09b] border border-[#262624]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.backend && (
                  <div className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#c8a44e] font-semibold">
                      <Server className="w-3.5 h-3.5" />
                      <span>Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.backend.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1a1a18] text-[#a0a09b] border border-[#262624]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.database && (
                  <div className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#c8a44e] font-semibold">
                      <Database className="w-3.5 h-3.5" />
                      <span>Database</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.database.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1a1a18] text-[#a0a09b] border border-[#262624]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.ai_devops && (
                  <div className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#c8a44e] font-semibold">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>AI & DevOps</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.ai_devops.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1a1a18] text-[#a0a09b] border border-[#262624]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7a7a75] font-semibold">
                Architecture Highlights & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#121211] border border-[#20201d] flex items-center gap-2.5 text-xs text-[#eeeeec] font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c8a44e] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-[#232320] flex items-center justify-between">
          <span className="text-xs font-mono text-[#7a7a75] hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[#121211] border border-[#262624] text-[#a0a09b]">ESC</kbd> to close
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#1c1c1a] hover:bg-[#252522] text-[#eeeeec] font-mono text-xs font-medium transition-all ml-auto"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

