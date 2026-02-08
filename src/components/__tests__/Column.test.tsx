import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Column } from "@/components/Column";

describe("Column", () => {
  it("renders the title and children", () => {
    render(
      <Column title="To do">
        <p>Child content</p>
      </Column>,
    );

    expect(screen.getByRole("heading", { name: "To do" })).toBeInTheDocument();
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
