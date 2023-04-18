import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom'

export function Header() {
    return(
        <HeaderContainer>
            <nav className="header">
                <a href="">
                    <img src="../../assets/Logo.svg" alt="" />
                    <NavLink to="/">LOGO</NavLink>
                </a>
                <div className="actions">
                    <div className="location">
                        <MapPin size={22} color="#4b2995" weight="fill" />
                        Porto Alegre, RS
                    </div>
                    
                    <div className="cart">
                        <a href="/checkout">
                            <ShoppingCart size={24} color="#c47f17" weight="fill"/>
                        </a>
                    </div>
                </div>
            </nav>
        </HeaderContainer>
    )

}