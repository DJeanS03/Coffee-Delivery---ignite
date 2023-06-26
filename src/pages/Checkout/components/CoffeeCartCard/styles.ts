import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  .coffeCard__container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .coffeCard__img {
    width: 4rem;
    height: 4rem;
  }

  .coffeCard__title {
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  .coffeCard__price {
    font-size: ${({ theme }) => theme.textSizes["text-bold-m"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  background: ${({ theme }) => theme.colors["base-button"]};
  height: 100%;
  padding: 0 0.5rem;
  border: none;
  border-radius: 6px;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`;
