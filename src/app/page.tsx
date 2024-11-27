/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com";
import { projects } from "./data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-4 py-1 text-[#00FFEE] border border-[#00FFEE] rounded-md text-sm">
    {children}
  </span>
);

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 200;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error("Email sending failed:", error);
      });
  };

  const skills = [
    "HTML",
    "CSS",
    "Sass/SCSS",
    "TailwindCSS",
    "MUI",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "NestJS",
    "Git",
    "Redux",
    "Firebase",
    "NodeJS",
    "MongoDB",
  ];

  return (
    <div className="min-h-screen bg-[#1A1B1E] text-white ">
      {/* Navigation */}
      <nav className="fixed top-5 left-4 right-4 md:left-24 md:right-24 rounded-md py-4 bg-[#21272F] z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white md:hidden"
            >
              ☰
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-around w-full py-4 text-xl font-bold">
              {["projects", "experience", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative capitalize group`}
                  >
                    {section}
                    <span
                      className={`absolute top-7 left-0 h-[3px] w-0 bg-white transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mt-4 bg-[#1A1B1E] rounded-lg p-4 text-center md:hidden font-bold">
              {["projects", "experience", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setMenuOpen(false); // Close menu after clicking
                    }}
                    className={`block w-full py-2 capitalize `}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
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
          <button className="text-[#00FFEE] hover:bg-[#00FFEE] hover:text-black transform transition-transform duration-300 w-28 h-16 mt-14 border-2 border-1-white">
            <Link
              href="/CV_LeThanhPhat.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My CV
            </Link>
          </button>
        </div>
      </section>
      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      {/* Projects Section */}
      <section id="projects" className="w-10/12 mx-auto">
        <h2 className="text-center text-3xl mb-16 text-white">
          {"</projects>"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#21272F] border-none h-auto rounded-lg shadow-xl overflow-hidden transform transition duration-300"
            >
              {/* CardContent */}
              <div className="p-4">
                <div className="mb-6">
                  <Image
                    src={project.image || "/images/default.png"}
                    alt={project.name}
                    width={600}
                    height={300}
                    className="rounded-lg max-h-72 max-w-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-[#00FFEE] mb-4">{project.name}</h3>
                <p className="text-white/80 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </div>
                <div className="flex space-x-4 text-2xl justify-center gap-4">
                  {project.projectLink && (
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00FFEE]/80"
                    >
                      <FaGithub />
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00FFEE]/80"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      {/* Experience Section */}
      <section id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-16 text-white">
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
            {"</skills>"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#21272F] rounded-lg p-6">
                <h3 className="text-2xl text-[#00FFEE] font-semibold">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      {/* Contact Section */}
      <section id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center text-3xl mb-16 text-white">
            {"</contact>"}
          </h2>
          <h3 className="text-xl text-white/80 mb-12">
            Feel free to reach out for any inquiries or just to chat!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-4 bg-[#21272F] text-white rounded-lg"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-4 bg-[#21272F] text-white rounded-lg"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 bg-[#21272F] text-white rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-xl text-black bg-[#00FFEE] hover:bg-[#00FFEE]/80 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <hr className="my-12 mx-auto border-t-2 border-[#00FFEE] w-10/12 " />

      <h3 className="pb-12 w-full flex justify-center">
        Create by Le Thanh Phat @2024
      </h3>

      {/* Scroll to Top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-[#00FFEE] text-black py-2 px-4 rounded-lg hover:bg-[#00FFEE]/80"
      >
        ↑
      </button>
    </div>
  );
}
