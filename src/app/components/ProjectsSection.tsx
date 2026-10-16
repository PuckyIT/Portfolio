"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight, Bot, GraduationCap, Ship, Users, type LucideIcon } from "lucide-react";
import { projects, type Project } from "../data/project";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading, trackSpotlight } from "./motion";
import { techIcons } from "./techIcons";

const projectIcons: Record<string, LucideIcon> = {
  gexim: Ship,
  kingwork: Users,
  spec2s: Bot,
  ellacy: GraduationCap,
};

// Where each floating tag sits on the visual panel.
const tagSpots = ["left-[8%] top-[14%]", "right-[8%] top-[42%]", "left-[14%] bottom-[14%]"];

export function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <section id="work" className="relative pt-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Things I&apos;ve <span className="text-gradient">shipped</span>
            </>
          }
        />
      </div>

      <div ref={container}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
            onOpen={() => setActive(project)}
          />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onOpen: () => void;
}

function ProjectCard({ project, index, total, progress, onOpen }: ProjectCardProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress: enter } = useScroll({ target: wrap, offset: ["start end", "start start"] });
  const visualScale = useTransform(enter, [0, 1], [1.5, 1]);
  // Earlier cards shrink a little more as later cards stack on top of them.
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.05]);
  const Icon = projectIcons[project.id];

  return (
    <div ref={wrap} className="sticky top-0 flex h-[100svh] items-center justify-center px-4 sm:px-8">
      <motion.article
        style={{ scale, top: `calc(-4vh + ${index} * var(--stack-gap))` }}
        onPointerMove={trackSpotlight}
        className="spotlight relative grid w-full max-w-6xl origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 shadow-2xl shadow-black/60 [--stack-gap:14px] md:h-[560px] md:grid-cols-[1.05fr_1fr] md:[--stack-gap:28px]"
      >
        <div className="order-2 flex flex-col p-6 sm:p-10 md:order-1 md:p-12">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-mono text-zinc-500">0{index + 1}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-300">{project.domain}</span>
            <span className="ml-auto text-zinc-500">{project.period}</span>
          </div>

          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:mt-auto md:text-7xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-md text-zinc-400 sm:mt-4 sm:text-lg">{project.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tech.map((t) => {
              const TechIcon = techIcons[t];
              return (
                <li
                  key={t}
                  title={t}
                  className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-2 text-zinc-300 sm:h-10 sm:min-w-10 sm:px-2.5"
                >
                  {TechIcon ? (
                    <>
                      <TechIcon className="h-4 w-4" aria-hidden />
                      <span className="sr-only">{t}</span>
                    </>
                  ) : (
                    <span className="px-1 text-xs">{t}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={onOpen}
            className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-ink-950 transition-transform duration-200 hover:scale-105 sm:mt-8"
          >
            View details
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </button>
        </div>

        <div className="relative order-1 h-40 overflow-hidden sm:h-72 md:order-2 md:h-auto">
          <motion.div
            style={{ scale: visualScale }}
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          />
          <div className="bg-grid absolute inset-0 opacity-60 mix-blend-overlay" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" aria-hidden />

          <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <div className="floaty flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/30 bg-white/15 shadow-2xl backdrop-blur-md md:h-36 md:w-36">
              <Icon className="h-12 w-12 text-white md:h-16 md:w-16" strokeWidth={1.5} />
            </div>
          </div>

          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`floaty absolute hidden rounded-full border border-white/30 bg-ink-950/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-md sm:block ${tagSpots[i]}`}
              style={{ animationDelay: `${-i * 1.7}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
