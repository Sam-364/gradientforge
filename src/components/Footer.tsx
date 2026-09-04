import { site } from '@/content/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
      <div className="bg-bg px-5 py-4 font-mono text-[11px] text-dim md:px-6">
        © {year} {site.name}
      </div>
      <div className="bg-bg px-5 py-4 font-mono text-[11px] text-dim sm:text-center">
        {site.brand} · Next.js · {site.locationShort}
      </div>
      <a
        href="#top"
        className="bg-bg px-5 py-4 font-mono text-[11px] text-dim transition-colors hover:text-fg sm:text-right md:px-6"
      >
        Back to top ↑
      </a>
    </footer>
  );
}
