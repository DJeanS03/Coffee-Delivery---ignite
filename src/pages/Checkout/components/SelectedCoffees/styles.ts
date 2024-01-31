import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  .checkoutForm__title {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.textSizes["title-title-xs"]};
    font-family: "Baloo 2";
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
`;

export const ResumeSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .resumeSection__title {
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  .resumeSection__price {
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  .resumeSection__total {
    font-size: ${({ theme }) => theme.textSizes["text-bold-l"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-weight: 700;
  }

  .resumeSection__button {
    width: 100%;
    height: 2.875rem;
    border: none;
    margin-top: 0.7rem;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors["base-white"]};
    background: ${({ theme }) => theme.colors["brand-yellow"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
    font-weight: 700;
    line-height: 1.3rem;
    transition: 0.4s;
  }

  .resumeSection__button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .resumeSection__button:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
