import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .sectionTitle__title {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  }

  .sectionTitle__subtitle {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
    margin-top: 0.5rem;
  }
`;
