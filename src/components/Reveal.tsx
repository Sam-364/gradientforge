'use client';

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li';
};

/**
 * Fades content in once when it enters the viewport.
 * Pure CSS transition driven by an IntersectionObserver — no animation library.
 */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            io.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { '--d': `${delay}ms` } as CSSProperties;

  return createElement(
    as,
    { ref, className: `reveal ${className}`.trim(), style },
    children
  );
}
