"use client";

import { personalInfo } from "../data/project";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#0c0c0b] border-t border-[#1f1f1d] text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#232320]">
          {/* Brand & Role */}
          <div className="space-y-1">
            <div className="font-bold text-[#eeeeec] text-sm tracking-tight font-mono">
              {personalInfo.name}
            </div>
            <div className="text-xs text-[#7a7a75] font-mono">
              {personalInfo.role} · {personalInfo.specialization}
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#8a8a85]">
            <button onClick={() => onNavigate("hero")} className="hover:text-[#c8a44e] transition-colors">
              About
            </button>
            <button onClick={() => onNavigate("experience")} className="hover:text-[#c8a44e] transition-colors">
              Experience
            </button>
            <button onClick={() => onNavigate("projects")} className="hover:text-[#c8a44e] transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigate("skills")} className="hover:text-[#c8a44e] transition-colors">
              Skills
            </button>
            <button onClick={() => onNavigate("terminal")} className="hover:text-[#c8a44e] transition-colors">
              Terminal
            </button>
            <button onClick={() => onNavigate("contact")} className="hover:text-[#c8a44e] transition-colors">
              Contact
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#171715] border border-[#272724] text-[#8a8a85] hover:text-[#eeeeec] hover:border-[#383833] transition-all flex items-center gap-2 text-xs font-mono"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5c5c58]">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
