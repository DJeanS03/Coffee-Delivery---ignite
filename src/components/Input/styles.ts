import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.4s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors["base-error"]};
    `}

  .optionalText {
    font-size: 0.75rem;
    margin-right: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors["base-label"]};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;
