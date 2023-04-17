import { HeaderContainer } from "./styles";
import { MapPin, Money, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
    return(
        <HeaderContainer>
            <nav className="header">
                <a href="">
                    <img src="../../assets/Logo.svg" alt="" />
                    LOGO
                </a>
                <div className="actions">
                    <div className="location">
                        <MapPin size={22} color="#4b2995" weight="fill" />
                        Porto Alegre, RS
                    </div>
                    
                    <div className="cart">
                        <ShoppingCart size={24} color="#c47f17" weight="fill" />
                    </div>
                </div>
            </nav>
        </HeaderContainer>
    )

}