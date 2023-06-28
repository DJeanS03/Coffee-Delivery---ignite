import { PaymentMethodInputContainer } from "./styles";
import { CreditCard } from "@phosphor-icons/react";

export function PaymentMethodInput() {
  return (
    <PaymentMethodInputContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </PaymentMethodInputContainer>
  );
}
