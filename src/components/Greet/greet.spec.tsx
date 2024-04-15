import { render, screen } from "@testing-library/react";
import { Greet } from ".";

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    it("Greet renders with a name", () => {
      render(<Greet name="Bruce Wayne" />);
      const textElement = screen.getByText(/hello bruce wayne/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});
