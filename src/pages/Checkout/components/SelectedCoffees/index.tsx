import { useCart } from "../../../../Hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ResumeSection } from "./ResumeSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();
  return (
    <SelectedCoffeesContainer>
      <h1 className="checkoutForm__title">Cafés Selecionados</h1>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <ResumeSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
