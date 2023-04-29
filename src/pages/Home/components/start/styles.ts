import styled, { css } from "styled-components";
import startBackground from '../../../../assets/startBackground.svg'
import { rgba } from 'polished'

export const StartContainer = styled.section `
    width: 100%;
    height: 34rem;
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
        font-size: ${({theme}) => theme.textSizes['title-title-xl']};
        color: ${({theme}) => theme.colors['base-title']};
        font-family: 'Baloo 2';
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 1rem;
    }

    .subTitle {
        font-size: ${({theme}) => theme.textSizes['text-regular-l']};
        color: ${({theme}) => theme.colors['base-subtitle']};
    }
`

export const StartContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`

export const ItemsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`

export const iconStyle = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 999px;
        
    display: flex;
    align-items: center;
    justify-content: center;

`


/* .titles {
        max-width: 36.75rem;
        margin-bottom: 4.25rem;
    }

    .title {
        font-family: 'Baloo 2';
        font-size: 3rem;
        line-height: 130%;
        color: ${({theme}) => theme.colors['base-title']};
        margin-bottom: 16px;
    }

    .subTitle {
        font-size: 1.25rem;
        line-height: 130%;
        color: ${({theme}) => theme.colors['base-title']};
    }

    .icon {
        font-size: 16px;
        color: ${({theme}) => theme.colors['base-white']};

        
    }

    .boxIcons {
        height: 2rem;
        width: 2rem;
        border-radius: 999px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .yellowD {
        background: ${({theme}) => theme.colors['brand-yellow-dark']};
    }

    .yellow {
        background: ${({theme}) => theme.colors['brand-yellow']};
    }

    .baseT {
        background: ${({theme}) => theme.colors['base-text']};
    }

    .purple {
        background: ${({theme}) => theme.colors['brand-purple']};
    }

    .descriptionBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
    } */