import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
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

    expect(within(todo).getByText("New task")).toBeInTheDocument();
  });

  it("adds a task with selected priority", async () => {
    const user = userEvent.setup();

    render(<Board initialTasks={[]} />);

    await user.type(
      screen.getByPlaceholderText(/task title/i),
      "Important task",
    );

    await user.selectOptions(
      screen.getByRole("combobox", { name: /priority/i }),
      "HIGH",
    );

    await user.click(screen.getByRole("button", { name: /add task/i }));

    const todo = screen.getByRole("region", { name: "To do" });

    expect(within(todo).getByText("Important task")).toBeInTheDocument();
    expect(within(todo).getByText(/high/i)).toBeInTheDocument();
  });
});
