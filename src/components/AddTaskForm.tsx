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

  const controlBase =
    "rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--fg))] text-sm";
  const controlHover = "hover:bg-[rgb(var(--surface))]";
  const controlFocus =
    "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--border))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--bg))]";

  return (
    <form onSubmit={submit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          aria-invalid={!!error}
          className={[
            "flex-1 px-3 py-2",
            controlBase,
            controlFocus,
            error ? "border-red-500" : "",
            "placeholder:text-[rgb(var(--muted))]",
          ].join(" ")}
        />

        <label htmlFor="priority" className="sr-only">
          Priority
        </label>
        <select
          id="priority"
          aria-label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
          className={[
            "px-2 py-2",
            controlBase,
            controlHover,
            controlFocus,
          ].join(" ")}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>

        <button
          type="submit"
          className={[
            "px-3 py-2",
            controlBase,
            controlHover,
            controlFocus,
            "font-medium",
          ].join(" ")}
        >
          Add task
        </button>
      </div>

      {error && (
        <p className="mt-1 text-xs text-[rgb(var(--danger))]">{error}</p>
      )}
    </form>
  );
}
