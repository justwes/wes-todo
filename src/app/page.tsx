import { Board } from "@/components/Board";
import type { Task } from "@/lib/task";

export default function HomePage() {
  const tasks: Task[] = [
    { id: "1", title: "Write tests", priority: "HIGH", status: "TODO" },
    { id: "2", title: "Refactor", priority: "LOW", status: "DOING" },
  ];

  return (
    <main className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Wes To do</h1>
        <p className="text-sm text-slate-500">Personal task board</p>
      </header>

      <Board initialTasks={tasks} />
    </main>
  );
}
