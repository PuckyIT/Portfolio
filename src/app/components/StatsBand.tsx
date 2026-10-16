"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { stats } from "../data/project";
import { Reveal, easeOut } from "./motion";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  // Server HTML shows the final value; once hydrated, reset to 0 so the count-up has room to run.
  useEffect(() => {
    if (ref.current) ref.current.textContent = `0${suffix}`;
  }, [suffix]);

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: easeOut,
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <section aria-label="Highlights" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <dl className="grid gap-12 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="flex flex-col-reverse border-l border-white/10 pl-6">
            <dt className="mt-2 text-zinc-400">{s.label}</dt>
            <dd className="text-gradient text-6xl font-semibold tracking-[-0.05em] sm:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
