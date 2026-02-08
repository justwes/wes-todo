import { TaskCard } from "@/components/TaskCard";
import type { Task, TaskStatus } from "@/lib/task";

function forwardLabel(status: TaskStatus): string | null {
  if (status === "TODO") return "Start";
  if (status === "DOING") return "Complete";
  return null;
}

function backwardLabel(status: TaskStatus): string | null {
  if (status === "DOING") return "Back to To do";
  if (status === "DONE") return "Reopen";
  return null;
}

export function TaskList({
  tasks,
  onTransition,
}: {
  tasks: Task[];
  onTransition?: (taskId: string, direction: "forward" | "backward") => void;
}) {
  return (
    <div className="space-y-2">
      {tasks.map((t) => {
        const fLabel = onTransition ? forwardLabel(t.status) : null;
        const bLabel = onTransition ? backwardLabel(t.status) : null;

        return (
          <TaskCard
            key={t.id}
            title={t.title}
            priority={t.priority}
            action={
              fLabel || bLabel ? (
                <div className="flex gap-2">
                  {bLabel ? (
                    <button
                      type="button"
                      className="rounded-lg border px-2 py-1 text-xs hover:bg-slate-100"
                      onClick={() => onTransition?.(t.id, "backward")}
                    >
                      {bLabel}
                    </button>
                  ) : null}

                  {fLabel ? (
                    <button
                      type="button"
                      className="rounded-lg border px-2 py-1 text-xs hover:bg-slate-100"
                      onClick={() => onTransition?.(t.id, "forward")}
                    >
                      {fLabel}
                    </button>
                  ) : null}
                </div>
              ) : null
            }
          />
        );
      })}
    </div>
  );
}
