"use client";

import { useEffect } from "react";
import { Project } from "../data/project";
import {
  X,
  Layers,
  Server,
  Database,
  Cpu,
  Calendar,
  Zap,
  CheckCircle2
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#171715] border border-[#272724] shadow-2xl p-6 sm:p-8 text-left space-y-6 z-10 animate-scaleUp">
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
              Role: <span className="text-[#eeeeec] font-semibold">{project.role}</span>
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
            System Overview & Architecture
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
            Measurable Achievements & Production Impact
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

        {/* Categorized Tech Stack */}
        <div className="space-y-3 pt-2">
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

        {/* Footer */}
        <div className="pt-4 border-t border-[#232320] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#1c1c1a] hover:bg-[#252522] text-[#eeeeec] font-mono text-xs font-medium transition-all"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
