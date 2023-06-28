import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PaymentMethodInputContainer, ContentContainer } from "./styles";

type PaymentMethodsInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodsInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>

      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  );
});
