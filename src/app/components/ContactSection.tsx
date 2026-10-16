"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Download, Github, Phone } from "lucide-react";
import { personalInfo } from "../data/project";
import { Magnetic, Reveal, easeOut } from "./motion";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phoneClean}`, external: false },
    ...personalInfo.githubProfiles.map((gh) => ({ icon: Github, label: gh.username, href: gh.url, external: true })),
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-32 sm:px-8 sm:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob bottom-[-30%] left-[calc(50%-25vmax)] h-[50vmax] w-[50vmax] bg-violet-600/25" />
        <div className="aurora-blob bottom-[-40%] left-[10%] h-[35vmax] w-[35vmax] bg-sky-500/20" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <Reveal className="font-mono text-sm text-zinc-400">
          <span className="text-sky-300">04</span> — Contact
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-[clamp(3rem,10vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
            Let&apos;s build
            <br />
            <span className="text-gradient">something great.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-14 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-medium text-ink-950 shadow-[0_0_60px_-10px_rgb(139_92_246/0.7)] transition-shadow duration-300 hover:shadow-[0_0_80px_-6px_rgb(56_189_248/0.8)] sm:text-xl"
              >
                {personalInfo.email}
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email"}
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "copy"}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                >
                  {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {links.map(({ icon: Icon, label, href, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              >
                <Download className="h-4 w-4" aria-hidden />
                Resume
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
