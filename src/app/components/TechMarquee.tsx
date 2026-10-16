import { marqueeTech } from "../data/project";
import { techIcons } from "./techIcons";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // Two copies side by side; the track slides -50% so the loop is seamless.
  return (
    <div className="marquee flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className="marquee-track flex shrink-0 gap-3 pr-3"
        style={{ animationDirection: reverse ? "reverse" : "normal", "--duration": "45s" } as React.CSSProperties}
      >
        {[...items, ...items].map((name, i) => {
          const Icon = techIcons[name];
          return (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-zinc-300 transition-colors duration-200 hover:border-white/25 hover:text-white"
            >
              {Icon && <Icon className="h-4 w-4" aria-hidden />}
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function TechMarquee() {
  const half = Math.ceil(marqueeTech.length / 2);
  return (
    <section aria-label="Technologies" className="space-y-3 border-y border-white/5 py-10">
      <Row items={marqueeTech.slice(0, half)} />
      <Row items={marqueeTech.slice(half)} reverse />
    </section>
  );
}
