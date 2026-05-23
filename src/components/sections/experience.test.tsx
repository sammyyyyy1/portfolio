import { render, screen } from "@testing-library/react";
import { Experience } from "./experience";

describe("Experience", () => {
  it("renders updated resume experience with impact metrics", () => {
    render(<Experience />);

    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /field notes from teams and systems i have worked on/i })).toBeInTheDocument();
    expect(screen.getByText(/jan 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/claude code and model context protocol/i)).toBeInTheDocument();
    expect(screen.getAllByText(/20x/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/95%/i)).toBeInTheDocument();
    expect(screen.getByText(/80% reduction in query latency/i)).toBeInTheDocument();
    expect(screen.getAllByText(/30%/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/6,000\+ pharmacies/i)).toBeInTheDocument();
    expect(screen.getAllByText(/1m\+ transactions per day/i).length).toBeGreaterThan(0);
  });
});
