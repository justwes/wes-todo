import type { ReactNode } from "react";

export function Column({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4"
      aria-label={title}
    >
      <h2 className="text-sm font-semibold text-[rgb(var(--fg))]">{title}</h2>

      <div className="mt-3 min-h-[240px] rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2">
        {children}
      </div>
    </section>
  );
}
