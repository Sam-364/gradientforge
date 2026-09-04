import Reveal from './Reveal';
import SectionHeader, { LABEL_GRID } from './SectionHeader';
import { site } from '@/content/site';

const facts = [
  { k: 'Based in', v: site.location },
  { k: 'Education', v: 'B.Tech, NIT Rourkela (2020–24)' },
  { k: 'Currently', v: `${site.company.name}, since 2024` },
  { k: 'Focus', v: 'GraphRAG, LLM inference, vision, robotics' },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-14 border-b border-line">
      <SectionHeader index="01" title="About" note="Who I am" />
      <div className={LABEL_GRID}>
        <dl className="border-b border-line md:border-b-0 md:border-r">
          {facts.map((f) => (
            <div
              key={f.k}
              className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-3.5 last:border-b-0 md:block md:px-6 md:py-4"
            >
              <dt className="label">{f.k}</dt>
              <dd className="text-right text-[13px] text-muted md:mt-1.5 md:text-left">{f.v}</dd>
            </div>
          ))}
        </dl>
        <Reveal className="px-5 py-8 md:px-8 md:py-10">
          <div className="max-w-[680px] space-y-5 text-[15px] leading-relaxed text-muted md:text-base">
            <p>
              I&apos;m {site.firstName}, a Machine Learning Engineer at{' '}
              <a href={site.company.url} target="_blank" rel="noopener noreferrer" className="link">
                {site.company.name}
              </a>
              , where I build production AI systems that have to hold up under
              real load: a multimodal GraphRAG platform over 50K+ documents,
              high-performance inference, and model deployment on constrained
              hardware.
            </p>
            <p>
              I studied at <span className="text-fg">NIT Rourkela</span> and
              spend most of my time on the gap between a paper and a service.
              That has meant migrating Python servers to Rust for a 360%
              performance gain, moving inference to vLLM on Triton for 3.2× the
              throughput, and quantizing detectors to run 4.8× faster with no
              loss in accuracy.
            </p>
            <p>
              Outside of work I read and write about LLM internals,
              reinforcement learning and graph neural networks, and I keep
              coming back to the infrastructure that makes AI practical at
              scale.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
