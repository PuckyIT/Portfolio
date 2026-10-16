import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "../data/project";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="relative space-y-10 border-l border-slate-200 pl-8">
          <li className="relative">
            <span className="absolute -left-[49px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white ring-4 ring-white">
              <Briefcase className="h-4 w-4" aria-hidden />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-slate-900">
                {experience.role} · <span className="text-brand-600">{experience.company}</span>
              </h3>
              <span className="text-sm text-slate-500">{experience.period}</span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {experience.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </li>

          <li className="relative">
            <span className="absolute -left-[49px] flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 ring-4 ring-white">
              <GraduationCap className="h-4 w-4" aria-hidden />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-slate-900">{education.degree}</h3>
              <span className="text-sm text-slate-500">{education.period}</span>
            </div>
            <p className="mt-1 text-slate-600">{education.institution}</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
