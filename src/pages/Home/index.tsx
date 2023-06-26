import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { Start } from "./components/start";
import { OurCoffees } from "./components/OurCoffees";

export function Home() {
  return (
    <HeaderContainer>
      <Start />
      <OurCoffees />
    </HeaderContainer>
  );
}
