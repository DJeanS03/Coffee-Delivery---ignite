import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  max-width: 100%;
  /*   margin-top: 2rem; */
  padding: 2rem 1.5rem;

  h1 {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-family: "Baloo 2";
  }
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    /* grid-template-columns: 1fr; */
    column-gap: 1rem;
  }
`;
