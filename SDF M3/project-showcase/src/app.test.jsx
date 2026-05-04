import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders title", () => {
  render(<App />);
  expect(
    screen.getByText(/Personal Project Showcase App/i)
  ).toBeInTheDocument();
});