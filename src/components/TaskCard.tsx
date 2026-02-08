import type { ReactNode } from "react";
import type { TaskPriority } from "@/lib/task";

function priorityLabel(priority: TaskPriority) {
  if (priority === "HIGH") return "High";
  if (priority === "LOW") return "Low";
  return "Medium";
}

export function TaskCard({
  title,
  priority,
  action,
}: {
  title: string;
  priority: TaskPriority;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-[rgb(var(--fg))]">{title}</p>
        <span className="rounded-lg border border-[rgb(var(--border))] px-2 py-0.5 text-[11px] text-[rgb(var(--muted))]">
          {priorityLabel(priority)}
        </span>
      </div>

      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
