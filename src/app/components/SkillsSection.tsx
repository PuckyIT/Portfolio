import { skillGroups } from "../data/project";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Skills" title="Tools I work with" />

        <dl className="divide-y divide-slate-200 border-y border-slate-200">
          {skillGroups.map((group) => (
            <div key={group.title} className="grid gap-3 py-5 sm:grid-cols-[180px_1fr] sm:items-center">
              <dt className="font-medium text-slate-900">{group.title}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
