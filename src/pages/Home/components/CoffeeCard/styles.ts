import styled from "styled-components";

export const CoffeeCardContainer = styled.nav`
  max-width: 16rem;
  max-height: 19.375rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 0;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  @media (max-width: 400px) {
    max-width: 14rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: 700;
  font-family: "Baloo 2";
  line-height: 26px;

  margin-bottom: 0.5rem;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  color: ${({ theme }) => theme.colors["base-label"]};
  font-weight: 400;

  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.188rem;
  }

  .symbol {
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  }

  .price {
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    font-weight: 700;
    font-family: "Baloo 2";
    line-height: 0.75rem;
  }

  @media (max-width: 400px) {
    gap: 0.75rem;
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }
  }
`;
