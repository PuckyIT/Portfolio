/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import emailjs from "emailjs-com";
import { projects } from "./data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-4 py-1 text-[#00FFEE] border border-[#00FFEE] rounded-md font-kodeMono text-sm">
    {children}
  </span>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("projects");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        alert("Message sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  const skills = [
    "HTML",
    "CSS",
    "Sass/SCSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "React Native",
    "Git",
    "Redux",
    "Firebase",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
  ];

  return (
    <div className="min-h-screen bg-[#1A1B1E] text-white font-kodeMono">
      {/* Navigation */}
      <nav className="fixed top-5 left-28 right-28 rounded-md py-4 bg-[#21272F] z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-52 py-4 text-2xl">
            {["projects", "experience", "skills", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "text-[#00FFEE] border-b-2 border-[#00FFEE]"
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
      <section className="pt-72 pb-56 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl mb-6 text-white/80">
            {"</> Software Developer"}
          </h2>
          <h1 className="text-7xl mb-8 animate-fadeIn">
            Hi,{" "}
            <span className="text-[#00FFEE] animate-bounceIn">
              I'm Le Thanh Phat
            </span>
          </h1>
          <Button
            variant="outline"
            className="text-[#00FFEE] hover:bg-[#00FFEE] hover:text-black transform transition-transform duration-300 w-28 h-16 mt-14"
          >
            <a
              href="/CV_LeThanhPhat.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My CV
            </a>
          </Button>
        </div>
      </section>
      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      {/* Projects Section */}
      <section id="projects" className=" w-10/12 mx-auto">
        <h2 className="text-center text-3xl mb-16">{"</projects>"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card className="bg-[#21272F] border-none h-10/12" key={index}>
              <CardContent className="p-2">
                <div className="mb-6">
                  <Image
                    src={project.image || "/images/default.png"}
                    alt={project.name}
                    width={600}
                    height={300}
                    className="rounded-lg max-h-72 max-w-full"
                  />
                </div>
                <h3 className="text-xl text-[#00FFEE] mb-4">{project.name}</h3>
                <p className="text-white/80 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </div>
                <div className="flex space-x-4 text-2xl justify-center gap-4 bottom-0">
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00FFEE]/80 "
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00FFEE]/80 "
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      {/* Experience Section */}
      <section id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-16 text-[#00FFEE]">
            {"</experience>"}
          </h2>
          <div className="grid md:grid-cols-[300px_1fr] gap-8">
            {/* Company/Role Info */}
            <div className="space-y-4">
              <div className="bg-[#00FFEE]/20 rounded-lg p-4">
                <h3 className="text-[#00FFEE] text-xl font-semibold">SGOD</h3>
                <p className="text-white/70">Apr 2024 - Jun 2024</p>
              </div>
            </div>
            {/* Experience Details */}
            <div className="bg-[#21272F] rounded-lg p-6">
              <h3 className="text-[#00FFEE] text-2xl mb-6 font-semibold">
                NextJS Intern
              </h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start">
                  <span className="text-[#00FFEE] mr-3">•</span>
                  Participated in the development of an E-Learning website.
                </li>
                <li className="flex items-start">
                  <span className="text-[#00FFEE] mr-3">•</span>
                  Designed UI, developed, programmed, and debugged
                </li>
                <li className="flex items-start">
                  <span className="text-[#00FFEE] mr-3">•</span>
                  Worked closely with Backend team to design APIs and optimize
                  the application.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      {/* Skills Section */}
      <section id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-16 text-white">
            &lt;/skills&gt;
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900/50 text-[#00FFEE] px-6 py-3 rounded-lg shadow-lg 
                        transform hover:scale-105 transition-all duration-300
                        relative after:absolute after:inset-0 after:bg-gray-600/20 after:rounded-lg
                        border border-transparent hover:border-[#00FFEE]"
                style={{
                  boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .4)",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      {/* Contact Section */}
      <section id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-8">{"</contact>"}</h2>
          <div className="flex justify-center space-x-4 mb-6 gap-5">
            <Link
              href="mailto:phat30102002@gmail.com"
              className="text-white hover:text-[#00FFEE]/80"
            >
              <TbMailFilled className="w-7 h-7" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-white hover:text-[#00FFEE]/80"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-10/12 mx-auto">
            <div className="w-full">
              <label className="flex text-[#00FFEE] mb-3">{"</name>"}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="w-full bg-[#21272F] text-white border border-white p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label className="flex text-[#00FFEE] mb-3">{"</email>"}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full bg-[#21272F] text-white border border-white p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label className="flex text-[#00FFEE] mb-3">{"</message>"}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="w-full bg-[#21272F] text-white border border-white p-2 rounded-md"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#00FFEE] text-[#1A1B1E] py-2 px-4 rounded-md shadow-lg 
                        transform hover:scale-105 transition-all duration-300 "
            >
              {"</submit>"}
            </button>

            {status === "success" && (
              <p className="text-green-400 mt-4">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-4">
                Failed to send message. Try again!
              </p>
            )}
          </form>
        </div>
      </section>

      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      <h3 className="pb-12 w-full flex justify-center">
        Create by Le Thanh Phat @2024
      </h3>
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-[#00FFEE] text-black py-2 px-4 rounded-lg hover:bg-[#00FFEE]/80"
      >
        ↑
      </button>
    </div>
  );
}
