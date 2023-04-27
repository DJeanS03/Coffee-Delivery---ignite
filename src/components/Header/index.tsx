import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import  coffeeLogo  from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom'

export function Header() {
    return(
        <HeaderContainer>
            <nav className="container">
                <NavLink to={'/'}>
                    <img src={coffeeLogo}  />
                </NavLink>
                 
                <HeaderButtonContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20}  weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>
                    
                    <NavLink to={'/checkout'}>
                        <HeaderButton variant="yellow">
                            <ShoppingCart weight="fill"/>
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonContainer>
            </nav>
        </HeaderContainer>
    )
}