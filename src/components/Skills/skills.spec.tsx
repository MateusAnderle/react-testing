import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from ".";

describe("Skills", () => {
  const skills = ["HTML", "JAVASCRIPT", "CSS"];

  it("should render the component correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("should render a list of skills", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  it("should render login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  it("should not render start learning button", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  it("should eventually render start learning button", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug()
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 3000,
      },
    );
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument();
  });
});
