import { TaskCard } from "@/components/TaskCard";
import type { Task } from "@/lib/task";

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="space-y-2">
      {tasks.map((t) => (
        <TaskCard key={t.id} title={t.title} priority={t.priority} />
      ))}
    </div>
  );
}
