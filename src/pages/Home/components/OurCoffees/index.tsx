import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffeesContainer className="container">
            <h1>Nossos cafés</h1>

            <CoffeeList>
                <CoffeeCard />
            </CoffeeList>
        </OurCoffeesContainer>
    )
}