import { Column } from "@/components/Column";
import { TaskList } from "@/components/TaskList";
import type { TaskPriority } from "@/components/TaskCard";

export type TaskStatus = "TODO" | "DOING" | "DONE";

export type Task = {
  id: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
};

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
