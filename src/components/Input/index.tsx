import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputStyled, InputWrapper } from "./styles";
import React from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  optional?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, optional, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {optional && <p className="optionalText">{optional}</p>}
        </InputStyleContainer>
        {error && <p>{error}</p>}
      </InputWrapper>
    );
  }
);
