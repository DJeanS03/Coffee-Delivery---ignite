import styled from "styled-components";

export const QuantityInputContainer = styled.div`
    flex: 1;
    background: ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px;
    padding: 0.5rem;

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
`

export const IconWrapper = styled.button`
    height: 0.875rem;
    width: 0.875rem;
    background: none;
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    transition: .4s;
    line-height: 0;

    &:disabled {
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    }
`
