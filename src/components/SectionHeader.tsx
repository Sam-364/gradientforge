type Props = {
  index: string;
  title: string;
  note?: string;
};

/** Fixed label column shared by every section so the page reads as one grid. */
export const LABEL_GRID = 'grid grid-cols-1 md:grid-cols-[180px_1fr]';

export default function SectionHeader({ index, title, note }: Props) {
  return (
    <div className="grid grid-cols-[64px_1fr] border-b border-line md:grid-cols-[180px_1fr]">
      <div className="flex items-center border-r border-line px-5 py-4 font-mono text-xs tabular-nums text-dim md:px-6">
        {index}
      </div>
      <div className="flex items-baseline justify-between gap-4 px-5 py-4 md:px-8">
        <h2 className="text-base font-medium tracking-tight text-fg md:text-lg">{title}</h2>
        {note && <span className="label hidden sm:block">{note}</span>}
      </div>
    </div>
  );
}
