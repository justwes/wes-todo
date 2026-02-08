import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Board } from "@/components/Board";
import type { Task } from "@/lib/task";

describe("Board backward movement", () => {
  it("moves a task from DOING back to TODO", async () => {
    const user = userEvent.setup();

    const tasks: Task[] = [
      { id: "1", title: "Write tests", priority: "HIGH", status: "DOING" },
    ];

    render(<Board initialTasks={tasks} />);

    const doing = screen.getByRole("region", { name: "Doing" });
    const todo = screen.getByRole("region", { name: "To do" });

    expect(within(doing).getByText("Write tests")).toBeInTheDocument();

    await user.click(
      within(doing).getByRole("button", { name: /back to to do/i }),
    );

    expect(within(todo).getByText("Write tests")).toBeInTheDocument();
    expect(within(doing).queryByText("Write tests")).toBeNull();
  });
});
