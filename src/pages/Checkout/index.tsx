import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { SelectedCoffeesContainer } from "./components/SelectedCoffees/styles";
import { CheckoutContainer } from "./styles";

export function CheckOut() {
    return (
        <CheckoutContainer className="container">
            <CheckoutForm />
            <SelectedCoffees />
        </CheckoutContainer>
    )
}