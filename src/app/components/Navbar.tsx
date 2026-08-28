"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "../data/project";
import { Download, Github, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "terminal", label: "Terminal" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111110]/95 border-b border-[#262624] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#c8a44e]/10 border border-[#c8a44e]/20 flex items-center justify-center text-[#c8a44e] font-bold text-xs">
            TP
          </div>
          <span className="font-semibold text-[#eeeeec] text-sm tracking-tight group-hover:text-[#c8a44e] transition-colors hidden sm:inline">
            {personalInfo.name}
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 bg-[#171715]/80 border border-[#262624] rounded-full px-1.5 py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] transition-all ${
                  isActive
                    ? "text-[#eeeeec] bg-[#262624] font-medium"
                    : "text-[#6b6b66] hover:text-[#a0a09b]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#6b6b66] hover:text-[#eeeeec] hover:bg-[#1c1c1a] transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.cvUrl}
            download="CV_Le_Thanh_Phat.pdf"
            className="px-4 py-1.5 rounded-lg bg-[#c8a44e] hover:bg-[#d4b35c] text-[#111110] font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#6b6b66] hover:text-[#eeeeec] focus:outline-none"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#111110] border-b border-[#262624] px-6 pt-3 pb-6 mt-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                  activeSection === item.id
                    ? "text-[#eeeeec] bg-[#1c1c1a] font-medium"
                    : "text-[#6b6b66]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#262624] flex items-center gap-2">
            <a href={personalInfo.cvUrl} download className="flex-1 py-2.5 rounded-lg bg-[#c8a44e] text-[#111110] font-semibold text-xs flex items-center justify-center gap-1.5">
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-[#6b6b66] border border-[#262624]">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
