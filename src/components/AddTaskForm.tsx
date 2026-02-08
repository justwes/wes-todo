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
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAdd(title.trim(), priority);
    setTitle("");
    setPriority("MEDIUM");
    setError(null);
  }

  function onTitleChange(value: string) {
    setTitle(value);
    if (error) setError(null);
  }

  return (
    <form onSubmit={submit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          aria-invalid={!!error}
          className={`flex-1 rounded-lg border px-3 py-2 text-sm ${
            error ? "border-red-500" : ""
          }`}
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
      </div>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </form>
  );
}
