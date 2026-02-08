import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Board } from "@/components/Board";
import type { Task } from "@/lib/task";

describe("Board", () => {
  it("moves a task from TODO to DOING", async () => {
    const user = userEvent.setup();

    const initialTasks: Task[] = [
      { id: "1", title: "Write tests", priority: "HIGH", status: "TODO" },
    ];

    render(<Board initialTasks={initialTasks} />);

    const todoColumn = screen.getByRole("region", { name: "To do" });
    const doingColumn = screen.getByRole("region", { name: "Doing" });

    expect(within(todoColumn).getByText("Write tests")).toBeInTheDocument();
    expect(within(doingColumn).queryByText("Write tests")).toBeNull();

    await user.click(screen.getByRole("button", { name: /move to doing/i }));

    expect(within(todoColumn).queryByText("Write tests")).toBeNull();
    expect(within(doingColumn).getByText("Write tests")).toBeInTheDocument();
  });
});
