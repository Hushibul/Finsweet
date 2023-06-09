import { render, screen } from "@testing-library/react";

import Greet from "./Greet";

describe("Greet", () => {
  test("rendered Correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("the person with name", () => {
    render(<Greet name="Alice" />);
    const textElement = screen.getByText("Hello Alice");
    expect(textElement).toBeInTheDocument();
  });
});
