import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("Input", () => {
  test("renders the Input component", () => {
    render(<Input id="id" label="label" />);
    screen.getByLabelText("label");
  });

  test("renders the Input component", () => {
    render(<Input placeholder="placeholder" />);
    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });

  test("renders the Input component", () => {
    render(<Input id="id" label="label" />);
    const input = screen.getByLabelText("label") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "some value" } });
    expect(input.value).toBe("some value");
  });
});
