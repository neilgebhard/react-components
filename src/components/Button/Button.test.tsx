import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="button" />);
    expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument();
  });

  test("renders a disabled button", () => {
    render(<Button label="button" disabled={true} />);
    expect(screen.getByRole("button", { name: /button/i })).toBeDisabled();
  });

  test("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="label" />);
    fireEvent.click(screen.getByRole("button", { name: /label/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
