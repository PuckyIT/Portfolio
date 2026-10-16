import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data/project";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8 text-sm text-slate-500 sm:px-8">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <a href="#hero" className="inline-flex items-center gap-1.5 py-2 transition-colors hover:text-slate-900">
          Back to top
          <ArrowUp className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
