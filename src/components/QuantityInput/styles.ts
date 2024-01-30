import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  background: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  input {
    text-align: center;
    width: 100%;
    background: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button`
  min-height: 0.875rem;
  min-width: 0.875rem;
  background: none;
  color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  transition: 0.4s;
  line-height: 0;

  &:disabled {
    opacity: 0.2;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
