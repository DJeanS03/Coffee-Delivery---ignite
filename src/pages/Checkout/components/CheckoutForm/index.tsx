import { useTheme } from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { CheckoutFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CheckoutForm() {
  const { colors } = useTheme();
  return (
    <CheckoutFormContainer>
      <h1 className="checkoutForm__title">Complete seu pedido</h1>

      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  );
}
