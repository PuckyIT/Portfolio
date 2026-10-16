"use client";

import { Cloud, Database, Layout, Server, Sparkles, type LucideIcon } from "lucide-react";
import { skillGroups } from "../data/project";
import { Reveal, SectionHeading, trackSpotlight } from "./motion";
import { techIcons } from "./techIcons";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "AI Tools": Sparkles,
  "DevOps & Cloud": Cloud,
};

// Bento spans for the 5 groups on a 6-column grid: 3+3 / 2+2+2.
const spans = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-2"];

export function SkillsSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="03"
        eyebrow="Stack"
        title={
          <>
            Tools of the <span className="text-gradient">trade</span>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-6">
        {skillGroups.map((group, i) => {
          const Icon = groupIcons[group.title];
          return (
            <Reveal key={group.title} delay={i * 0.06} className={spans[i]}>
              <div
                onPointerMove={trackSpotlight}
                className="spotlight h-full rounded-3xl border border-white/10 bg-ink-900 p-7 transition-colors duration-300 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sky-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-medium text-white">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((s) => {
                    const SkillIcon = techIcons[s];
                    return (
                      <li
                        key={s}
                        className="flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300"
                      >
                        {SkillIcon && <SkillIcon className="h-3.5 w-3.5" aria-hidden />}
                        {s}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
