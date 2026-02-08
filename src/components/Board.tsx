"use client";

import { useState } from "react";
import { TaskColumn } from "@/components/TaskColumn";
import type { Task, TaskStatus } from "@/lib/task";

function advanceStatus(status: TaskStatus): TaskStatus {
  if (status === "TODO") return "DOING";
  if (status === "DOING") return "DONE";
  return "DONE";
}

export function Board({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function onAdvance(taskId: string) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: advanceStatus(t.status) } : t,
      ),
    );
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <TaskColumn
        title="To do"
        status="TODO"
        tasks={tasks}
        onAdvance={onAdvance}
      />
      <TaskColumn
        title="Doing"
        status="DOING"
        tasks={tasks}
        onAdvance={onAdvance}
      />
      <TaskColumn
        title="Done"
        status="DONE"
        tasks={tasks}
        onAdvance={onAdvance}
      />
    </section>
  );
}
