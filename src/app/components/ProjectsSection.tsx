"use client";

import { useState } from "react";
import { productionProjects, Project } from "../data/project";
import { ProjectModal } from "./ProjectModal";
import { Layers, ArrowUpRight, Calendar, CheckCircle2, Eye } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Systems", count: 4 },
    { id: "ai", label: "AI & Vector Search", count: 1 },
    { id: "hrm", label: "Enterprise HRM & CRM", count: 1 },
    { id: "agentic", label: "Multi-Agent & SDLC", count: 1 },
    { id: "edtech", label: "EdTech & Real-Time", count: 1 },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? productionProjects
      : productionProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#111110] border-t border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1a] border border-[#2e2e2a] text-xs font-mono text-[#c8a44e]">
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#eeeeec]">
              Selected Enterprise Projects
            </h2>
            <p className="text-[#8a8a85] text-sm sm:text-base max-w-2xl leading-relaxed">
              Real-world systems engineered and deployed to production, spanning multi-tenant HRM, AI-driven logistics, autonomous agent orchestration, and global higher education.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#171715] p-1.5 rounded-xl border border-[#272724]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#c8a44e] text-[#111110] font-bold shadow-sm"
                    : "text-[#7a7a75] hover:text-[#eeeeec] hover:bg-[#20201d]"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl p-6 sm:p-7 bg-[#171715] border border-[#272724] hover:border-[#383833] flex flex-col justify-between text-left transition-all group shadow-md"
            >
              {/* Card Header & Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#c8a44e]/10 text-[#c8a44e] border border-[#c8a44e]/20">
                    {project.featuredBadge || project.domain}
                  </span>
                  <span className="text-xs font-mono text-[#7a7a75] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#eeeeec] group-hover:text-[#c8a44e] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7a7a75] mt-1">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span className="text-[#a0a09b] font-medium">{project.role}</span>
                  </div>
                </div>

                {/* Purpose Callout */}
                <div className="p-3 rounded-lg bg-[#121211] border border-[#20201d] space-y-1">
                  <div className="text-[10px] font-mono text-[#c8a44e] font-semibold uppercase tracking-wider">
                    Purpose & Objective:
                  </div>
                  <p className="text-[#a0a09b] text-xs leading-relaxed line-clamp-2">
                    {project.purpose}
                  </p>
                </div>

                {/* Metrics Preview */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 pt-1 pb-1">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-lg bg-[#121211] border border-[#20201d]"
                      >
                        <div className="text-[10px] font-mono text-[#7a7a75] truncate">
                          {m.label}
                        </div>
                        <div className="text-xs font-bold font-mono text-[#c8a44e] truncate mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Workflow Summary Pills */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-mono text-[#7a7a75] flex items-center justify-between">
                    <span>End-to-End Workflow Stages:</span>
                    <span className="text-[#c8a44e]">{project.workflow.length} Steps</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {project.workflow.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="px-2 py-1 rounded bg-[#121211] border border-[#20201d] text-[11px] font-mono text-[#8a8a85] truncate flex items-center gap-1.5"
                        title={step.title}
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#c8a44e]/20 text-[#c8a44e] text-[10px] flex items-center justify-center font-bold shrink-0">
                          {step.stepNumber}
                        </span>
                        <span className="truncate">{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#232320] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.all.slice(0, 6).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#121211] text-[#8a8a85] border border-[#20201d]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.all.length > 6 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#121211] text-[#c8a44e] border border-[#c8a44e]/20">
                      +{project.technologies.all.length - 6} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full py-2.5 rounded-lg bg-[#1c1c1a] hover:bg-[#c8a44e] hover:text-[#111110] text-[#eeeeec] border border-[#2e2e2a] hover:border-[#c8a44e] font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Architecture & Workflow</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
