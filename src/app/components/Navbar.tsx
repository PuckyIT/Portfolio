"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { personalInfo } from "../data/project";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the section crossing the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-slate-200 bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="font-semibold tracking-tight text-slate-900">
          Thanh Phat<span className="text-brand-600">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === item.id
                  ? "text-slate-900 font-medium"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={personalInfo.cvUrl}
            download
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
          >
            <Download className="h-4 w-4" aria-hidden />
            CV
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-slate-200 px-5 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-3 text-base text-slate-700 hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href={personalInfo.cvUrl}
            download
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-medium text-white"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
