import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskList } from "@/components/TaskList";

describe("TaskList", () => {
  it("renders a TaskCard for each task", () => {
    render(
      <TaskList
        tasks={[
          { id: "1", title: "Write tests", priority: "HIGH" },
          { id: "2", title: "Refactor", priority: "LOW" },
        ]}
      />,
    );

    expect(screen.getByText("Write tests")).toBeInTheDocument();
    expect(screen.getByText(/high/i)).toBeInTheDocument();

    expect(screen.getByText("Refactor")).toBeInTheDocument();
    expect(screen.getByText(/low/i)).toBeInTheDocument();
  });
});
