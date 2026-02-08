import { TaskCard } from "@/components/TaskCard";
import type { Task, TaskStatus } from "@/lib/task";

function nextStatus(status: TaskStatus): TaskStatus | null {
  if (status === "TODO") return "DOING";
  if (status === "DOING") return "DONE";
  return null;
}

function moveLabel(status: TaskStatus): string | null {
  const next = nextStatus(status);
  if (!next) return null;
  return next === "DOING" ? "Move to Doing" : "Move to Done";
}

export function TaskList({
  tasks,
  onAdvance,
}: {
  tasks: Task[];
  onAdvance?: (taskId: string) => void;
}) {
  return (
    <div className="space-y-2">
      {tasks.map((t) => {
        const label = onAdvance ? moveLabel(t.status) : null;

        return (
          <TaskCard
            key={t.id}
            title={t.title}
            priority={t.priority}
            action={
              label ? (
                <button
                  className="rounded-lg border px-2 py-1 text-xs hover:bg-slate-100"
                  onClick={() => onAdvance?.(t.id)}
                >
                  {label}
                </button>
              ) : null
            }
          />
        );
      })}
    </div>
  );
}
