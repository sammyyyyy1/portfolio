import { render, screen } from "@testing-library/react";
import { Projects } from "./projects";

describe("Projects", () => {
  it("renders selected work from GitHub plus NarratorRL", () => {
    render(<Projects />);

    expect(screen.getByText("Selected Work")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /a few projects that feel representative of how I like to build/i })).toBeInTheDocument();
    expect(screen.getAllByText(/why it mattered/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/pockettrader/i)).toBeInTheDocument();
    expect(screen.getByText(/motispectra/i)).toBeInTheDocument();
    expect(screen.getByText(/gpt george/i)).toBeInTheDocument();
    expect(screen.getByText(/review recap/i)).toBeInTheDocument();
    expect(screen.getByText(/narratorrl/i)).toBeInTheDocument();
    expect(screen.getAllByText(/conuhacks winner 2024/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/uottahack 5 winner/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/100\+ active users/i)).toBeInTheDocument();
  });
});
