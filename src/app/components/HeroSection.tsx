import { ArrowRight, Download, Github, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data/project";

export function HeroSection() {
  const [primaryGithub] = personalInfo.githubProfiles;

  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Soft accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-brand-50 to-transparent"
      />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 animate-fade-up">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
          Open to new opportunities
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          {personalInfo.name}
        </h1>
        <p className="mt-3 text-xl text-slate-600 sm:text-2xl">
          {personalInfo.role} <span className="text-slate-300">/</span>{" "}
          <span className="text-brand-600">{personalInfo.headline}</span>
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          {personalInfo.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            View projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:border-slate-400"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={primaryGithub.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub ${primaryGithub.username}`}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white hover:text-slate-900"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white hover:text-slate-900"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-200 pt-8 sm:gap-6">
          {personalInfo.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="whitespace-nowrap text-xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin className="h-4 w-4" aria-hidden />
          {personalInfo.location}
        </p>
      </div>
    </section>
  );
}
