"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "../data/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div className="absolute inset-0 animate-fade-in bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="relative max-h-[90vh] w-full max-w-xl animate-scale-in overflow-y-auto rounded-t-2xl bg-white p-6 shadow-xl sm:rounded-2xl sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-sm">
          <span className="font-medium text-brand-600">{project.domain}</span>
          <span className="text-slate-400"> · </span>
          <span className="text-slate-500">{project.period}</span>
        </p>
        <h3 id="project-title" className="mt-2 pr-10 text-2xl font-semibold tracking-tight text-slate-900">
          {project.name}
        </h3>
        <p className="mt-2 text-slate-600">{project.summary}</p>

        <h4 className="mt-8 text-sm font-medium text-slate-900">What I did</h4>
        <ul className="mt-3 space-y-2.5">
          {project.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <h4 className="mt-8 text-sm font-medium text-slate-900">Tech stack</h4>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
