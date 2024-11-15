/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Github } from "lucide-react";
import emailjs from "emailjs-com";

const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-4 py-1 text-[#00ffee] border border-[#00ffee] rounded-md font-mono text-sm">
    {children}
  </span>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("projects");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "YOUR_USER_ID"
    ).then(() => {
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    }).catch((error) => {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="min-h-screen bg-[#1A1B1E] text-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#21272f] z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {["projects", "experience", "skills", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "text-[#00ffee] border-b-2 border-[#00ffee]"
                    : "text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl mb-6 text-white/80">
            {"</> Software Developer"}
          </h2>
          <h1 className="text-5xl mb-8 animate-fadeIn">
            Hi,{" "}
            <span className="text-[#00ffee] animate-bounceIn">
              I'm Le Thanh Phat
            </span>
          </h1>
          <Button
            variant="outline"
            className="text-[#00ffee] hover:bg-[#00ffee] hover:text-black transform transition-transform duration-300"
          >
            My CV
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-16">{"</projects>"}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Listen Dictation Project */}
            <Card className="bg-[#21272f] border-none">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Listen Dictation Project"
                    width={600}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl text-[#00ffee] mb-4">
                  Listen Dictation
                </h3>
                <p className="text-white/80 mb-6">
                  Practice English listening skills through dictation with AI
                  transcriptions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <TechTag>Next.js</TechTag>
                  <TechTag>FastAPI</TechTag>
                  <TechTag>TailwindCSS</TechTag>
                  <TechTag>TypeScript</TechTag>
                </div>
              </CardContent>
            </Card>

            {/* Shop BB Project */}
            <Card className="bg-[#21272f] border-none">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Shop BB Project"
                    width={600}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl text-[#00ffee] mb-4">Shop BB</h3>
                <p className="text-white/80 mb-6">
                  A web E-commerce built by the MERN stack.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <TechTag>ReactJS</TechTag>
                  <TechTag>NodeJS</TechTag>
                  <TechTag>ExpressJS</TechTag>
                  <TechTag>MongoDB</TechTag>
                  <TechTag>MUI</TechTag>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-16">Experience</h2>
          {/* Add experience content here */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Python",
              "SQL",
              "MongoDB",
              "Git",
              "Docker",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-[#00ffee] rounded-md p-4 text-center text-[#00ffee]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-8">{"</contact>"}</h2>
          <hr className="my-4 border-t border-[#00ffee] w-24 mx-auto" />

          <div className="flex justify-center space-x-4 mb-6">
            <Link
              href="mailto:phat30102002@gmail.com"
              className="text-[#00ffee] hover:text-[#00ffee]/80"
            >
              📧
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-[#00ffee] hover:text-[#00ffee]/80"
            >
              <Github className="h-6 w-6" />
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-[#00ffee]">{"</name>"}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="w-full bg-[#1A1B1E] text-white border border-[#00ffee] p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-[#00ffee]">{"</email>"}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full bg-[#1A1B1E] text-white border border-[#00ffee] p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-[#00ffee]">{"</message>"}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="w-full bg-[#1A1B1E] text-white border border-[#00ffee] p-2 rounded-md"
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="bg-[#00ffee] text-black">
              {"</submit>"}
            </Button>
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-[#00ffee] text-black py-2 px-4 rounded-lg hover:bg-[#00ffee]/80"
      >
        ↑
      </button>
    </div>
  );
}
