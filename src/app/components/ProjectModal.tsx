"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";
import type { Project } from "../data/project";
import { easeOut } from "./motion";
import { techIcons } from "./techIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousFocus = document.activeElement as HTMLElement | null;
    lenis?.stop();
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [project, onClose, lenis]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            data-lenis-prevent
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] border border-white/10 bg-ink-900 sm:rounded-[2rem]"
          >
            <div className={`h-2 bg-gradient-to-r ${project.gradient}`} aria-hidden />

            <div className="p-7 sm:p-10">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-6 flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <p className="text-sm text-zinc-500">
                {project.domain} · {project.period}
              </p>
              <h3 id="project-title" className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-white">
                {project.name}
              </h3>
              <p className="mt-3 text-lg text-zinc-400">{project.summary}</p>

              <ul className="mt-8 space-y-4">
                {project.bullets.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: easeOut }}
                    className="flex gap-4 leading-relaxed text-zinc-300"
                  >
                    <span className="font-mono text-sm text-sky-300">0{i + 1}</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {project.tech.map((t) => {
                  const TechIcon = techIcons[t];
                  return (
                    <li
                      key={t}
                      className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {TechIcon && <TechIcon className="h-3.5 w-3.5" aria-hidden />}
                      {t}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
