import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Board } from "@/components/Board";
import type { Task } from "@/lib/task";

describe("Add task", () => {
  it("adds a new task to the To do column", async () => {
    const user = userEvent.setup();

    const initialTasks: Task[] = [];

    render(<Board initialTasks={initialTasks} />);

    await user.type(screen.getByPlaceholderText(/task title/i), "New task");
    await user.click(screen.getByRole("button", { name: /add task/i }));

    const todo = screen.getByRole("region", { name: "To do" });

    expect(screen.getByText("New task")).toBeInTheDocument();
    expect(todo).toHaveTextContent("New task");
  });
});
