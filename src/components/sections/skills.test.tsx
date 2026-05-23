import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  it("renders the quieter capabilities framing", () => {
    render(<Skills />);

    expect(screen.getByText("Capabilities")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tools and domains i work in/i })).toBeInTheDocument();
  });
});