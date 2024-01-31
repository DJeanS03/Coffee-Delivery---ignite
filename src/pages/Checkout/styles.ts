import styled from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 15rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;
