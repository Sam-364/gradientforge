import Reveal from './Reveal';
import SectionHeader, { LABEL_GRID } from './SectionHeader';
import { experiences } from '@/content/experience';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-14 border-b border-line">
      <SectionHeader index="02" title="Experience" note="Where I've worked" />
      {experiences.map((exp, i) => (
        <Reveal
          key={exp.company}
          as="article"
          delay={i * 60}
          className={`${LABEL_GRID} border-b border-line last:border-b-0`}
        >
          <div className="px-5 pt-6 md:border-r md:border-line md:px-6 md:py-7">
            <div className="font-mono text-xs tabular-nums text-fg">{exp.period}</div>
            <div className="mt-1.5 font-mono text-[11px] leading-relaxed text-dim">
              <span className="md:block">{exp.location}</span>
              <span className="md:hidden"> · </span>
              <span className="md:block">{exp.type}</span>
            </div>
          </div>
          <div className="px-5 pb-7 pt-4 md:px-8 md:py-7">
            <h3 className="text-lg font-medium tracking-tight text-fg">{exp.role}</h3>
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link mt-1 inline-block text-sm text-muted"
              >
                {exp.company}
              </a>
            ) : (
              <p className="mt-1 text-sm text-muted">{exp.company}</p>
            )}
            <ul className="mt-5 max-w-[720px] space-y-2.5">
              {exp.highlights.map((h) => (
                <li
                  key={h}
                  className="grid grid-cols-[16px_1fr] gap-2 text-sm leading-relaxed text-muted"
                >
                  <span className="font-mono text-dim" aria-hidden="true">
                    —
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
