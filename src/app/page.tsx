"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillMatrixSection } from "./components/SkillMatrixSection";
import { TerminalInteractive } from "./components/TerminalInteractive";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "experience",
        "projects",
        "skills",
        "terminal",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <main className="min-h-screen bg-[#111110] text-[#eeeeec] flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Hero Overview */}
      <HeroSection onNavigate={scrollToSection} />

      {/* Career Timeline & Experience */}
      <ExperienceSection />

      {/* Selected Production Projects & Architecture Modals */}
      <ProjectsSection />

      {/* Core Technical Radar / Skills */}
      <SkillMatrixSection />

      {/* Interactive CLI Console */}
      <TerminalInteractive />

      {/* Education & Foundations */}
      <EducationSection />

      {/* Direct Contact & Dispatches */}
      <ContactSection />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </main>
  );
}
