import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskCard } from "@/components/TaskCard";

describe("TaskCard", () => {
  it("renders title and priority", () => {
    render(<TaskCard title="Write tests" priority="HIGH" />);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
    expect(screen.getByText("High")).toBeInTheDocument();
  });
});
