import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

describe("Hero", () => {
  it("renders the authored intro without repeated metric cards", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: /software engineer building reliable systems, useful products, and thoughtful technical work/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/computer science student at the university of waterloo/i)).toBeInTheDocument();
    expect(screen.queryByText(/1m\+ daily transactions/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/90% latency reduction/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/100\+ active users/i)).not.toBeInTheDocument();
  });
});
