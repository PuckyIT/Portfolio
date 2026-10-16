"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/project";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "./SectionHeading";

const VISIBLE_TECH = 4;

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-t border-slate-200 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Projects" title="Selected work" />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActive(project)}
              className="group flex cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.25)]"
            >
              <div className="flex w-full items-center justify-between text-sm">
                <span className="font-medium text-brand-600">{project.domain}</span>
                <span className="text-slate-500">{project.period}</span>
              </div>
              <h3 className="mt-3 flex items-center gap-1.5 text-xl font-semibold text-slate-900">
                {project.name}
                <ArrowUpRight
                  className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                  aria-hidden
                />
              </h3>
              <p className="mt-2 text-slate-600">{project.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {project.tech.slice(0, VISIBLE_TECH).map((t) => (
                  <li key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                    {t}
                  </li>
                ))}
                {project.tech.length > VISIBLE_TECH && (
                  <li className="rounded-md px-1 py-1 text-xs text-slate-500">
                    +{project.tech.length - VISIBLE_TECH}
                  </li>
                )}
              </ul>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
