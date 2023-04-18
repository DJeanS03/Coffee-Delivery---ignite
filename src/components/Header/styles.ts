import styled from 'styled-components'

export const HeaderContainer = styled.header`
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 10rem;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .location {
        max-width: 8.938rem;
        height: 2.375rem;
        border-radius: 6px;
        padding: 0.5rem;
        background: ${(props) => props.theme['brand-purple-light']};
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.8em;
    }

    .cart {
        height: 2.375rem;
        width: 2.375rem;
        background: ${(props) => props.theme['brand-yellow-light']};
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`