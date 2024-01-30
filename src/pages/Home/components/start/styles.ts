import styled, { css } from "styled-components";
import startBackground from "../../../../assets/startBackground.svg";
import { rgba } from "polished";

export const StartContainer = styled.section`
  width: 100%;
  height: 34rem;
  padding: 0 1.5rem;
  background: ${({ theme }) => `url(${startBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  .titles {
    max-width: 36.75rem;
  }

  .title {
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    font-family: "Baloo 2";
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  .subTitle {
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  @media (max-width: 535px) {
    height: 100vh;
  }
`;

export const StartContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  img {
    max-width: 50%;
  }

  @media (max-width: 535px) {
    flex-direction: column-reverse;

    img {
      max-width: 60%;
    }
  }
`;

export const ItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
  gap: 0.5rem;
`;

export const iconStyle = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
