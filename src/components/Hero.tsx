import Image from 'next/image';
import Reveal from './Reveal';
import LocalTime from './LocalTime';
import SocialIcon from './SocialIcon';
import { metrics, now, site, socials } from '@/content/site';

export default function Hero() {
  return (
    <section className="border-b border-line" aria-labelledby="hero-title">
      {/* Bento: shared 1px borders via gap-px on a line-coloured parent */}
      <div className="grid grid-cols-2 gap-px bg-line md:grid-cols-12">
        {/* Intro */}
        <div className="relative col-span-2 overflow-hidden bg-bg px-5 py-12 md:col-span-8 md:row-span-2 md:px-8 md:py-16">
          <div className="gridlines fade-corner pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-center">
            <Reveal>
              <p className="label">
                {site.role} · {site.company.name}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                id="hero-title"
                className="mt-7 text-[40px] font-medium leading-[1.02] tracking-[-0.03em] text-fg sm:text-5xl md:text-6xl lg:text-[68px]"
              >
                {site.name}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-[560px] text-base leading-relaxed text-muted md:text-lg">
                I turn research models into production systems: LLM serving on
                Triton and vLLM, quantized vision pipelines running at the edge,
                and the Rust that makes them fast.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-white"
                >
                  View projects <span aria-hidden="true">↓</span>
                </a>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 text-sm text-fg transition-colors hover:bg-raise"
                >
                  Resume <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Portrait */}
        <Reveal
          delay={100}
          className="group relative col-span-2 aspect-[3/2] overflow-hidden bg-bg md:col-span-4 md:aspect-[4/3]"
        >
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="(min-width: 1120px) 373px, (min-width: 768px) 33vw, 100vw"
            className="object-cover object-[50%_25%] grayscale transition duration-500 ease-out group-hover:grayscale-0"
          />
        </Reveal>

        {/* Status */}
        <Reveal delay={120} className="col-span-2 bg-bg px-5 py-6 md:col-span-4 md:px-6">
          <p className="label">Status</p>
          <div className="mt-4 flex items-center gap-3 text-sm text-fg">
            <span className="blink h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            Open to select collaborations
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Currently MLE I at{' '}
            <a href={site.company.url} target="_blank" rel="noopener noreferrer" className="link">
              {site.company.name}
            </a>
            , shipping multi-modal AI for the physical world.
          </p>
        </Reveal>

        {/* Local time */}
        <Reveal delay={200} className="col-span-2 bg-bg px-5 py-6 md:col-span-4 md:px-6">
          <p className="label">Local time · {site.locationShort}</p>
          <LocalTime
            timeZone={site.timeZone}
            className="mt-3 block font-mono text-3xl tabular-nums tracking-tight text-fg md:text-4xl"
          />
          <p className="mt-2 font-mono text-[11px] text-dim">
            {site.timeZoneLabel} · {site.coordinates}
          </p>
        </Reveal>

        {/* Now */}
        <Reveal delay={280} className="col-span-2 bg-bg px-5 py-6 md:col-span-8 md:px-8">
          <p className="label">Now</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-6">
            {now.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[14px_1fr] gap-2 text-sm leading-snug text-muted"
              >
                <span className="font-mono text-dim" aria-hidden="true">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Metrics strip */}
        {metrics.map((m, i) => (
          <Reveal
            key={m.label}
            delay={320 + i * 60}
            className="col-span-1 bg-bg px-5 py-5 md:col-span-3 md:px-6"
          >
            <div className="font-mono text-2xl tabular-nums tracking-tight text-fg">{m.value}</div>
            <div className="mt-1.5 text-xs leading-snug text-muted">{m.label}</div>
          </Reveal>
        ))}
      </div>

      {/* Social strip */}
      <ul className="grid grid-cols-2 gap-px border-t border-line bg-line md:grid-cols-5">
        {socials.map((s, i) => (
          <li
            key={s.key}
            className={`bg-bg ${i === socials.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <a
              href={s.href}
              target={s.key === 'email' ? undefined : '_blank'}
              rel={s.key === 'email' ? undefined : 'noopener noreferrer'}
              className="group flex h-full items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-raise md:px-6"
            >
              <span className="flex min-w-0 items-center gap-3">
                <SocialIcon name={s.key} className="shrink-0 text-base text-muted transition-colors group-hover:text-fg" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-sm text-fg">{s.name}</span>
                  <span className="truncate font-mono text-[11px] text-dim">{s.handle}</span>
                </span>
              </span>
              <span className="font-mono text-xs text-dim transition-colors group-hover:text-accent" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
