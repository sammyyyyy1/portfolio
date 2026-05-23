import { render, screen } from "@testing-library/react";
import { Contact } from "./contact";

describe("Contact", () => {
  it("renders the personal closing note", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { name: /let's keep in touch/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /samuel.zheng@uwaterloo.ca/i })).toBeInTheDocument();
  });
});