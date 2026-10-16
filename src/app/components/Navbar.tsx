"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "lenis/react";
import { Download, Menu, X } from "lucide-react";
import { personalInfo } from "../data/project";
import { easeOut } from "./motion";

const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Highlight the section crossing the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    for (const id of ["hero", ...navItems.map((i) => i.id)]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-300"
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
        className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-ink-950/90 via-ink-950/50 to-transparent"
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#hero" className="relative z-10 text-lg font-semibold tracking-tight text-white">
            Phat<span className="text-sky-400">.</span>
          </a>

          <nav
            aria-label="Main"
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-ink-900/60 p-1 backdrop-blur-xl md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  active === item.id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={personalInfo.cvUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition-transform duration-200 hover:scale-105 md:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="fixed inset-0 z-30 flex flex-col justify-center gap-2 bg-ink-950/95 px-8 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: easeOut }}
                className="py-2 text-5xl font-semibold tracking-tight text-white"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={personalInfo.cvUrl}
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-ink-950"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download resume
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
