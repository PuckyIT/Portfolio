"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../data/project";
import { Magnetic, easeOut } from "./motion";

const FIRST_LINE = "Le Thanh";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [phrase, setPhrase] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgb(56 189 248 / 0.10), transparent 70%)`;

  useEffect(() => {
    const id = setInterval(() => setPhrase((p) => (p + 1) % personalInfo.builds.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background: aurora + grid + cursor glow */}
      <motion.div aria-hidden style={{ y: glowY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob left-[-10%] top-[-10%] h-[55vmax] w-[55vmax] bg-violet-600/30" />
        <div
          className="aurora-blob right-[-15%] top-[10%] h-[45vmax] w-[45vmax] bg-sky-500/25"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="aurora-blob bottom-[-25%] left-[25%] h-[40vmax] w-[40vmax] bg-cyan-400/15"
          style={{ animationDelay: "-12s" }}
        />
      </motion.div>
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <motion.div aria-hidden style={{ background: spotlight }} className="pointer-events-none absolute inset-0 -z-10" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new roles
        </motion.p>

        <h1
          aria-label={personalInfo.name}
          className="mt-8 text-[clamp(3.75rem,17vw,11rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white"
        >
          <span aria-hidden className="block">
            {FIRST_LINE.split("").map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.04, ease: easeOut }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              </span>
            ))}
          </span>
          <span aria-hidden className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="text-gradient inline-block pr-[0.06em]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.45, ease: easeOut }}
            >
              Phat.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: easeOut }}
          className="mt-8 flex flex-wrap items-baseline gap-x-2 text-xl text-zinc-400 sm:text-3xl"
        >
          <span>{personalInfo.role}. I build</span>
          <span className="relative inline-flex overflow-y-clip">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={phrase}
                initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="inline-block font-medium text-white"
              >
                {personalInfo.builds[phrase]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: easeOut }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-ink-950 shadow-[0_0_40px_-8px_rgb(139_92_246/0.6)] transition-shadow duration-300 hover:shadow-[0_0_60px_-6px_rgb(56_189_248/0.7)]"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              <Download className="h-4 w-4" aria-hidden />
              Resume
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:text-white"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
