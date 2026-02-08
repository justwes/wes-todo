"use client";

import { useState } from "react";
import { TaskColumn } from "@/components/TaskColumn";
import type { Task, TaskStatus } from "@/lib/task";

type Direction = "forward" | "backward";

function transitionStatus(
  status: TaskStatus,
  direction: Direction,
): TaskStatus {
  if (direction === "forward") {
    if (status === "TODO") return "DOING";
    if (status === "DOING") return "DONE";
    return "DONE";
  }

  // backward
  if (status === "DONE") return "DOING";
  if (status === "DOING") return "TODO";
  return "TODO";
}

export function Board({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function onTransition(taskId: string, direction: Direction) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, status: transitionStatus(t.status, direction) }
          : t,
      ),
    );
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <TaskColumn
        title="To do"
        status="TODO"
        tasks={tasks}
        onTransition={onTransition}
      />
      <TaskColumn
        title="Doing"
        status="DOING"
        tasks={tasks}
        onTransition={onTransition}
      />
      <TaskColumn
        title="Done"
        status="DONE"
        tasks={tasks}
        onTransition={onTransition}
      />
    </section>
  );
}
