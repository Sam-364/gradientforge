import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { projects } from '@/content/projects';
import { site } from '@/content/site';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-14 border-b border-line">
      <SectionHeader index="03" title="Projects" note="Selected work" />
      <ul className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} as="li" delay={(i % 3) * 70} className="flex bg-bg">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col px-5 py-6 transition-colors hover:bg-raise md:px-6 md:py-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] tabular-nums text-dim">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="label truncate">{p.category}</span>
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight text-fg">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="grid grid-cols-[12px_1fr] gap-2 text-[13px] leading-snug text-muted"
                  >
                    <span className="font-mono text-dim" aria-hidden="true">
                      ›
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                <p className="font-mono text-[11px] leading-relaxed text-dim">{p.tech.join(' · ')}</p>
                <span className="shrink-0 font-mono text-[11px] text-muted transition-colors group-hover:text-accent">
                  GitHub ↗
                </span>
              </div>
            </a>
          </Reveal>
        ))}

        {/* Fill the last grid cell with a hatched link to the full repo list */}
        <Reveal as="li" delay={140} className="flex bg-bg">
          <a
            href={`${site.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="hatch group flex min-h-[220px] w-full flex-col justify-between px-5 py-6 transition-colors hover:bg-raise md:px-6 md:py-7"
          >
            <span className="label">More</span>
            <span>
              <span className="block text-xl font-medium tracking-tight text-fg">
                All repositories
              </span>
              <span className="mt-2 block font-mono text-[11px] text-dim transition-colors group-hover:text-accent">
                github.com/Sam-364 ↗
              </span>
            </span>
          </a>
        </Reveal>
      </ul>
    </section>
  );
}
