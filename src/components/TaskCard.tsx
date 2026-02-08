import type { TaskPriority } from "@/lib/task";

export function TaskCard({
  title,
  priority,
}: {
  title: string;
  priority: TaskPriority;
}) {
  return (
    <div className="rounded-xl border bg-white p-3">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium">{title}</p>
        <span className="text-[11px] rounded-lg border px-2 py-0.5 text-slate-600">
          {priority === "HIGH" ? "High" : priority === "LOW" ? "Low" : "Medium"}
        </span>
      </div>
    </div>
  );
}
