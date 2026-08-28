"use client";

import { skillCategories } from "../data/project";
import {
  Code,
  Server,
  Database,
  Cpu,
  Sparkles,
  Layers,
  CheckCircle2
} from "lucide-react";

export function SkillMatrixSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return Code;
      case "server":
        return Server;
      case "database":
        return Database;
      case "docker":
        return Cpu;
      case "brain":
        return Sparkles;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0e0e0d] border-t border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1a] border border-[#2e2e2a] text-xs font-mono text-[#c8a44e]">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL RADAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#eeeeec]">
            Core Skills & Engineering Depth
          </h2>
          <p className="text-[#8a8a85] text-sm sm:text-base max-w-3xl leading-relaxed">
            Hands-on production proficiency across modern frontend architectures, resilient microservices, vector databases, container pipelines, and AI-accelerated development.
          </p>
        </div>

        {/* 5-Category Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <div
                key={category.id}
                className={`rounded-xl p-6 bg-[#171715] border border-[#272724] hover:border-[#383833] transition-all text-left flex flex-col justify-between shadow-md ${
                  category.id === "ai_engineering" ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#121211] border border-[#232320] text-[#c8a44e]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#eeeeec] tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#7a7a75] leading-snug mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border transition-all ${
                          skill.highlight
                            ? "bg-[#1c1c1a] text-[#eeeeec] border-[#3a3a35] font-semibold"
                            : "bg-[#121211] text-[#8a8a85] border-[#20201d]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            skill.highlight ? "bg-[#c8a44e]" : "bg-[#444440]"
                          }`}
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="pt-4 mt-6 border-t border-[#232320] flex items-center justify-between text-[11px] font-mono text-[#7a7a75]">
                  <span>PRODUCTION VERIFIED</span>
                  <span className="text-[#c8a44e] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Enterprise Level
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
