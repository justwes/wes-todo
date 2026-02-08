export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

function priorityLabel(priority: TaskPriority) {
  if (priority === "HIGH") return "High";
  if (priority === "LOW") return "Low";
  return "Medium";
}

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
          {priorityLabel(priority)}
        </span>
      </div>
    </div>
  );
}
