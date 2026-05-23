import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the editorial reading order", () => {
    const { container } = render(<Home />);

    expect(
      screen.getByRole("heading", { name: /a few projects that feel representative/i }),
    ).toBeInTheDocument();

    const sectionIds = Array.from(container.querySelectorAll("main section[id]")).map(
      (section) => section.getAttribute("id"),
    );

    expect(sectionIds).toEqual(["hero", "projects", "resume", "experience", "skills", "contact"]);
  });

  it("keeps primary navigation and local resume access intact", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /^resume$/i })).toHaveAttribute("href", "#resume");
    expect(screen.getByRole("link", { name: /download pdf/i })).toHaveAttribute("href", "/resume.pdf");
    expect(screen.getByRole("link", { name: /download pdf/i })).toHaveAttribute("download", "samuel-zheng-resume.pdf");
    expect(screen.getByTitle(/samuel zheng resume/i)).toHaveAttribute("src", "/resume.pdf");
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "#contact");
  });
});
