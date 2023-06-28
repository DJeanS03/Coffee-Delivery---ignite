import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit_card: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit_card: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const paymentMethodsError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          value={key}
          label={label}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodsError && <p> {paymentMethodsError} </p>}
    </PaymentMethodOptionsContainer>
  );
}
