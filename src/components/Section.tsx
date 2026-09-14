import type { ReactNode } from "react";

export default function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-20 sm:pt-24">
      <div data-reveal className="mb-9 flex items-center gap-3">
        <span className="font-mono text-[12px] tabular-nums text-accent">
          {num}
        </span>
        <h2 className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
          {title}
        </h2>
        <span className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}
