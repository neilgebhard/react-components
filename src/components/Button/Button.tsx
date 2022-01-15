import React, { MouseEventHandler } from "react";
import "./Button.css";

export interface ButtonProps {
  label?: string;
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
