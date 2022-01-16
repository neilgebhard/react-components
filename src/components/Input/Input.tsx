import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(props) =>
      props.disabled
        ? "#e4e3ea"
        : props.error
        ? "#a9150b"
        : props.success
        ? "#067d68"
        : "#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`;

const StyledLabel = styled.label<InputProps>`
  display: block;
  font-size: 14px;
  padding-bottom: 6px;
`;

const StyledError = styled.p<InputProps>`
  font-size: 14px;
  color: #a9150b8;
  margin: 0;
  padding-top: 6px;
  color: #a9150b;
`;

const Input: FC<InputProps> = ({
  id,
  disabled,
  label,
  error,
  message,
  success,
  ...props
}) => {
  return (
    <Fragment>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        type="text"
        disabled={disabled}
        error={error}
        success={success}
        {...props}
      />
      {error && <StyledError>{message}</StyledError>}
    </Fragment>
  );
};

export default Input;
