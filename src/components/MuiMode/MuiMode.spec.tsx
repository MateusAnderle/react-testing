import { render, screen } from "@testing-library/react";
import {
  render as customRender,
  screen as customScreen,
} from "../../utils/test-utils";
import { MuiMode } from ".";
import { AppProviders } from "../../providers/app-providers";

describe("MuiMode", () => {
  it("should renders text correctly", () => {
    customRender(<MuiMode />); // Using custom wrapper

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const headingElement = customScreen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });

  it("should renders text in white color for dark mode", () => {
    render(<MuiMode />, { wrapper: AppProviders }); // Using directly wrapper
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
  });
});
