import Reveal from './Reveal';
import SectionHeader, { LABEL_GRID } from './SectionHeader';
import { stack } from '@/content/stack';

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-14 border-b border-line">
      <SectionHeader index="04" title="Stack" note="Tools that earned a place" />
      {stack.map((row, i) => (
        <Reveal
          key={row.category}
          delay={i * 40}
          className={`${LABEL_GRID} border-b border-line last:border-b-0`}
        >
          <div className="label px-5 pt-5 md:flex md:items-center md:border-r md:border-line md:px-6 md:py-5">
            {row.category}
          </div>
          <ul className="flex flex-wrap gap-2 px-5 pb-5 pt-3 md:px-8 md:py-4">
            {row.items.map((item) => (
              <li
                key={item}
                className="border border-line px-2.5 py-1 font-mono text-[12px] text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </section>
  );
}
