"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { education, experience } from "../data/project";
import { Reveal, SectionHeading } from "./motion";

export function ExperienceSection() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 50%"] });
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const entries = [
    {
      period: experience.period,
      title: experience.role,
      org: experience.company,
      chips: experience.highlights,
      current: true,
    },
    {
      period: education.period,
      title: education.degree,
      org: education.institution,
      chips: [],
      current: false,
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">grown</span>
          </>
        }
      />

      <ol ref={ref} className="relative space-y-16 pl-10 sm:pl-14">
        <span className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10" aria-hidden />
        <motion.span
          style={{ scaleY: line }}
          className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-violet-400 via-sky-400 to-cyan-300"
          aria-hidden
        />

        {entries.map((e, i) => (
          <li key={e.title} className="relative">
            <span
              className={`absolute -left-10 top-2 h-[15px] w-[15px] rounded-full border-2 sm:-left-14 ${
                e.current ? "border-sky-300 bg-sky-400 shadow-[0_0_20px_rgb(56_189_248/0.8)]" : "border-zinc-600 bg-ink-950"
              }`}
              aria-hidden
            />
            <Reveal delay={i * 0.1}>
              <p className="font-mono text-sm text-zinc-500">{e.period}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{e.title}</h3>
              <p className="mt-1 text-lg text-sky-300">{e.org}</p>
              {e.chips.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {e.chips.map((c) => (
                    <li key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-zinc-300">
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
