"use client";

import { useState } from "react";

export function AddTaskForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [title, setTitle] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle("");
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
      <button
        type="submit"
        className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-100"
      >
        Add task
      </button>
    </form>
  );
}
