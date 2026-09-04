import Reveal from './Reveal';
import SectionHeader, { LABEL_GRID } from './SectionHeader';
import { posts } from '@/content/writing';
import { site } from '@/content/site';

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-14 border-b border-line">
      <SectionHeader index="05" title="Writing" note="Notes on ML internals" />
      <ul>
        {posts.map((post, i) => (
          <Reveal key={post.href} as="li" delay={i * 60} className="border-b border-line">
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${LABEL_GRID} group transition-colors hover:bg-raise`}
            >
              <div className="px-5 pt-5 md:border-r md:border-line md:px-6 md:py-6">
                <div className="font-mono text-xs tabular-nums text-fg">{post.date}</div>
                <div className="mt-1.5 font-mono text-[11px] text-dim">{post.venue}</div>
              </div>
              <div className="px-5 pb-6 pt-3 md:px-8 md:py-6">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="max-w-[640px] text-base font-medium leading-snug tracking-tight text-fg md:text-lg">
                    {post.title}
                  </h3>
                  <span
                    className="mt-1 shrink-0 font-mono text-sm text-dim transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2.5 max-w-[680px] text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
                <p className="mt-3 font-mono text-[11px] text-dim">{post.tags.join(' · ')}</p>
              </div>
            </a>
          </Reveal>
        ))}
        <li>
          <a
            href={site.medium}
            target="_blank"
            rel="noopener noreferrer"
            className={`${LABEL_GRID} group transition-colors hover:bg-raise`}
          >
            <div className="hidden md:block md:border-r md:border-line" aria-hidden="true" />
            <div className="flex items-center justify-between px-5 py-4 md:px-8">
              <span className="text-sm text-muted transition-colors group-hover:text-fg">
                More on Medium
              </span>
              <span className="font-mono text-[11px] text-dim transition-colors group-hover:text-accent">
                @DataDry ↗
              </span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
