'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { sections, site } from '@/content/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  // Track which section is in view for the active marker.
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => io.observe(el));

    const onTop = () => {
      if (window.scrollY < 80) setActive('');
    };
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, []);

  // Close the compact menu when the viewport grows to the full nav.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="flex h-14 items-stretch" aria-label="Primary">
        {/* Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-3 border-r border-line px-5 md:px-6 lg:w-[180px]"
          aria-label={`${site.brand} — back to top`}
        >
          <span className="grid h-3 w-3 grid-cols-2 gap-[2px]" aria-hidden="true">
            <span className="bg-fg" />
            <span className="bg-fg" />
            <span className="bg-fg" />
            <span className="bg-accent" />
          </span>
          <span className="font-mono text-[13px] tracking-tight text-fg">{site.brand}</span>
        </a>

        {/* Full nav (≥ lg) */}
        <ul className="hidden flex-1 items-stretch lg:flex">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="flex">
                <a
                  href={`#${s.id}`}
                  className={`relative flex items-center gap-2 px-3.5 font-mono text-[12px] uppercase tracking-label transition-colors ${
                    isActive ? 'text-fg' : 'text-dim hover:text-fg'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="text-[10px] tabular-nums opacity-60">{s.index}</span>
                  {s.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-px h-px transition-colors ${
                      isActive ? 'bg-accent' : 'bg-transparent'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-stretch">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border-l border-line px-5 font-mono text-[12px] uppercase tracking-label text-muted transition-colors hover:bg-raise hover:text-fg lg:flex"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-14 items-center justify-center border-l border-line text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </nav>

      {/* Compact menu (< lg) */}
      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-bg lg:hidden">
        <ul>
          {sections.map((s) => (
            <li key={s.id} className="border-b border-line">
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-5 py-3.5 text-sm text-fg transition-colors hover:bg-raise"
              >
                <span>{s.label}</span>
                <span className="font-mono text-[11px] tabular-nums text-dim">{s.index}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-5 py-3.5 text-sm text-fg transition-colors hover:bg-raise"
            >
              <span>Resume</span>
              <span className="font-mono text-[11px] text-dim">PDF ↗</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
