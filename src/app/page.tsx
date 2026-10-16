import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TechMarquee } from "./components/TechMarquee";
import { StatsBand } from "./components/StatsBand";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <StatsBand />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
