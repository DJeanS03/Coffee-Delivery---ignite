import styled from 'styled-components'

export const HeaderContainer = styled.section`
    .titles {
        max-width: 588px;
        margin-bottom: 68px;
    }

    .title {
        font-family: 'Baloo 2';
        font-size: 48px;
        line-height: 130%;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 16px;
    }

    .subTitle {
        font-size: 20px;
        line-height: 130%;
        color: ${(props) => props.theme['base-title']};
    }

    .icon {
        font-size: 16px;
        color: ${(props) => props.theme['base-white']};

        
    }

    .boxIcons {
        height: 32px;
        width: 32px;
        border-radius: 999px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .yellowD {
        background: ${(props) => props.theme['brand-yellow-dark']};
    }

    .yellow {
        background: ${(props) => props.theme['brand-yellow']};
    }

    .baseT {
        background: ${(props) => props.theme['base-text']};
    }

    .purple {
        background: ${(props) => props.theme['brand-purple']};
    }

    .descriptionBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
    }
`