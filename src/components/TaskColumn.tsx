import { Column } from "@/components/Column";
import { TaskList } from "@/components/TaskList";
import type { Task, TaskStatus } from "@/lib/task";

export function TaskColumn({
  title,
  status,
  tasks,
  onAdvance,
}: {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onAdvance?: (taskId: string) => void;
}) {
  const filtered = tasks.filter((t) => t.status === status);

  return (
    <Column title={title}>
      <TaskList tasks={filtered} onAdvance={onAdvance} />
    </Column>
  );
}
