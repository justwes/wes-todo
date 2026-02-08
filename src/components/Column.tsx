import type { ReactNode } from "react";

export function Column({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="rounded-2xl border p-4" aria-label={title}>
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="mt-3 min-h-[240px] rounded-xl bg-slate-50 p-2">
        {children}
      </div>
    </section>
  );
}
