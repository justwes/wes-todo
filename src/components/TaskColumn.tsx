import { Column } from "@/components/Column";
import { TaskList } from "@/components/TaskList";
import type { Task, TaskStatus } from "@/lib/task";

export function TaskColumn({
  title,
  status,
  tasks,
  onTransition,
}: {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onTransition?: (taskId: string, direction: "forward" | "backward") => void;
}) {
  const filtered = tasks.filter((t) => t.status === status);

  return (
    <Column title={title}>
      <TaskList tasks={filtered} onTransition={onTransition} />
    </Column>
  );
}
