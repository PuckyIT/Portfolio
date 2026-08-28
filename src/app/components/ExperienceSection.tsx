"use client";

import { workExperience } from "../data/project";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#0e0e0d] border-t border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1a] border border-[#2e2e2a] text-xs font-mono text-[#c8a44e]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#eeeeec]">
            Professional Experience
          </h2>
          <p className="text-[#8a8a85] text-sm sm:text-base max-w-3xl leading-relaxed">
            Delivering high-reliability software solutions across enterprise HRM, CRM, education, and logistics platforms — from architecture through continuous deployment and production support.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {workExperience.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 sm:p-8 bg-[#171715] border border-[#272724] hover:border-[#383833] transition-all text-left shadow-lg"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#232320]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#eeeeec]">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#c8a44e]/10 text-[#c8a44e] border border-[#c8a44e]/30">
                      {exp.company}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1c1c1a] text-[#8a8a85] border border-[#292926]">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7a7a75] pt-1">
                    <span className="flex items-center gap-1.5 text-[#c8a44e]">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#5c5c58]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-[#141413] border border-[#252522] text-[#a0a09b] text-xs font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#c8a44e]" />
                    Enterprise Production Track Record
                  </span>
                </div>
              </div>

              {/* Engineering Contributions */}
              <div className="py-6 space-y-3.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7a7a75] font-semibold">
                  Core Engineering Responsibilities & Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-4 rounded-lg bg-[#121211] border border-[#20201d] flex items-start gap-3 hover:border-[#2e2e2a] transition-all"
                    >
                      <div className="mt-0.5 p-1 rounded bg-[#c8a44e]/10 text-[#c8a44e] shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-[#a0a09b] leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-6 border-t border-[#232320] space-y-2.5">
                <span className="text-xs font-mono text-[#7a7a75]">
                  TECHNOLOGIES & TOOLS APPLIED:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#121211] text-[#a0a09b] border border-[#242421] hover:border-[#c8a44e]/40 hover:text-[#eeeeec] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
