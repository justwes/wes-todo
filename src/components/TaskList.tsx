import { TaskCard, type TaskPriority } from "@/components/TaskCard";

export type TaskListItem = {
  id: string;
  title: string;
  priority: TaskPriority;
};

export function TaskList({ tasks }: { tasks: TaskListItem[] }) {
  return (
    <div className="space-y-2">
      {tasks.map((t) => (
        <TaskCard key={t.id} title={t.title} priority={t.priority} />
      ))}
    </div>
  );
}
