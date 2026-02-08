"use client";

import { useState } from "react";
import type { TaskPriority } from "@/lib/task";

export function AddTaskForm({
  onAdd,
}: {
  onAdd: (title: string, priority: TaskPriority) => void;
}) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("MEDIUM");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd(title.trim(), priority);
    setTitle("");
    setPriority("MEDIUM");
  }

  return (
    <form onSubmit={submit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 rounded-lg border px-3 py-2 text-sm"
      />

      <label htmlFor="priority" className="sr-only">
        Priority
      </label>
      <select
        id="priority"
        aria-label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority)}
        className="rounded-lg border px-2 py-2 text-sm"
      >
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>

      <button
        type="submit"
        className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-100"
      >
        Add task
      </button>
    </form>
  );
}
