import { CoffeeCartCard } from "../CoffeeCartCard";
import { ResumeSection } from "./ResumeSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <h1 className="checkoutForm__title">Cafés Selecionados</h1>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ResumeSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
