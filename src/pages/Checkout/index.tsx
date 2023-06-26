import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./styles";

export function CheckOut() {
    return (
        <CheckoutContainer className="container">
            <CheckoutForm />
        </CheckoutContainer>
    )
}