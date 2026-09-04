import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import SocialIcon from './SocialIcon';
import { site, socials } from '@/content/site';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 border-b border-line">
      <SectionHeader index="06" title="Contact" note="Let's talk" />
      <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-12">
        <Reveal className="bg-bg px-5 py-12 md:col-span-7 md:px-8 md:py-16">
          <h3 className="max-w-[560px] text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-fg md:text-5xl">
            Working on hard LLM problems or agentic systems that need to
            ship?
          </h3>
          <p className="mt-6 max-w-[480px] text-sm leading-relaxed text-muted md:text-base">
            I&apos;m open to conversations about LLM infrastructure, agentic
            and retrieval systems, guardrails and evals, and roles where
            getting the model into production is the real work.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="link mt-10 inline-block break-all font-mono text-lg md:text-2xl"
          >
            {site.email}
          </a>
        </Reveal>

        <ul className="flex flex-col bg-bg md:col-span-5">
          {socials.map((s) => (
            <li key={s.key} className="flex flex-1 border-b border-line last:border-b-0">
              <a
                href={s.href}
                target={s.key === 'email' ? undefined : '_blank'}
                rel={s.key === 'email' ? undefined : 'noopener noreferrer'}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-raise md:px-6"
              >
                <span className="flex items-center gap-3 text-sm text-fg">
                  <SocialIcon name={s.key} className="text-base text-muted transition-colors group-hover:text-fg" />
                  {s.name}
                </span>
                <span className="truncate font-mono text-[11px] text-dim transition-colors group-hover:text-fg">
                  {s.handle} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
