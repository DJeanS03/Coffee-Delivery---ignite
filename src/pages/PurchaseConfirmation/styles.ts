import styled from "styled-components";

export const PurchaseConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  /* margin-top: 5rem;
  margin-bottom: 10rem;
  padding: 0 1.5rem; */
  padding: 5rem 1.5rem 10rem;

  .purchase__title {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-family: "Baloo 2";
  }

  .purchase__subtitle {
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 425px) {
      img {
        max-width: 18.75rem;
      }
    }
  }
`;

export const PurchaseDetailsContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-background"]};
  border-radius: 6px 36px 6px 36px;
  min-width: 32rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    z-index: -1;
  }

  @media (max-width: 768px) {
    margin: 5rem 2rem;
  }

  @media (max-width: 425px) {
    min-width: 30rem;
  }
`;
