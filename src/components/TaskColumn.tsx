import { Column } from "@/components/Column";
import { TaskList } from "@/components/TaskList";
import type { Task, TaskStatus } from "@/lib/task";

export function TaskColumn({
  title,
  status,
  tasks,
}: {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}) {
  const filtered = tasks.filter((t) => t.status === status);

  return (
    <Column title={title}>
      <TaskList tasks={filtered} />
    </Column>
  );
}
