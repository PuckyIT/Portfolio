"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "motion/react";

export const easeOut = [0.16, 1, 0.3, 1] as const;

/** Fades + lifts its children into place the first time they scroll into view. */
export function Reveal({ delay = 0, y = 32, ...props }: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      {...props}
    />
  );
}

/** Pulls its child toward the cursor while hovered (pointer devices only). */
export function Magnetic({ children, strength = 0.35 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="inline-block"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Pointer handler feeding the `.spotlight` CSS variables. */
export function trackSpotlight(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="mb-14 sm:mb-20">
      <Reveal className="flex items-center gap-3 font-mono text-sm text-zinc-400">
        <span className="text-sky-300">{index}</span>
        <span className="h-px w-10 bg-zinc-700" aria-hidden />
        {eyebrow}
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">{title}</h2>
      </Reveal>
    </div>
  );
}
