import React from "react";
import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("renders the Input component", () => {
    render(<Input id="id" label="test" />);
    screen.getByLabelText("test");
  });

  test("renders the Input component", () => {
    render(<Input placeholder="placeholder" />);
    screen.getByPlaceholderText(/placeholder/i);
  });
});
