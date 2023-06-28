import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffeeLogo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useGeolocation } from "../../Hooks/UseGeolocation";
import { useCart } from "../../Hooks/useCart";

export function Header() {
  const { location } = useGeolocation();
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <nav className="container">
        <NavLink to={"/"}>
          <img src={coffeeLogo} />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            {/* {location ? location : "Definir Localização"} */}
          </HeaderButton>

          <NavLink to={"/checkout"}>
            <HeaderButton variant="yellow">
              <ShoppingCart weight="fill" />
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </nav>
    </HeaderContainer>
  );
}
