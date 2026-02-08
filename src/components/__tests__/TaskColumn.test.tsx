import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskColumn } from "@/components/TaskColumn";

describe("TaskColumn", () => {
  it("renders only tasks matching its status", () => {
    render(
      <TaskColumn
        title="To do"
        status="TODO"
        tasks={[
          { id: "1", title: "Write tests", priority: "HIGH", status: "TODO" },
          { id: "2", title: "Refactor", priority: "LOW", status: "DOING" },
        ]}
      />,
    );

    expect(screen.getByText("Write tests")).toBeInTheDocument();
    expect(screen.queryByText("Refactor")).toBeNull();
  });
});
