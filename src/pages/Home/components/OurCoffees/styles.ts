import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
    width: 100%;
    margin-top: 2rem;

    h1 {
        font-size: ${({theme}) => theme.textSizes['title-title-l']};
        color: ${({theme}) => theme.colors['base-subtitle']};
        font-family: 'Baloo 2'
    }
`

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;
`