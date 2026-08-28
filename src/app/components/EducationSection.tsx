"use client";

import { educationInfo } from "../data/project";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-[#0e0e0d] border-t border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1a] border border-[#2e2e2a] text-xs font-mono text-[#c8a44e]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#eeeeec]">
            Education & Theoretical Foundations
          </h2>
          <p className="text-[#8a8a85] text-sm sm:text-base max-w-2xl leading-relaxed">
            Formal education in Information Technology, Software Engineering, Algorithms, and Distributed Computing systems.
          </p>
        </div>

        {/* Education Card */}
        <div className="rounded-xl p-6 sm:p-8 bg-[#171715] border border-[#272724] text-left shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#232320]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#121211] border border-[#232320] text-[#c8a44e]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#eeeeec]">
                  {educationInfo.institution}
                </h3>
                <p className="text-sm font-medium text-[#c8a44e] font-mono">
                  {educationInfo.degree}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#7a7a75] pt-1">
                  <span className="px-2.5 py-0.5 rounded bg-[#121211] border border-[#20201d] text-[#a0a09b]">
                    {educationInfo.faculty}
                  </span>
                  <span>• {educationInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#121211] text-[#c8a44e] border border-[#c8a44e]/30">
                Bachelor Degree
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7a7a75] font-semibold">
              Academic & Engineering Foundations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationInfo.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#121211] border border-[#20201d] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c8a44e] mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm text-[#a0a09b] leading-relaxed">
                    {hl}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
